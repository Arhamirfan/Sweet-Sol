import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { useState } from "react";
import { showBalance } from "../show-balance/index.ts";
import { Buffer } from 'buffer';
import env from 'react-dotenv';

function WithdrawSol() {

    var [wallet1Balance, setWallet1Balance] = useState('Empty');
    var [wallet2Balance, setWallet2Balance] = useState('Empty');
    var [walletnew1Balance, setWalletnew1Balance] = useState('Empty');
    var [walletnew2Balance, setWalletnew2Balance] = useState('Empty');

    var sendingAmount = 0.1;
    
    // var [walletBalance, setWalletBalance] = useState();

    var [showResults, setShowResults] = useState(false)
    

    function transferSol(from, to, amount) {
        (async () => {
            try {
                window.Buffer = Buffer;
                const connection = new Connection(
                    "https://api.devnet.solana.com",
                    "confirmed"
                );
                const transaction = new Transaction();
                console.log('Amounts:');
                console.log('lamports:' + LAMPORTS_PER_SOL);
                console.log('Amounts:' + amount);
                console.log('Total' + (LAMPORTS_PER_SOL/2)*parseFloat(amount));
                const instruction = SystemProgram.transfer({
                    fromPubkey: from.publicKey,
                    toPubkey: to,
                    lamports: (LAMPORTS_PER_SOL/2)*parseFloat(amount)
                });

                transaction.add(instruction);
                transaction.add(instruction);
                await sendAndConfirmTransaction(connection, transaction, [from]);
                console.log("Done");
            } catch (error) {
                console.log('error: ' + error);
            }

        })();

    }
    function showBalanceAndWithdraw() {
        try {
            console.log(process.env);
            const secret = Uint8Array.from(JSON.parse(process.env.REACT_APP_OWNER_WALLET));
        const fromKeyPair = Keypair.fromSecretKey(secret);
        const toPublicKey = new PublicKey("rd4mx1NKr8Au7UYua3Z7mjSfa5xFW95iz55raoDMAqs");
        (async () => {
            //await airdrop(fromKeyPair.publicKey, 50);
            const initBalance = await showBalance(fromKeyPair.publicKey);
            console.log(`Initial balance of from wallet is ${initBalance}`);
            setWallet1Balance(initBalance);
            const initBalanceTo = await showBalance(toPublicKey);
            console.log(`Initial balance of to wallet is ${initBalanceTo}`);
            setWallet2Balance(initBalanceTo);
            
            await transferSol(fromKeyPair, toPublicKey, sendingAmount);
            
            const initBalance2 = await showBalance(fromKeyPair.publicKey);
            console.log(`Post balance of from wallet is ${initBalance2}`);
            setWalletnew1Balance(initBalance2)
            const initBalanceTo2 = await showBalance(toPublicKey);
            console.log(`Post balance of to wallet is ${initBalanceTo2}`);
            setWalletnew2Balance(initBalanceTo2);
            setShowResults(true);
        })()
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
        <button onClick={showBalanceAndWithdraw}>Show Balance + Transfer </button>
        { showResults === true? 
            <div >
            <p>{sendingAmount} will be received within 1 minute.</p>
                {/* <p>{ 'Owner Raham old Balance: '+wallet1Balance }</p>
                <p>{ 'Buyer(Withdrawer) Arham old Balance: '+wallet2Balance }</p>

                <p>{ 'Owner Raham Balance: '+walletnew1Balance }</p>
                <p>{ 'Buyer(Withdrawer) Arham Balance: '+walletnew2Balance }</p> */}
            </div>
        : <p></p>}
           
        </>
    );



}

export default WithdrawSol;