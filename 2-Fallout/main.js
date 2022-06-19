const { Signer, ethers } = require("ethers");
const { providers, Wallet, Contract } = require("ethers").ethers;
const { parseUnits, formatUnits } = require('ethers').utils
const fs = require("fs")

require('dotenv').config();
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const provider = new providers.WebSocketProvider(process.env.RPC_URL)
let wallet = new Wallet(process.env.PKEY).connect(provider)


const main = async (contractAddress, filename) => {

    const ABI = JSON.parse(fs.readFileSync(filename, "utf-8"))
    const target = new Contract(contractAddress, ABI, provider)
    const targetWithSigner = target.connect(wallet)

    
    let transactionResponse = await targetWithSigner.Fal1out()
    let receipt = await transactionResponse.wait([confirms = 1])
    console.log(receipt)

}

let CA = "0x0511242BB3288D92fc21F67237D14729B6425e4c"
let FILENAME = "Fallout_abi.json"
main(CA, FILENAME)