const { ethers, network } = require("hardhat");

const Addr = require(`../../deployments/${network.name}/Bank.json`)

async function main() {
  let [owner]  = await ethers.getSigners();
  // let path = "m/44'/60'/1'/0/0";
  // let secondMnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic, path);
  let bank = await ethers.getContractAt("Bank",
    Addr.address,
    owner);

  const allbalance = await bank.balanceofall()
  console.log("all Banlace:" + allbalance )

//   await withdraw all the balance to  the new add;
  const newaddr = '0x3A40c03E6279518F184B73Cd234b19e25ec82eD6';
  const withdraw = await bank.withdraw(newaddr);
//   wait until the transaction is mined
  await withdraw.wait();

  const newValue = await bank.balanceof(newaddr);
  console.log("newaddr Banlace:" +newValue)
  //  search the owner balance
  const owneraddr = '0xa75DcE57fc909871470a6124690265f41031AA25';
  const ownervalue = await bank.balanceof(owneraddr);
  console.log("owner Banlace:" +ownervalue)



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