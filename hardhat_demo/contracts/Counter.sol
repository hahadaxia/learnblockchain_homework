// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0; 
import "hardhat/console.sol";

contract Counter { 
    uint public counter; 
    constructor() { 
        counter = 0; 
    } 

    function callcount() public { 
        counter = counter + 1; 
        console.log('counter:',counter); 
    } 

    function count() public { 
        counter = counter + 1; 
    }

    function getcount() public view returns (uint) { 
        return counter; 
    }  
 }