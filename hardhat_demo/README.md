# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

# common cmd
```shell
nvm use 14.6
npx hardhat compile
npx hardhat run scripts/deploy_counter01.js --network ropsten
npx hardhat run scripts/callcount.js --network ropsten

npx hardhat run scripts/Bank/deploy_bank.js --network ropsten 

npx hardhat run scripts/Score/deploy_score.js --network ropsten
npx hardhat run scripts/Score/deploy_Teacher.js --network ropsten

npx hardhat run scripts/ERC20Token/deploy_erc20token.js --network ropsten

npx hardhat run scripts/ERC721/deploy_erc721demo.js  --network rinkeby
出现HH702错误,需要删除artifacts文件夹下的cache等临时文件


````