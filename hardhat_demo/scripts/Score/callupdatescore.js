const { ethers, network } = require("hardhat");

const Addr = require(`../../deployments/${network.name}/Score.json`)

async function main() {
  let [owner]  = await ethers.getSigners();


  let score = await ethers.getContractAt("Score",
    Addr.address,
    owner);

  let studentaddr1 = '0x3A40c03E6279518F184B73Cd234b19e25ec82eD6'
  let ss1 = 90
  let changescore = await score.updateScore(studentaddr1,ss1);
  //   wait until the transaction is mined
  await changescore.wait();

  let studentaddr2 ='0xa75DcE57fc909871470a6124690265f41031AA25'
  let ss2 = 60
  changescore = await score.updateScore(studentaddr2,ss2);
  //   wait until the transaction is mined
  await changescore.wait();

  const studentscore1 = await score.getScore(studentaddr1);
  console.log("student1 score:" + studentscore1)

  const studentscore2 = await score.getScore(studentaddr2);
  console.log("student2 score:" + studentscore2)

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