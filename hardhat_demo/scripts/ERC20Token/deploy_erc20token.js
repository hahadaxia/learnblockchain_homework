const { ethers, network, artifacts } = require("hardhat");

const { writeAbiAddr } = require('../artifact_saver.js');


async function main() {
  // await hre.run('compile');
  const Erc20Token = await ethers.getContractFactory("ERC20TokenDemo");
  const erc20token = await Erc20Token.deploy();

  await erc20token.deployed();
  console.log("Counter deployed to:", erc20token.address);

  let Artifact = await artifacts.readArtifact("ERC20TokenDemo");
  await writeAbiAddr(Artifact, erc20token.address, "ERC20TokenDemo", network.name);

  // console.log(`Please verify: npx hardhat verify ${counter.address}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });