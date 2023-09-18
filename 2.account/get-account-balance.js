import Web3 from "web3";

let apiKey = "afb51e365c4046edb9080f7f6215f5e0"

let url = `https://mainnet.infura.io/v3/${apiKey}`;
const web3 = new Web3(new Web3.providers.HttpProvider(url));
async function getBalance() {

    let address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";

    try {
        const balance = await web3.eth.getBalance(address);
        console.log("Balance:", web3.utils.fromWei(balance, "ether") + " ETH");
    } catch (error) {
        console.error("Error:", error);
    }
}

getBalance();
