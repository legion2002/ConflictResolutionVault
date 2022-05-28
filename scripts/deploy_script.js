// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  const Vault = await hre.ethers.getContractFactory("Vault");
  const vault = await Vault.deploy("0xfe024708B8556F66D18199b2c498F1c93eAb6eA4", "0xeC40Dd423535b93F6Cab4f2487B10e2026465D6f");

  await vault.deployed();

  console.log("Vault deployed to:", vault.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
