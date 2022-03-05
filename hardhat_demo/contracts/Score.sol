// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Score{ 

    address public owner; 

    mapping(address => uint) public scores;


    constructor() { 

        owner = msg.sender; 

    } 

    modifier onlyOwner() { 

        require(msg.sender == owner, "Not owner"); 
        _;
    }


    function getScore(address student) public view returns(uint) { 
        return scores[student]; 
    } 

    function updateScore(address student,uint s) public onlyOwner { 

        require(s >=0&&s<=100,'score is invalid'); 
        scores[student] = s;
    } 
 
 }

 interface  IScore { 

    function updateScore(uint score) external ; 

    function getScore(address student) external  view returns(uint) ; 

 }

 contract Teacher {
    event logdata(uint x);
    mapping(address => uint) public scores;

    constructor() payable {
        Score score = new Score();
    }

    function socre(address student,uint score) external { 
            IScore(student).updateScore(score);
        }
 }