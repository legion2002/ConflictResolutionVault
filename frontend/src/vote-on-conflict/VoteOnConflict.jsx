import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Grid, Container, Typography, MenuItem } from "@material-ui/core";
import { ethers } from "ethers";
import { _abi } from "../contract-deployment/abiConstants"

export function VoteOnConflictForm() {
  const [conflictKey, setConflictKey] = useState(""); 
  const [jurorKey, setJurorKey] = useState(""); 
  const [vote, setVote] = useState(""); 

  const { ethereum } = window;

  const votes = [
    {
      value: '1',
      label: 'Buyer',
    },
    {
      value: '0',
      label: 'Seller',
    },
  ];

  const onConflictKeyChange = (e) => {
    setConflictKey(e.target.value);
    // console.log("ASda" + e.target.value);
  }
  const onJurorChange = (e) => setJurorKey(e.target.value);
  const onVoteChange = (e) => setVote(e.target.value);

  // const deployContract = () => {
    

  // };
  
  const handleSubmit = () => {
    console.log(conflictKey);
    console.log(jurorKey);
    console.log(vote);
  }

  const interactContract = async () => {
    if (ethereum) {
      // const parsedAmount = ethers.utils.parseEther(amount);

      if(!window.ethereum) {
        console.log("WTF WTF WTF");
      }

      // // verify toAddress
      // if(!ethers.utils.isAddress(addressTo)) {
      //   console.log("INVALID TO ADDRESS!");
      //   alert("INVALID TO ADDRESS!");
      //   return;
      // }

      const current_contract_address = localStorage.getItem("current_contract_address");

      if(!current_contract_address || !ethers.utils.isAddress(current_contract_address)) {
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

        const vote_on_conflict_tx = await contract.voteOnConflict(parseInt(conflictKey), parseInt(vote), parseInt(jurorKey));          


        // const pay_tx = await contract.payMoneyTo(addressTo, parsedAmount);
        console.log("vote_on_conflict_tx is ", vote_on_conflict_tx)
        console.log("interact received ", await vote_on_conflict_tx.wait());
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
        marginTop: '30px',
        
    }}>
        <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
            Vote on Conflict
        </Typography>
        <Grid container spacing={0} align="center" justifyContent="center">
            <Grid item xs={0}>
                <TextField style={{
                    width: "200px",
                    height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Conflict Key" variant="outlined"
                    onChange={onConflictKeyChange} />
            </Grid>
            <Grid item xs={0}>
                <TextField style={{
                    width: "200px",
                    height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Juror Key" variant="outlined"
                    onChange={onJurorChange} />
            </Grid>
            <Grid item xs={0}>
            <TextField
                id="outlined-basic"
                variant = "outlined"
                select
                label="Vote"
                // value={vote}
                // onChange={handleChange}
                style = {{
                    width:"180x",
                    height:"55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }} 
                onChange={onVoteChange}>
                {votes.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                    ))}
    </TextField>
            </Grid>

            <Grid item xs={0}>
                <Button style={{
                    backgroundColor: "#100F15",
                    color: '#FFFFFF',
                    width: "180px",
                    height: "55px",
                    fontSize: "14px",
                    textTransform: "none"
                }}
                    variant="contained"
                    onClick={handleSubmit}>Vote</Button>
            </Grid>
        </Grid>
    </Container>

  );
};