const { Signer, ethers } = require("ethers");
const { providers, Wallet, Contract } = require("ethers").ethers;
const { parseUnits, formatUnits } = require('ethers').utils
const fs = require("fs")
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

require('dotenv').config();

const provider = new providers.WebSocketProvider(process.env.RPC_URL)
let wallet = new Wallet(process.env.PKEY).connect(provider)


const main = async (contractAddress, filename) => {

    const ABI = JSON.parse(fs.readFileSync(filename, "utf-8"))
    const target = new Contract(contractAddress, ABI, provider)
    const targetWithSigner = target.connect(wallet)

    
    let transactionResponse = await targetWithSigner.transfer("0x000000000000000000000000000000000000dEaD", 21)
    let receipt = await transactionResponse.wait([confirms = 1])
    console.log(receipt)

}

let CA = "0x9f3AA2Caa1534D48d2426947F74802CfFe6b1F93"
let FILENAME = "Token_abi.json"
main(CA, FILENAME)