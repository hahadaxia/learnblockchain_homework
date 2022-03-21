const { ethers, network, artifacts } = require("hardhat");

const { writeAbiAddr } = require('../artifact_saver.js');


async function main() {
  // await hre.run('compile');
  const Vault = await ethers.getContractFactory("Vault");
  erc20addr = '0x6577A6dAEe698dE2cBe1Ab9B3D45201245078a54';
  const vault = await Vault.deploy(erc20addr);

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