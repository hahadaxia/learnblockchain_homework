const { artifacts,network } = require('hardhat');
const { writeAbiAddr } = require('./artifact_saver.js')
const masterChef = require(`../../deployments/dev/${network.name}-MasterChef.json`);

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    console.log("Account balance:", (await deployer.getBalance()).toString());
     const MyTokenMarket = await ethers.getContractFactory("MyTokenSushiMarket");
    const myTokenMarket = await MyTokenMarket.deploy("0x30BB339A76c751102c535eB63d64473f101855Aa", "0x9cBf53811f76a35700f4646b92e14397d8674b27", "0x15082567211e8951996125E44Ebebf7424F2E576",masterChef.address);
      // route0x30BB339A76c751102c535eB63d64473f101855Aa
      // MyToken合约地址0x9cBf53811f76a35700f4646b92e14397d8674b27
      //weth地址0x15082567211e8951996125E44Ebebf7424F2E576
     //等待部署完成
    await myTokenMarket.deployed();
    console.log("MyTokenSushiMarket合约地址：", myTokenMarket.address);
    //储存部署信息在文件
    let artifact = await artifacts.readArtifact("MyTokenSushiMarket");
    await writeAbiAddr(artifact, myTokenMarket.address, "MyTokenSushiMarket", network.name);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});

// npx hardhat run scripts/Mysushi/deploy_mytoken_market_4.js  --network rinkeby