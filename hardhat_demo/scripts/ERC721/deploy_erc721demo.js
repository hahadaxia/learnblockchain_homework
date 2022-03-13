const { ethers, network, artifacts } = require("hardhat");

const { writeAbiAddr } = require('../artifact_saver.js');


async function main() {
  // await hre.run('compile');
  const ERC721Demo = await ethers.getContractFactory("ERC721Demo");
  const erc721demo = await ERC721Demo.deploy();

  await erc721demo.deployed();
  console.log("ERC721 deployed to:", erc721demo.address);

  let Artifact = await artifacts.readArtifact("ERC721Demo");
  await writeAbiAddr(Artifact, erc721demo.address, "ERC721Demo", network.name);

  // console.log(`Please verify: npx hardhat verify ${counter.address}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });