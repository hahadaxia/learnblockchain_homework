const { ethers, network } = require("hardhat");

const Addr = require(`../../deployments/${network.name}/Teacher.json`)

async function main() {
  let [owner]  = await ethers.getSigners();


  let teacher = await ethers.getContractAt("Teacher",
    Addr.address,
    owner);
  console.log("begin log student1 score...")
  let studentaddr1 = '0x3A40c03E6279518F184B73Cd234b19e25ec82eD6'
  let ss1 = 90
  let changescore = await teacher.set_Score(studentaddr1,ss1);
  //   wait until the transaction is mined
  await changescore.wait();

  console.log("begin log student2 score...")
  let studentaddr2 ='0xa75DcE57fc909871470a6124690265f41031AA25'
  let ss2 = 60
  changescore = await teacher.set_Score(studentaddr2,ss2);
  //   wait until the transaction is mined
  await changescore.wait();

  const studentscore1 = await teacher.get_Score(studentaddr1);
  console.log("student1 score:" + studentscore1)

  const studentscore2 = await teacher.get_Score(studentaddr2);
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