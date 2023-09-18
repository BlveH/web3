import Web3 from "web3";

let apiKey = "afb51e365c4046edb9080f7f6215f5e0"

let url = `https://mainnet.infura.io/v3/${apiKey}`;
const web3 = new Web3(new Web3.providers.HttpProvider(url));

const getBlock = async (result) => {
    try {
        result = await web3.eth.getBlockNumber();
        console.log(result);
        let blog = await web3.eth.getBlock(result);
        console.log(blog)
    } catch (error) {
        console.log(error)
    }
}


const getBlockTransaction = async (result) => {
    try {
        result = await web3.eth.getTransactionFromBlock("latest", 2)
        console.log(result)

    } catch (error) {
        console.log(error)
    }
}

getBlock()

getBlockTransaction()
