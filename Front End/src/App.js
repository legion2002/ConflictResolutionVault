import React from "react";
import Logo from "./DeJury.svg";
import {Typography, AppBar,MenuItem, Card, CardAction, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, Box, TextField} from "@material-ui/core";

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

const App = () => {
    return(
        <>
        <div>
            <CssBaseline />
            <AppBar style={{ background: '#388087' }}>
            <Toolbar position="relative">
                    <Box
                        component="img"
                        alt="Your logo."
                        src={Logo}
                    />
                    <div style = {{marginLeft: 'auto'}}>
                        <Grid container spacing = {0}>
                            <Grid item>
                                <Button style={{
                                            color: '#FFFFFF',
                                            width: "88px",
                                            height: "55px",
                                            fontSize: "14px",
                                            fontFamily: "Helvetica"
                                        }}
                                    variant="text" className = "element">Home</Button>
                            </Grid>
                            <Grid item>
                                <Button style={{
                                            color: '#242038',
                                            width: "110px",
                                            height: "55px",
                                            fontSize: "14px",
                                            fontFamily: "Inter"
                                        }}
                                    variant="text">Relations</Button>
                            </Grid>
                            <Grid item>
                                <Button style={{
                                            color: '#242038',
                                            width: "88px",
                                            height: "55px",
                                            fontSize: "14px",
                                            fontFamily: "Inter"
                                        }}
                                    variant="text">Dispute</Button>
                            </Grid>
                            <Grid item>
                                <Button style={{
                                            color: '#242038',
                                            width: "88px",
                                            height: "55px",
                                            fontSize: "14px",
                                            fontFamily: "Inter"
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
                    <Container maxWidth="md" style={{
                        marginTop: '100px',
                        marginLeft: '20px'
                    }}>
                        <Typography style={{ color:"#242038",fontWeight:550}} variant="h3" color="common.white" justifyContent = "center" align = "center" position="relative" gutterBottom>
                            What exactly is DeJury?
                        </Typography>
                        <Typography style={{ color:"#242038",fontWeight:150}} variant="h6" color="common.white" justifyContent = "center" align = "center" position="relative" gutterBottom>
                        De jure in law means "according to rightful claim/entitlement".  Similar to this concept we aim to build a quick conflict resolution mechanism in tandem with free business flow. Further we wish to create an on-chain reputation for both the buyer, the seller and the jury (more on this later)
                        </Typography>
                    </Container>
                    <Container maxWidth="md" style={{
                        marginTop: '100px',
                        marginRight: '120px'
                    }}>
                        <Typography style={{ color:"#242038",fontWeight:550}} variant="h3" color="common.white" justifyContent = "center" align = "center" position="relative" gutterBottom>
                            Problem for Businesses
                        </Typography>
                        <Typography style={{ color:"#242038",fontWeight:150}} variant="h6" color="common.white" justifyContent = "center" align = "center" position="relative" gutterBottom>
                        In Indian businesses, if there is a conflict between a buyer and seller (due to poor delivery, bad quality of products, etc.) then there may be a dispute with transactions.
The only way to resolve such conflicts is either at a personal level or going for legal mechanisms.
The issues with these conflict resolution mechanisms is that they are time consuming and that there might not be any legal constraint/agreement prior to the deal. 
                        </Typography>
                    </Container>

                    <Container maxWidth="lg" style ={{marginTop:'100px'}}>

                    </Container>
                </div> 
            </main>
        </div>
        </>
    );
}

export default App;
