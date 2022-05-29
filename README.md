## Welcome To The Conflict Resolution Vault [![gh-pages frontend](https://github.com/legion2002/ConflictResolutionVault/actions/workflows/ghpages.yml/badge.svg)](https://github.com/legion2002/ConflictResolutionVault/actions/workflows/ghpages.yml)

1. View deployed Contract at [rinkeby etherscan](https://rinkeby.etherscan.io/address/0x8005E913892D8364F8C5A650b9C485Cd511EFBc1a)

### Setup [contracts]
- First run ``npm install``  
- To deploy contract run ``npx hardhat run scripts/deploy_script.js``, remember to change buyer and seller accounts in the deploy_script.js file to change the arguments you are sending to the constructor.
- To verify contract run 
  ```zsh
  npx hardhat verify --network rinkeby CONTRACT_ADDRESS 
  CONSTRUCTOR_ARG_1 CONSTRUCTOR_ARG_2 ```

### Setup [frontend interactions]
- `cd` into `./frontend` folder
- Install packages with NPM install
- `npm start` to run the development server

View latest stable deployment [here](https://legion2002.github.io/ConflictResolutionVault/)
