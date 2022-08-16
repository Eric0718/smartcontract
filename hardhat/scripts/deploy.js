//import 
 const {ethers} = require("hardhat")

async function main(){
   const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage"); 
   console.log("Deploy SimpleStorage...")
   const simpleStorage = await SimpleStorageFactory.deploy()
   await simpleStorage.deployed()
   console.log(`Deployed contract address: ${simpleStorage.address}`)
} 

main()
.then(() => process.exit(0))
.catch((error) => {
  console.error(error);
  process.exit(1);
});
 