const { Signer, ethers, utils } = require("ethers");
const { providers, Wallet, Contract } = require("ethers").ethers;
const { parseUnits, formatUnits } = require('ethers').utils
const fs = require("fs")
require('dotenv').config();

const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const provider = new providers.WebSocketProvider(process.env.RPC_URL)
let wallet = new Wallet(process.env.PKEY).connect(provider)

const main = async (contractAddress) => {

    await provider.getBalance(contractAddress).then(console.log)
  
}

main("0x8294F34D3D297C98E67Cfb7321C150b44D7D66Be")

