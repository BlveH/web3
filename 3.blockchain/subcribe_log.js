import Web3 from "web3";

const apiKey = "afb51e365c4046edb9080f7f6215f5e0";
const ws = `wss://mainnet.infura.io/ws/v3/${apiKey}`;

const web3 = new Web3(new Web3.providers.WebsocketProvider(ws));

const subscribeLog = async () => {
    try {
        const tranferEvent = "Transfer(address,address, uint)";
        const tranferEventHash = web3.utils.sha3(tranferEvent)
        const subscription = await web3.eth.subscribe("logs", {
            address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
            topics: [tranferEventHash.toString()],
            fromBlock: "latest"
        })

        subscription.on("data", (result) => {
            console.log(result)
        })
    } catch (error) {
        console.error(error)
    }
}

subscribeLog()