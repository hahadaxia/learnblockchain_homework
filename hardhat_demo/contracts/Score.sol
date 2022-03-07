// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

interface  IScore { 
    function getScore(address student) external  view returns(uint); 
    function updateScore(address student,uint s) external; 

 }

contract Score is IScore { 
    address public owner; 
    mapping(address => uint) public scores;

    constructor() { 

        owner = msg.sender; 

    } 
    modifier onlyOwner() { 
        require(msg.sender == owner, "Not owner"); 
        _;
    }
    function getScore(address student) public override  view returns(uint) {
        return scores[student]; 
    } 
    function updateScore(address student,uint s) public override onlyOwner { 
        require(s >=0&&s<=100,'score is invalid'); 
        scores[student] = s;
    } 
 }