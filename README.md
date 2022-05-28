## Welcome To The Conflict Resolution Vault

1. Contract Deployed At - https://rinkeby.etherscan.io/address/0x8005E913892D8364F8C5A650b9C485Cd511EFBc1a

Setup - 
First run ``npm install``  
To deploy contract run ``npx hardhat run scripts/deploy_script.js``, remember to change buyer and seller accounts in the deploy_script.js file to change the arguments you are sending to the constructor.
To verify contract run 
``` npx hardhat verify --network rinkeby CONTRACT_ADDRESS 
CONSTRUCTOR_ARG_1 CONSTRUCTOR_ARG_2 ```
