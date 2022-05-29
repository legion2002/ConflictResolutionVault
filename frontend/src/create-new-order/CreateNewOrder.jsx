import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Grid, Container, Typography } from "@material-ui/core";
import { _abi } from "../contract-deployment/abiConstants"
import { ethers } from "ethers";
import { getmerklerootfromarray } from "../utilities/merklecreator";

export function CreateNewOrderForm() {
  const [buyerKey, setBuyerKey] = useState("");
  const [sellerKey, setSellerKey] = useState("");
  const [terms, setTerms] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [juryAddrs, setJuryAddrs] = useState("");
  const [juryNumber, setJuryNumber] = useState("");
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
  const onTermsChange = (e) => setTerms(e.target.value);
  const onTotalCostChange = (e) => setTotalCost(e.target.value);
  const onJuryAddrsChange = (e) => setJuryAddrs(e.target.value);
  const onJuryNumberChange = (e) => setJuryNumber(e.target.value);


  const handleSubmit = () => {
    console.log(buyerKey);
    console.log(sellerKey);
    console.log(terms);
    console.log(totalCost);
    console.log(juryAddrs.split(','));
    console.log(juryNumber);
    // deployContract();
    interactContract();
  }


  const interactContract = async () => {
    if (ethereum) {
      // const parsedAmount = ethers.utils.parseEther(amount);

      if (!window.ethereum) {
        console.log("WTF WTF WTF");
      }

      // // verify toAddress
      // if(!ethers.utils.isAddress(addressTo)) {
      //   console.log("INVALID TO ADDRESS!");
      //   alert("INVALID TO ADDRESS!");
      //   return;
      // }

      const current_contract_address = localStorage.getItem("current_contract_address");

      if (!current_contract_address || !ethers.utils.isAddress(current_contract_address)) {
        console.log("Deploy Contract First!");
        alert("No Contract Deploy");
        return;
      }

      console.log(current_contract_address);
      const abi = _abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(current_contract_address, abi, signer);

      try {
        const senderAdress = await signer.getAddress();
        console.log("SENDER ADDDDDRRR: " + senderAdress);

        console.log("CONTRACT ADDRESS: " + contract.address);

        const create_new_order_tx = await contract.startNewOrder(terms, ethers.utils.parseEther(totalCost), `0x${getmerklerootfromarray(juryAddrs.split(','))}`, juryNumber, {
          // gasLimit: 100000,
          value: ethers.utils.parseEther("0.1")
        });


        // const pay_tx = await contract.payMoneyTo(addressTo, parsedAmount);
        console.log("create_new_order_tx is ", create_new_order_tx)
        console.log("interact received ", await create_new_order_tx.wait());
      }
      catch (error) {
        console.log(error);
        alert("Invalid recipient", "error")
        return;
      }


      alert("Shipment Received Sent", "success")
      // console.log("FIRST SENT");

    } else {
      console.log("No ethereum object  HELLLLLLLLO");
    }

  };


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
      marginTop: '100px',
    }}>
      <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
        Create New Order
      </Typography>
      <Grid container spacing={0} align="center" justifyContent="center">
        <Grid item xs={0}>
          <TextField style={{
            // width: "50px",
            // height: "55px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
          }}
            id="outlined-basic" label="Buyer Key" variant="outlined"
            onChange={onBuyerChange} />
        </Grid>
        <Grid item xs={0} >
          <TextField style={{
            // width: "50px",
            // height: "55px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
          }}
            id="outlined-basic" label="Seller Key" variant="outlined"
            onChange={onSellerChange} />
        </Grid>
        <Grid item xs={0} >
          <TextField style={{
            // width: "250px",
            // height: "55px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
          }}
            id="outlined-basic" label="Terms" variant="outlined"
            onChange={onTermsChange} />
        </Grid>
        <Grid item xs={0}>
          <TextField style={{
            // width: "302px",
            // height: "55px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
          }}
            id="outlined-basic" label="Total Cost" variant="outlined"
            onChange={onTotalCostChange} />
        </Grid>
        <Grid item xs={0}>
          <TextField style={{
            // width: "302px",
            // height: "55px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
          }}
            id="outlined-basic" label="Jury Root" variant="outlined"
            onChange={onJuryAddrsChange} />
        </Grid>
        <Grid item xs={0}>
          <TextField style={{
            // width: "302px",
            // height: "55px",
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
          }}
            id="outlined-basic" label="Jury Number" variant="outlined"
            onChange={onJuryNumberChange} />
        </Grid>
        <Grid item xs={0}>
          <Button style={{
            backgroundColor: "#100F15",
            color: '#FFFFFF',
            width: "200px",
            height: "55px",
            fontSize: "14px",
            textTransform: "none"
          }}
            variant="contained" onClick={handleSubmit}>Place Order</Button>
        </Grid>
      </Grid>
    </Container>

  );
};