import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
//import { airdrop } from "../airdrop";
import { showBalance } from "../show-balance";
import env from 'react-dotenv';


export const transferSol = async (from: Keypair, to: PublicKey, amount: number) => {
    const connection = new Connection("https://api.devnet.solana.com", 'confirmed');
    const transaction = new Transaction();
    console.log('Amounts:');
    console.log('lamports:' + LAMPORTS_PER_SOL);
    console.log('Amounts:' + amount);
    console.log('Total' + (LAMPORTS_PER_SOL/2)*amount);
    
    const instruction = SystemProgram.transfer({
        fromPubkey: from.publicKey, 
        toPubkey: to,
        lamports: (LAMPORTS_PER_SOL/2) * amount
    });

    transaction.add(instruction);
    transaction.add(instruction);
    await sendAndConfirmTransaction(connection, transaction, [
        from
    ])
    console.log("Done");
}

const secret = Uint8Array.from(env.React_App_Wallet_Address);
const fromKeyPair = Keypair.fromSecretKey(secret);
const toPublicKey = new PublicKey("rd4mx1NKr8Au7UYua3Z7mjSfa5xFW95iz55raoDMAqs");

export function withdrawSoll(){
    (async () => {
        //await airdrop(fromKeyPair.publicKey, 50);
        const initBalance = await showBalance(fromKeyPair.publicKey);
        console.log(`Initial balance of from wallet is ${initBalance}`);
        const initBalanceTo = await showBalance(toPublicKey);
        console.log(`Initial balance of to wallet is ${initBalanceTo}`);
    
        await transferSol(fromKeyPair, toPublicKey, 1);
        
        const initBalance2 = await showBalance(fromKeyPair.publicKey);
        console.log(`Post balance of from wallet is ${initBalance2}`);
        const initBalanceTo2 = await showBalance(toPublicKey);
        console.log(`Post balance of to wallet is ${initBalanceTo2}`);
    })()

}



