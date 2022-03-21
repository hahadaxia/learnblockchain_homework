pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Vault1 {
    address public tokenAddr;
    mapping(address => uint256) public userBalance;

    constructor(address _tokenAddr) {
        tokenAddr = _tokenAddr;
    }

    function deposit(uint256 _amount) public {
        require(
            IERC20(tokenAddr).transferFrom(msg.sender, address(this), _amount),
            "TransferFrom failed"
        );
        userBalance[msg.sender] += _amount;
    }

    function withdraw(uint256 _amount) public {
        require(
            userBalance[msg.sender] >= _amount && _amount > 0,
            "Sorry, your credit is running low"
        );
        userBalance[msg.sender] -= _amount;
        require(
            IERC20(tokenAddr).transfer(msg.sender, _amount),
            "Transfer failed"
        );
    }
}

// // SPDX-License-Identifier: GPL-3.0
// pragma solidity >=0.8.0;
// import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
// // import "../utils/"
// import "../utils/TransferHelper.sol";
// // error EmptyBalance();
// contract Vault {
//     mapping(address => uint) deposited;

//     address erc20TokenDemoAddress;
//     // IERC20 erc20TokenDemoContract = IERC20(erc20TokenDemoAddress);

//     constructor(address _erc20TokenDemoAddress)  {
//         erc20TokenDemoAddress = _erc20TokenDemoAddress;
//     }

//     function deposite(uint256 amount) external {
//         TransferHelper.safeTransferFrom(erc20TokenDemoAddress, msg.sender, address(this), amount);
//         deposited[msg.sender] += amount;
//     }
//     function withdraw(uint256 amount) public {
//         address target = msg.sender;
//         uint256 balance = deposited[target];

//         if (balance >= amount) {
//             TransferHelper.safeTransferETH(msg.sender, amount);
//             deposited[target] = balance - amount;
//         } 
//     }
// }



// error EmptyBalance();

// contract Vault {
//     mapping(address => uint256) public userBalance;
//     address underlyingAsset;

//     constructor(address tokenAddress) {
//         underlyingAsset = tokenAddress;
//     }

//     function withdraw(uint256 amount) public {
//         address target = msg.sender;
//         uint256 balance = userBalance[target];

//         if (balance >= amount) {
//             TransferHelper.safeTransferETH(msg.sender, amount);
//             userBalance[target] = balance - amount;
//         } else {
//             revert EmptyBalance();
//         }
//     }

//     function deposite(uint256 amount) external {
//         TransferHelper.safeTransferFrom(underlyingAsset, msg.sender, address(this), amount);
//         userBalance[msg.sender] += amount;
//     }
// }