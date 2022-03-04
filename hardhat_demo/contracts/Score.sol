// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0; 
contract testFunc { 

    address public owner; 

    uint private deposited; 

    constructor() { 

        owner = msg.sender; 

    } 

    modifier onlyOwner() { 

        require(msg.sender == owner, "Not owner"); 
        _;


    } 
    fallback() external payable { 

        deposited += msg.value; 

    } 

    function getDeposited() public view returns(uint) { 
        return deposited; 
    } 

    function withdraw() public onlyOwner { 

        payable(owner).transfer(deposited); 
        
    } 
 
 }