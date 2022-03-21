const { ethers, network } = require('hardhat');
const masterChef = require(`../../deployments/dev/${network.name}-MasterChef.json`);

async function main() {
  const [deployer] = await ethers.getSigners();
  let mc = await ethers.getContractAt(masterChef.contractName, masterChef.address, deployer);
  //增加质押挖矿池 mytoken 地址
  await mc.add(50,'0x9cBf53811f76a35700f4646b92e14397d8674b27',true);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});

// npx hardhat run scripts/Mysushi/add_mytoken_pool_3.js --network rinkeby 