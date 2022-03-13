// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault {
    mapping(address => uint) deposited;

    address erc20TokenDemoAddress = 0x6577A6dAEe698dE2cBe1Ab9B3D45201245078a54;
    IERC20 erc20TokenDemoContract = IERC20(erc20TokenDemoAddress);

    constructor() payable {
        // owner = 
    }

    function deposite(address sender,address receiver,uint amount) public {
        erc20TokenDemoContract.transferFrom(sender,receiver, amount);
        deposited[msg.sender] += amount;
    }

    function withdraw() public {
        address myAddress = address(this);
        // uint countbalance = erc20TokenDemoContract.balanceOf(msg.sender);
        uint balance =  deposited[msg.sender];
        erc20TokenDemoContract.approve(myAddress, balance);
        erc20TokenDemoContract.transferFrom( msg.sender,msg.sender, balance);
        deposited[msg.sender] = 0;

    }



}