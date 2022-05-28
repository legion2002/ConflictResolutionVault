import MetaMaskOnboarding from '@metamask/onboarding';
import React from 'react';
import { Button } from "@material-ui/core";

const ONBOARD_TEXT = 'Click here to install MetaMask!';
const CONNECT_TEXT = 'Connect';
const CONNECTED_TEXT = 'Connected';

export function OnboardingButton() {
    const [buttonText, setButtonText] = React.useState(ONBOARD_TEXT);
    const [isDisabled, setDisabled] = React.useState(false);
    const [accounts, setAccounts] = React.useState([]);
    const onboarding = React.useRef();

    React.useEffect(() => {
        if (!onboarding.current) {
            onboarding.current = new MetaMaskOnboarding();
        }
    }, []);

    React.useEffect(() => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            if (accounts.length > 0) {
                setButtonText(CONNECTED_TEXT);
                setDisabled(true);
                onboarding.current.stopOnboarding();
            } else {
                setButtonText(CONNECT_TEXT);
                setDisabled(false);
            }
        }
    }, [accounts]);

    // React.useEffect(() => {
    //     function handleNewAccounts(newAccounts) {
    //         setAccounts(newAccounts);
    //     }
    //     if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    //         window.ethereum
    //             .request({ method: 'eth_requestAccounts' })
    //             .then(handleNewAccounts);
    //         window.ethereum.on('accountsChanged', handleNewAccounts);
    //         return () => {
    //             window.ethereum.off('accountsChanged', handleNewAccounts);
    //         };
    //     }
    // }, []);

    const onClick = () => {
        if (MetaMaskOnboarding.isMetaMaskInstalled()) {
            window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then((newAccounts) => setAccounts(newAccounts));
        } else {
            onboarding.current.startOnboarding();
        }
    };
    return (
        // <button disabled={isDisabled} onClick={onClick}>
        //     {buttonText}
        // </button>

    <Button disabled={isDisabled} style={{
        background: "linear-gradient(#8BC6EC, #9599E2)",
        color: '#FFFFFF',
        width: "200px",
        height: "55px",
        fontSize: "14px",
        borderRadius: "25px",
        textTransform:"none"

    }} onClick={onClick}
    variant="contained">{buttonText}</Button>

    );
}