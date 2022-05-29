import React from "react";
import Logo from "./DeJury.svg";
import "./App.css";
import { Typography, AppBar, MenuItem, InputLabel, Select, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Box, TextField } from "@material-ui/core";
import { OnboardingButton } from "./context/TransactionContext";
import { ContractDeployForm } from "./contract-deployment/ContractDeployment";
import { ShipmentReceived } from "./shipment-received/shipmentReceived";
import { CreateNewOrderForm } from "./create-new-order/CreateNewOrder";
import { LodgeConflictForm } from "./lodge-conflict/LodgeConflict";
import { DefendConflictForm } from "./defend-conflict/DefendConflict";
import { DefendConflictForm1 } from "./defend-conflict-1/DefendConflict";
import { AcceptOrderForm } from "./accept-order/AcceptOrder";
import { ShipmentPatchedForm } from "./shipment-patched/ShipmentPatched";
import { VoteOnConflictForm } from "./vote-on-conflict/VoteOnConflict";

import { ethers } from "ethers"
import { getmerklerootfromarray } from "./utilities/merklecreator";

// const vote = [
//     {
//       value: '1',
//       label: 'Buyer',
//     },
//     {
//       value: '0',
//       label: 'Seller',
//     },
//   ];


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
                                            variant="text">Buyer</Button>
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
                                            variant="text">Seller</Button>
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
                                            variant="text">Jury</Button>
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

                            <ContractDeployForm></ContractDeployForm>
                            <hr width="69%" color="#000" style = {{marginTop:"20px"}} />
                            {/* create vault */}

                            {/* buyer */}

                            <CreateNewOrderForm></CreateNewOrderForm>

                            {/* create new order */}

                            <ShipmentReceived></ShipmentReceived>

                            {/* shipment received */}

                            <LodgeConflictForm></LodgeConflictForm>

                            {/* lodge conflict */}

                            <DefendConflictForm></DefendConflictForm>

                            {/* defend conflict */}

                            <hr width="69%" color="#000" style = {{marginTop:"20px"}} />
                            
                            {/* seller */}

                            <AcceptOrderForm></AcceptOrderForm>

                            {/* accept order */}

                            <ShipmentPatchedForm></ShipmentPatchedForm>

                            {/* shipment patched */}

                            <DefendConflictForm1></DefendConflictForm1>

                            {/* defend conflict 1 */}
                            <hr width="69%" color="#000" style = {{marginTop:"20px"}} />
                            {/* juror */}

                            <VoteOnConflictForm></VoteOnConflictForm>
                            <footer style = {{background: "radial-gradient(#FF99AD,#FF6A88)", marginTop: "30px",}}><Typography style={{ color: "#242038", fontWeight: 550 }} variant="h6" color="common.white" justifyContent="center" align="center" position="relative" >Made with &lt;3 from Abhik S Basu, Anindya Prithvi,Niranjan Sundararajan,Tanishk Goyal, Vibhu Dubey</Typography> </footer>
                            {/* vote on conflict */}

                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default App;
