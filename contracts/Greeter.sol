//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";



contract Vault is ERC20, AccessControl {
    
    event OrderCreated(uint8 indexed orderId, uint64 indexed orderTime, OrderStatus indexed status);
    event OrderCancelled(uint8 indexed orderId, uint64 indexed orderTime, OrderStatus indexed status);


    /// @note remember to gas optimize later
    enum OrderStatus{
        PROPOSED,
        ACTIVE,
        ORDER_COMPLETE,
        ORDER_DELIVERED,
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
        OrderStatus status;
        uint256 promisedAmount;
        uint256 paidAmount;
        string termsOfCompletion;
        uint256 conflictPremium;
        bytes32 juryRoot;
    }


    struct Conflict{
        uint8 conflictId;
        uint8 orderId;
        ConflictStatus status;        
    }

    uint8 private nextOrderId = 0;
    address payable immutable seller;
    address payable immutable buyer; 
    bytes32 public constant SELLER_ROLE = keccak256("SELLER");
    bytes32 public constant BUYER_ROLE = keccak256("BUYER");
    mapping(uint8 => Order) public orders;

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

    

    function requestPayout(uint8 orderId) public onlyRole(SELLER_ROLE){



    }

    function lodgeConflict(uint8 orderId) public onlyRole(BUYER_ROLE){
        

    }

    function acceptOrder(uint8 orderId) public payable{
        require(msg.value >= orders[orderId].conflictPremium, "Conflict Premium Insufficient");
        orders[orderId].status = OrderStatus.ACTIVE;
    }

    function voteOnConflict(uint8 orderId, uint8 conflictId, bool vote){
        

    }

    // =============================== GETTERS ====================================
    
    // =============================== SETTERS ====================================














}
