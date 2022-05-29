import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Grid, Container, Typography } from "@material-ui/core";
import { ethers } from "ethers";
import { bytecode } from "./bytecode"
import { _abi } from "./abiConstants"

export function ContractDeployForm() {
  const [buyerKey, setBuyerKey] = useState(""); 
  const [sellerKey, setSellerKey] = useState(""); 
  // const [jurors, setJurors] = useState(""); 

  const { ethereum } = window;

  const onBuyerChange = (e) => {
    setBuyerKey(e.target.value);
    // console.log("ASda" + e.target.value);
  }
  const onSellerChange = (e) => setSellerKey(e.target.value);
  // const jurorsChange = (e) => setJurors(e.target.value);

  // const deployContract = () => {
    

  // };
  
  const deployContract = async () => {
    try {
      if (ethereum) {
        // const parsedAmount = ethers.utils.parseEther(amount);

        if(!window.ethereum) {
          console.log("problems");
        }

        // verify buyerAddress
        if(!ethers.utils.isAddress(buyerKey)) {
          console.log("INVALID BUYER ADDRESS!");
          alert("INVALID BUYER ADDRESS!");
          return;
        }

        // const thirdParties = markedFor;
        // console.log(thirdParties);

        // // verify third parties
        // if(thirdParties.length === 0) {
        //   alert("Need to mark for atleast one address!");
        //   return;
        // }
        // let valid_third_parties = true;
        // thirdParties.forEach((addr) => {
        //   if(!ethers.utils.isAddress(addr)){
        //     valid_third_parties = false;
        //   }
        // });

        // if(!valid_third_parties) {
        //   alert("Invalid marked for addresses!!");
        //   return;
        // }


        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const abi = _abi;
        console.log("CONTRACT ABI: " + abi);
        console.log("SIGNER   " + provider.getSigner());

        const factory = new ethers.ContractFactory(abi, bytecode, signer);

        console.log("FACTORY CREATED");

        const senderAdrress = await signer.getAddress();
        // console.log("SENDER ADDDDDRRR: " + senderAdress);

        // console.log("CONTRACT DEPLOY ARGS: ", addressTo, expiry, message, senderAdrress, thirdParties);
        // const contract = await factory.deploy(sellerKey, buyerKey
        // , {
        //   value: parsedAmount,
        // });
        const contract = await factory.deploy(sellerKey, buyerKey);
        const response = await contract.deployTransaction.wait()
        console.log("I received ", response)


        console.log("CONTRACT ADDRESS: " + contract.address);
        alert("Contract deployed at: " + contract.address);

        // updating global current contract address
        // current_contract_address = contract.address;
        window.localStorage.setItem("current_contract_address", contract.address);
        // const payload = {
        //   intermediary_public_key: addressTo,
        //   amount,
        //   expiry: iso_expiry,
        //   message,
        //   contract_address: current_contract_address,
        //   destination_public_keys: markedFor
        // }
      
        // showAlert("Contract marked and fully deployed!", "success");

        alert("Contract marked and fully deployed!");


      } else {
        console.log("No ethereum object  HELLLLLLLLO");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object Hell2");
    }
  };
  const handleSubmit = () => {
    console.log(buyerKey);
    console.log(sellerKey);
    // console.log(jurors);
    deployContract();
  }


  return (
    // <div>
    // <h2>Form Demo</h2>

    // <TextField
    //   onChange={onTextChange}
    //   value={textValue}
    //   label={"Text Value"} //optional
    // />

    // <Button onClick={handleSubmit}>Submit</Button>
    // <Button onClick={handleReset}>Reset</Button>
    // </div>


    <Container maxWidth='md' style={{
        marginTop: '40px',
    }}>
        <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
            Create Vault
        </Typography>
        <Grid container spacing={0} align="center" justifyContent="center">
            <Grid item xs={0}>
                <TextField style={{
                    // width: "302px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                  }}
                    id="outlined-basic" 
                    label="Buyer Key" 
                    variant="outlined" 
                    onChange={onBuyerChange}
                    value={buyerKey}
                />
            </Grid>
            <Grid item xs={0} >
                <TextField style={{
                    // width: "302px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                  }}
                  id="outlined-basic" 
                  label="Seller Key" 
                  variant="outlined" 
                  onChange={onSellerChange}
                  value={sellerKey}
                />
            </Grid>
            {/* <Grid item xs={0} >
                <TextField style={{
                    width: "250px",
                    height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                  }}
                  id="outlined-basic" 
                  label="Juror Keys (Optional)" 
                  variant="outlined" 
                  onChange={jurorsChange}
                  value={jurors}
                />
            </Grid> */}
            <Grid item xs={0}>
                <Button style={{
                    backgroundColor: "#100F15",
                    color: '#FFFFFF',
                    width: "200px",
                    height: "55px",
                    fontSize: "14px",
                    textTransform: "none"
                }}
                  variant="contained"
                  onClick={handleSubmit}
                >Create Relation</Button>
            </Grid>
        </Grid>
    </Container>

  );
};