// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // When running the script with `npx hardhat run <script>` you'll find the Hardhat
// // Runtime Environment's members available in the global scope.
// // const { ethers,network,artifacts } = require("hardhat");
// const hre = require("hardhat");

// async function main() {
//   // Hardhat always runs the compile task when running scripts with its command
//   // line interface.
//   //
//   // If this script is run directly using `node` you may want to call compile
//   // manually to make sure everything is compiled
//   // await hre.run('compile');

//   // We get the contract to deploy
//   const Counter = await hre.ethers.getContractFactory("Counter");
//   // const counter = await Counter.deploy("Hello, Hardhat!");
//   const counter = await Counter.deploy();

//   await counter.deployed();

//   console.log("Counter deployed to:", counter.address);

//   let Artifact = await artifacts.readArtifact("Counter");
//   await writeAbiAddr(Artifact,counter.address,"Counter",network.name)
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });
const { ethers, network, artifacts } = require("hardhat");

const { writeAbiAddr } = require('./artifact_saver.js');


async function main() {
  // await hre.run('compile');
  const Bank = await ethers.getContractFactory("Bank");
  const bank = await Bank.deploy();

  await bank.deployed();
  console.log("Bank deployed to:", bank.address);

  let Artifact = await artifacts.readArtifact("Bank");
  await writeAbiAddr(Artifact, bank.address, "Bank", network.name);

  // console.log(`Please verify: npx hardhat verify ${counter.address}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });