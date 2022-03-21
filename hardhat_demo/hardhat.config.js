require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
//账号秘钥
const PRIVATEKEY = "";
const INFURA_API_KEY='2343aaafd6b6492ea873f95007b94720'
const ETHERSCAN_APIKEY='S5Y269NF6SYUQDECNUH4ZZ8EKCJJ7C4QYT'

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });
//  const dotenv = require("dotenv");
//  dotenv.config();

// const PRIVATEKEY = process.env.PRIVATEKEY;
// const INFURA_API_KEY = process.env.INFURA_API_KEY;
// const ETHERSCAN_APIKEY = process.env.ETHERSCAN_APIKEY;
// const { MNEMONIC,INFURA_API_KEY, ETHERSCAN_APIKEY,PRIVATEKEY } = process.env;
// console.log(PRIVATE_KEY)
// PRIVATEKEY = 

module.exports = {
  //部署网络
//   defaultNetwork: "hardhat",
  defaultNetwork: "ropsten",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${PRIVATEKEY}`],
      chainId: 5
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [`0x${PRIVATEKEY}`],
      chainId: 3
    },
    rinkeby: {
        url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
        accounts: [`0x${PRIVATEKEY}`],
        chainId: 4,
        gas: 21000000,
        gasPrice: 800000000
      },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_APIKEY}`
  },
  solidity: {
    // 编译版本
    compilers: [
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.4.26",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  //编译以后的文件路径
  paths: {
    // 合约来源
    sources: "./contracts",
    // 测试文件
    tests: "./test",
    // 缓存目录
    cache: "./cache",
    // 编译目录
    artifacts: "./artifacts"
  }
};