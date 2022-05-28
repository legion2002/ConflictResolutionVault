//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";



contract Vault is ERC20, AccessControl {
    
    event OrderCreated(uint8 indexed orderId, uint64 indexed orderTime, OrderStatus indexed status);
    event OrderCancelled(uint8 indexed orderId, uint64 indexed orderTime, OrderStatus indexed status);
    event OrderDelivered(uint8 indexed orderId, uint64 indexed orderTime, OrderStatus indexed status);
    event ConflictStarted(uint8 indexed conflictId, uint64 indexed conflictTime, ConflictStatus indexed status);




    /// @note remember to gas optimize later
    enum OrderStatus{
        PROPOSED,
        ACTIVE,
        ORDER_DELIVERED,
        ORDER_COMPLETE,        
        CONFLICT,
        CANCELLED
    }
    enum ConflictStatus{
        NO_CONFLICT,
        CONFLICT_IN_PROGRESS,
        CONFLICT_SETTLED,
        CONFLICT_CANCELLED
    }
    struct Order{
        uint8 id;
        uint64 timeOfOrder;
        uint64 deliveryTime;
        OrderStatus status;
        uint256 promisedAmount;
        uint256 paidAmount;
        string termsOfCompletion;
        uint256 conflictPremium;
        bytes32 juryRoot;
    }

    struct Conflict{
        uint8 conflictId;
        ConflictStatus status;
        string sellerProof;
        string buyerProof;        
    }

    uint8 public nextOrderId = 0;
    uint32 public conflictTimePeriod = 12 hours;
    address payable immutable seller;
    address payable immutable buyer; 
    bytes32 public constant SELLER_ROLE = keccak256("SELLER");
    bytes32 public constant BUYER_ROLE = keccak256("BUYER");
    mapping(uint8 => Order) public orders;
    mapping(uint8 => Conflict) public conflicts;


    constructor(address payable _seller, address payable _buyer) ERC20("Vault", "VLT"){
        seller = _seller;
        buyer = _buyer;
        _setupRole(SELLER_ROLE, _seller);
        _setupRole(BUYER_ROLE, _buyer);
    }

    function startNewOrder(string calldata termsURI, uint256 _conflictPremium, bytes32 _juryRoot) public payable onlyRole(BUYER_ROLE){
        Order storage newOrder = orders[nextOrderId];
        newOrder.id = nextOrderId;
        newOrder.timeOfOrder = uint64(block.timestamp);
        newOrder.status = OrderStatus.PROPOSED;
        newOrder.promisedAmount = msg.value - _conflictPremium;
        newOrder.paidAmount = 0;
        newOrder.termsOfCompletion = termsURI;
        newOrder.conflictPremium = _conflictPremium;
        newOrder.juryRoot = _juryRoot;

        emit OrderCreated(nextOrderId, uint64(block.timestamp), OrderStatus.PROPOSED);
        nextOrderId++;
    }

    ///@dev Should be 12 hours after delivery time
    function confirmPayout(uint8 orderId) public onlyRole(BUYER_ROLE){
        require(orders[orderId].status == OrderStatus.ORDER_DELIVERED, "Order must be delivered before payout");
        require(orders[orderId].deliveryTime + conflictTimePeriod < block.timestamp);
        orders[orderId].paidAmount = orders[orderId].promisedAmount;
        orders[orderId].status = OrderStatus.ORDER_COMPLETE;
        buyer.transfer(orders[orderId].promisedAmount);        
    }

    

    function deliverAndRequestPayout(uint8 orderId) public onlyRole(SELLER_ROLE){
        require(orders[orderId].status == OrderStatus.ACTIVE, "Order must be in ACTIVE state");
        orders[orderId].status = OrderStatus.ORDER_DELIVERED;
        orders[orderId].deliveryTime = uint64(block.timestamp);
        emit OrderDelivered(orderId, uint64(block.timestamp), OrderStatus.ORDER_DELIVERED);         
    }

    function lodgeConflict(uint8 orderId, string memory conflictURI) public onlyRole(BUYER_ROLE){
        require(orders[orderId].status == OrderStatus.ORDER_DELIVERED, "Order must be delivered before conflict");
        require(orders[orderId].deliveryTime + conflictTimePeriod > block.timestamp);
        Conflict storage newConflict = conflicts[orderId];
        newConflict.conflictId = orderId;
        newConflict.status = ConflictStatus.CONFLICT_IN_PROGRESS;
        newConflict.sellerProof = conflictURI;
        emit ConflictStarted(orderId,uint64(block.timestamp), ConflictStatus.CONFLICT_IN_PROGRESS);       
    }


    function acceptOrder(uint8 orderId) public payable onlyRole(SELLER_ROLE){
        require(orders[orderId].status == OrderStatus.PROPOSED, "Order must be in PROPOSED state");
        require(msg.value >= orders[orderId].conflictPremium, "Conflict Premium Insufficient");
        orders[orderId].status = OrderStatus.ACTIVE;
    }

    function voteOnConflict(uint8 orderId, uint8 conflictId, bool vote) public{
        

    }

    function settleConflict() public{

    }

    function cancelConflict() public{

    }
    function buyerCancelsOrder() public{

    }

    function sellerCancelsOrder() public{

    }













}
