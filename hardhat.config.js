require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const API_URL = process.env.RINKEBY_URL;
const PRIV_KEY = process.env.PRIV_KEY;
const ETHERSCAN_KEY = process.env.API_KEY;
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: API_URL,
      accounts: [`0x${PRIV_KEY}`]
    }
    
  },
  etherscan: {
      apiKey: ETHERSCAN_KEY
  }
  
};
