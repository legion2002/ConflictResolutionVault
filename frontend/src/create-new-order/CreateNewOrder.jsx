import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Grid, Container, Typography } from "@material-ui/core";
import { ethers } from "ethers";

export function CreateNewOrderForm() {
  const [buyerKey, setBuyerKey] = useState(""); 
  const [sellerKey, setSellerKey] = useState(""); 
  const [terms, setTerms] = useState(""); 
  const [totalCost, setTotalCost] = useState(""); 
  const [juryRoot, setJuryRoot] = useState(""); 
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
  const onJuryRootChange = (e) => setJuryRoot(e.target.value);
  const onJuryNumberChange = (e) => setJuryNumber(e.target.value);
  
  
  const handleSubmit = () => {
    console.log(buyerKey);
    console.log(sellerKey);
    console.log(terms);
    console.log(totalCost);
    console.log(juryRoot);
    console.log(juryNumber);
    // deployContract();
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
        marginTop: '20px',
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
                    onChange={onBuyerChange}/>
            </Grid>
            <Grid item xs={0} >
                <TextField style={{
                    // width: "50px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Seller Key" variant="outlined" 
                    onChange={onSellerChange}/>
            </Grid>
            <Grid item xs={0} >
                <TextField style={{
                    // width: "250px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Terms" variant="outlined" 
                    onChange={onTermsChange}/>
            </Grid>
            <Grid item xs={0}>
                <TextField style={{
                    // width: "302px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Total Cost" variant="outlined" 
                    onChange={onTotalCostChange}/>
            </Grid>
            <Grid item xs={0}>
                <TextField style={{
                    // width: "302px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Jury Root" variant="outlined" 
                    onChange={onJuryRootChange}/>
            </Grid>
            <Grid item xs={0}>
                <TextField style={{
                    // width: "302px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Jury Number" variant="outlined" 
                    onChange={onJuryNumberChange}/>
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