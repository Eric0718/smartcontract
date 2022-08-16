require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
require("hardhat-gas-reporter")

/** @type import('hardhat/config').HardhatUserConfig */

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby:{
      url: RINKEBY_RPC_URL,
      chainid: 4,
      accounts:[PRIVATE_KEY]
    },
    localhost: {
      url: "http://localhost:8545",
      chainId: 31337,
    },
  },
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
  },
};
