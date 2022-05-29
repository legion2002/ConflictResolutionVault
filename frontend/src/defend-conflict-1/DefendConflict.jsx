import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { Button, Grid, Container, Typography } from "@material-ui/core";
import { ethers } from "ethers";

export function DefendConflictForm1() {
  const [conflictKey, setConflictKey] = useState(""); 
  const [defenceLink, setDefenceLink] = useState(""); 
  // const [jurors, setJurors] = useState(""); 

  const { ethereum } = window;

  const onConflictKeyChange = (e) => {
    setConflictKey(e.target.value);
    // console.log("ASda" + e.target.value);
  }
  const onDefenceLinkChange = (e) => setDefenceLink(e.target.value);
  // const jurorsChange = (e) => setJurors(e.target.value);

  // const deployContract = () => {
    

  // };
  
  const handleSubmit = () => {
    console.log(conflictKey);
    console.log(defenceLink);

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
            Defend Conflict
        </Typography>
        <Grid container spacing={0} align="center" justifyContent="center">
            <Grid item xs={0}>
                <TextField style={{
                    width: "302px",
                    height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Conflict Key" variant="outlined" 
                    onChange={onConflictKeyChange}/>
            </Grid>
            <Grid item xs={0}>
                <TextField style={{
                    width: "302px",
                    height: "55px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                }}
                    id="outlined-basic" label="Defence Link" variant="outlined" 
                    onChange={onDefenceLinkChange}/>
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
                    onClick={handleSubmit}>Defend</Button>
            </Grid>
        </Grid>
    </Container>

  );
};