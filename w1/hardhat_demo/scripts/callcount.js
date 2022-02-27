const { ethers, network } = require("hardhat");

const Addr = require(`../deployments/${network.name}/Counter.json`)

async function main() {
  let [owner]  = await ethers.getSigners();


  let counter = await ethers.getContractAt("Counter",
    Addr.address,
    owner);

//   await counter.add(3);
  const newcounter = await counter.callcount();
//   wait until the transaction is mined
  await newcounter.wait();

  const newValue = await counter.getcount();

  console.log("newValue:" + newValue)

}


main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});

// const {ethers,network } = require("hardhat");
// const Addr = require(`../dep  `)
// async function main() {
//     let {owner} = await ethers.getSigner();

//     let counter = await ethers.getContractAt("Counter",Addr.addrss,owner);
//     await counter.count()
//     let newvalue = await counter.counter();
// }