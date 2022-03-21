const { artifacts,network } = require('hardhat');
const { writeAbiAddr } = require('./artifact_saver.js')
async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying contracts with the account:",
      deployer.address
    );
    console.log("Account balance:", (await deployer.getBalance()).toString());
     const WETH01 = await ethers.getContractFactory("WETH01");
     const wETH01 = await WETH01.deploy();

    await wETH01.deployed();
    console.log("WETH01合约地址：", wETH01.address);

    let artifact = await artifacts.readArtifact("WETH01");
    await writeAbiAddr(artifact, wETH01.address, "WETH01", network.name);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});

//npx hardhat run scripts/Myuniswap/deploy_weth_1.js --network rinkeby