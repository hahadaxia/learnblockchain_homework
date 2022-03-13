const { ethers, network, artifacts } = require("hardhat");

const { writeAbiAddr } = require('../artifact_saver.js');


async function main() {
  // await hre.run('compile');
  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy();

  await vault.deployed();
  console.log("Vault deployed to:", vault.address);

  let Artifact = await artifacts.readArtifact("Vault");
  await writeAbiAddr(Artifact, vault.address, "Vault", network.name);

  // console.log(`Please verify: npx hardhat verify ${counter.address}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });