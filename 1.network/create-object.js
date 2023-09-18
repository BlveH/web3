import Web3 from "web3";

let apiKey = "afb51e365c4046edb9080f7f6215f5e0"

let url = `https://mainnet.infura.io/v3/${apiKey}`;
const web3 = new Web3(new Web3.providers.HttpProvider(url));

console.log(web3)