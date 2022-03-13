const { ethers, network } = require("hardhat");

const Addr = require(`../deployments/${network.name}/Counter.json`)

async function main() {
    var abi = []; 
    var addr = "0x..."; 
    var contract = new ethers.Contract(address, abi, provider); 
    contract.transfer(targetAddress, amount) 
    .then(function(tx) { 
    console.log(tx); 
    });

  console.log("newValue:" + newValue)

}


main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});
