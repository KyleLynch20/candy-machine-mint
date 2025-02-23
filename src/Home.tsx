import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import TopImage from './images/BAN2.png';
import DiscordImage from './images/CYBE-14.png';


import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

import { Fade, Bounce, Zoom, Roll, JackInTheBox} from "react-awesome-reveal";


import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";
import {Container, Row, Col} from 'react-bootstrap';
import { RarityBox } from "./rarityBoxes";
import { CustomAccordion } from "./accordion";
import { CustomCarousel } from "./carousel";
import { TopNavbar } from "./Navbar";


const ConnectButton = styled(WalletDialogButton)``;

const CounterText = styled.span``; // add your styles here

const ContentArea = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  /* background-color: rgb(195, 197, 197); rgb(227, 11, 198) */
  background-color: rgba(230,73,151,255);
  border: 6px solid black;
  //border-radius: 15px;
  padding: 20px;
  color: yellow;`; // add your styles here

const MintButton = styled(Button)``; // add your styles here


export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
}

const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const [startDate, setStartDate] = useState(new Date(props.startDate));

  const wallet = useAnchorWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const {
        candyMachine,
        goLiveDate,
        itemsAvailable,
        itemsRemaining,
        itemsRedeemed,
      } = await getCandyMachineState(
        wallet as anchor.Wallet,
        props.candyMachineId,
        props.connection
      );

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(
          candyMachine,
          props.config,
          wallet.publicKey,
          props.treasury
        );

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          props.txTimeout,
          props.connection,
          "singleGossip",
          false
        );

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          setIsSoldOut(true);
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await props.connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, props.connection]);

  useEffect(refreshCandyMachineState, [
    wallet,
    props.candyMachineId,
    props.connection,
  ]);

  return (
    <main className="bg-color-main">
      <TopNavbar></TopNavbar>

      <Container>
        <Row>
        <img
          className="d-block img-fluid"
          src={TopImage}
          alt="First slide"
        />
        </Row>
        <Row>
          <Col>
            <ContentArea>
              <h1>Mint Area</h1>
              <Row>
                <Col>
                {wallet && (<p>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</p> )}
          {wallet && <p>Balance: {(balance || 0).toLocaleString()} SOL</p>}
          {wallet && <p>Total Available: {itemsAvailable}</p>}
          {wallet && <p>Redeemed: {itemsRedeemed}</p>}
          {wallet && <p>Remaining: {itemsRemaining}</p>}
          {!wallet ? (
            <ConnectButton>Connect Wallet</ConnectButton>
            ) : (
            <MintButton
              disabled={isSoldOut || isMinting || !isActive}
              onClick={onMint}
              variant="contained"
            >
              {isSoldOut ? (
              "SOLD OUT"
              ) : isActive ? (
                isMinting ? (
                  <CircularProgress />
                ) : (
                  "MINT"
                )
              ) : (
                <Countdown
                  date={startDate}
                  onMount={({ completed }) => completed && setIsActive(true)}
                  onComplete={() => setIsActive(true)}
                  renderer={renderCounter}
                />
                )}
              </MintButton>
            )}
                
                
                </Col>
              </Row>
            </ContentArea>
          </Col>
        </Row>

        <Fade direction="left">
        <Row>
          <Col>
            <Container>
              <CustomCarousel></CustomCarousel>
            </Container>
          </Col>
          <Col>
            <ContentArea>
              <h1 className="text-center">Welcome!</h1>
              <p className="ft-sz-md">Welcome to the Cyber Cityzens Space Club! The only club that can survive without an atmosphere. Cityzens were created by the planet Zorans's top scientists to rebuild the planet to resustain life. Planet Zoran is the home to 7,777 Cyber Cityzens built to withstand time and fix the planets dead atmosphere</p>
              <Row>
                <Col></Col>
              </Row>
            </ContentArea>
          </Col>
        </Row>
        </Fade>
        <JackInTheBox>
        <Row>
          <Col>
            <ContentArea>
              <h1 className="text-center">FAQs</h1>
              <Row>
              <CustomAccordion></CustomAccordion>
              </Row>
            </ContentArea>
          </Col>
        </Row>
        </JackInTheBox>


      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
      </Container>
      <div className="footer">
      <a target="_blank" href={"https://discord.gg/uYhfgZVA7P"}>
      <img
          className="img-fluid footerImg"
          src={DiscordImage}
          alt=""
        />
      </a>
      </div>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

const renderCounter = ({ days, hours, minutes, seconds, completed }: any) => {
  return (
    <CounterText>
      {hours + (days || 0) * 24} hours, {minutes} minutes, {seconds} seconds
    </CounterText>
  );
};



export default Home;
