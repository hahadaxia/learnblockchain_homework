// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;
import "./Score.sol";
 
contract Teacher {
    address public owner;  
    address scoreAddress = 0xf4ec7D30A0E67CdB7FB1f549e8E8b2520E683E74;
    IScore scoreContract = IScore(scoreAddress);

    constructor() {

        owner = msg.sender ;

    }

    modifier onlyOwner() { 
        require(msg.sender == owner, "Not owner"); 
        _;
    }

    function set_Score(address student,uint ss) public onlyOwner  { 
            scoreContract.updateScore(student,ss);
        }
    
    function get_Score(address student) public view returns(uint)  { 
        // IScore scoreContract = IScore(scoreAddress);
        return scoreContract.getScore(student);
    }
 }