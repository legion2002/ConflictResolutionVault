import React from "react";
import Logo from "./DeJury.svg";
import "./App.css";
import { Typography, AppBar, MenuItem, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Box, TextField } from "@material-ui/core";
import { OnboardingButton } from "./context/TransactionContext";
import { ethers } from "ethers";
import { getmerklerootfromarray } from "./utilities/merklecreator";

const categoryDB = [
    {
        label: "AC Class",
        value: 1
    },
    {
        label: "Tier 1 Class",
        value: 2
    },
    {
        label: "Tier 2 Class",
        value: 3
    }
]
console.log(getmerklerootfromarray([1, 2, 3, 4, 5]));
const App = () => {
    // console.log(getmerklerootfromarray(['0x9452839582759284', '0x83927385273528537528']));
    return (
        <>




            <div>
                <div style={{ background: "radial-gradient(#FF9A8B, #FF6A88)" }}>
                    hello world
                    <CssBaseline />
                    <AppBar style={{ background: 'radial-gradient(#FF99AD,#FF6A88)' }}>
                        <Toolbar position="relative">
                            <Box
                                component="img"
                                alt="Your logo."
                                src={Logo}
                            />
                            <div style={{ marginLeft: 'auto' }}>
                                <Grid container spacing={0}>
                                    <Grid item>
                                        <Button style={{
                                            color: '#000',
                                            width: "88px",
                                            height: "55px",
                                            fontSize: "18px",
                                            fontFamily: "Sans-Serif",
                                            textTransform: "None"
                                        }}
                                            variant="text" className="element">Home</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{
                                            color: '#FFFFFF',
                                            width: "110px",
                                            height: "55px",
                                            fontSize: "18px",
                                            fontFamily: "Sans-Serif",
                                            textTransform: "None"
                                        }}
                                            variant="text">Relations</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{
                                            color: '#FFFFFF',
                                            width: "88px",
                                            height: "55px",
                                            fontSize: "18px",
                                            fontFamily: "Sans-Serif",
                                            textTransform: "None"
                                        }}
                                            variant="text">Dispute</Button>
                                    </Grid>
                                    <Grid item>
                                        <Button style={{
                                            color: '#FFFFFF',
                                            width: "88px",
                                            height: "55px",
                                            fontSize: "18px",
                                            fontFamily: "Sans-Serif",
                                            textTransform: "None"
                                        }}
                                            variant="text">About</Button>
                                    </Grid>
                                    {/* <Grid item>
                                <Button style={{
                                            backgroundColor: "#DC532D",
                                            color: '#FFFFFF',
                                            width: "88px",
                                            height: "53px",
                                            fontSize: "14px",
                                            fontFamily: "Inter"
                                        }}
                                    variant="contained">Log In</Button>
                            </Grid> */}
                                </Grid>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Toolbar />
                    <main>
                        <div>
                            <Container maxWidth="md" className="box1" style={{
                                marginTop: '20px',
                                marginLeft: '20px',
                            }}>

                                <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
                                    What exactly is DeJury?
                                </Typography>
                                <Typography style={{ color: "#000", fontWeight: 150 }} variant="h6" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
                                    De jure in law means "according to rightful claim/entitlement".  Similar to this concept we aim to build a quick conflict resolution mechanism in tandem with free business flow. Further we wish to create an on-chain reputation for both the buyer, the seller and the jury (more on this later)

                                </Typography>
                            </Container>

                            <Container maxWidth="md" className="box1" style={{
                                marginTop: '30px',
                                marginRight: '20px'
                            }}>
                                <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
                                    Problem for Businesses
                                </Typography>
                                <Typography style={{ color: "#000", fontWeight: 150 }} variant="h6" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
                                    In Indian businesses, if there is a conflict between a buyer and seller (due to poor delivery, bad quality of products, etc.) then there may be a dispute with transactions.
                                    The only way to resolve such conflicts is either at a personal level or going for legal mechanisms.
                                    The issues with these conflict resolution mechanisms is that they are time consuming and that there might not be any legal constraint/agreement prior to the deal.
                                </Typography>
                            </Container>

                            <Container maxWidth='md' style={{
                                marginTop: '40px',
                            }}>
                                <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
                                    Connect Wallet
                                </Typography>
                                <Grid container spacing={0} align="center" justifyContent="center">
                                    <Grid item xs={0}>
                                        <OnboardingButton></OnboardingButton>
                                        {/* <Button style={{
                                                background: "linear-gradient(#8BC6EC, #9599E2)",
                                                color: '#FFFFFF',
                                                width: "200px",
                                                height: "55px",
                                                fontSize: "14px",
                                                borderRadius: "25px",
                                                textTransform:"none"
                                
                                            }}
                                        variant="contained">Connect Metamask</Button> */}
                                    </Grid>
                                </Grid>
                            </Container>
{/* @note: deploy contract and create order   */}
                            <Container maxWidth='md' style={{
                                marginTop: '80px',
                            }}>
                                <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
                                    Create the Vault
                                </Typography>
                                <Grid container spacing={0} align="center" justifyContent="center">
                                    <Grid item xs={0}>
                                        <TextField style={{
                                            // width: "302px",
                                            // height: "55px",
                                            fontSize: "14px",
                                            backgroundColor: "#FFFFFF",
                                        }}
                                            id="outlined-basic" label="Buyer Key" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={0} >
                                        <TextField style={{
                                            // width: "302px",
                                            // height: "55px",
                                            fontSize: "14px",
                                            backgroundColor: "#FFFFFF",
                                        }}
                                            id="outlined-basic" label="Seller Key" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={0} >
                                        <TextField style={{
                                            width: "250px",
                                            height: "55px",
                                            fontSize: "14px",
                                            backgroundColor: "#FFFFFF",
                                        }}
                                            id="outlined-basic" label="Juror Keys (Optional)" variant="outlined" />
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
                                            variant="contained">Create Relation</Button>
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container maxWidth='md' style={{
                                marginTop: '40px',
                            }}>
                                <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
                                    Enter the Vault
                                </Typography>
                                <Grid container spacing={0} align="center" justifyContent="center">
                                    <Grid item xs={0} >
                                        <TextField style={{
                                            width: "250px",
                                            height: "55px",
                                            fontSize: "14px",
                                            backgroundColor: "#FFFFFF",
                                        }}
                                            id="outlined-basic" label="Buyer Key" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={0} >
                                        <TextField style={{
                                            width: "250px",
                                            height: "55px",
                                            fontSize: "14px",
                                            backgroundColor: "#FFFFFF",
                                        }}
                                            id="outlined-basic" label="Seller Key" variant="outlined" />
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
                                            variant="contained">View Relation</Button>
                                    </Grid>
                                </Grid>
                            </Container>

                            <Container maxWidth='md' style={{
                                marginTop: '40px',
                            }}>
                                <Typography style={{ color: "#242038", fontWeight: 550 }} variant="h3" color="common.white" justifyContent="center" align="center" position="relative" gutterBottom>
                                    Register as a Juror
                                </Typography>
                                <Grid container spacing={0} align="center" justifyContent="center">
                                    <Grid item xs={0} >
                                        <TextField style={{
                                            width: "250px",
                                            height: "55px",
                                            fontSize: "14px",
                                            backgroundColor: "#FFFFFF",
                                        }}
                                            id="outlined-basic" label="Juror Key" variant="outlined" />
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
                                            variant="contained">Register</Button>
                                    </Grid>
                                </Grid>
                            </Container>

                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
