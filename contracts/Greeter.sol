//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Vault is ERC20, AccessControl {

    enum OrderStatus{
        SETUP_COMPLETE,
        ORDER_COMPLETE,
        CONFLICT,
        CANCELLED,
        IN_PROGRESS,
        NOT_ACTIVE
    }
    struct Order{
        uint8 id;
        bool sellerSetupComplete;
        bool buyerSetupComplete;
        uint64 timeOfOrder;
        OrderStatus status;
        uint256 promisedAmount;
        uint256 paidAmount;
        uint256 conflictPremium;
        mapping(address => uint256) jury;
        
    }

    bool private VaultSet = false;
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
    function startNewOrder() public{
    }

    function requestPayout() public{

    }

    function setJury() public{
    }

    function sellerSetup() public payable{

    }

    function buyerSetup() public payable{

    }

    // =============================== GETTERS ====================================
    
    // =============================== SETTERS ====================================














}
