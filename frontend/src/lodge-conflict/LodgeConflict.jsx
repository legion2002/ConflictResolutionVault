import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Grid, Container, Typography } from "@material-ui/core";
import { ethers } from "ethers";
import { _abi } from "../contract-deployment/abiConstants"

export function LodgeConflictForm() {
  const [orderKey, setOrderKey] = useState(""); 
  const [conflictLink, setConflictLink] = useState(""); 
  // const [jurors, setJurors] = useState(""); 

  const { ethereum } = window;

  const onOrderChange = (e) => {
    setOrderKey(e.target.value);
    // console.log("ASda" + e.target.value);
  }
  const onConflictLinkChange = (e) => setConflictLink(e.target.value);
  // const jurorsChange = (e) => setJurors(e.target.value);

  // const deployContract = () => {
    

  // };
  
  const handleSubmit = () => {
    console.log(orderKey);
    console.log(conflictLink);

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
            Lodge Conflict
        </Typography>
        <Grid container spacing={0} align="center" justifyContent="center">
            <Grid item xs={0}>
                <TextField style={{
                    // width: "302px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Order Key" variant="outlined" 
                    onChange={onOrderChange}/>
            </Grid>
            <Grid item xs={0} >
                <TextField style={{
                    // width: "302px",
                    // height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                    multiline:"true"
                }}
                    multiline="true" id="outlined-basic" label="Conflict Link" variant="outlined" 
                    onChange={onConflictLinkChange}/>
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
                    variant="contained"
                    onClick={handleSubmit}>Lodge</Button>
            </Grid>
        </Grid>
    </Container>

  );
};