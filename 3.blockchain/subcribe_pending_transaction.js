import Web3 from "web3";

const apiKey = "afb51e365c4046edb9080f7f6215f5e0";
const ws = `wss://mainnet.infura.io/ws/v3/${apiKey}`;

const web3 = new Web3(new Web3.providers.WebsocketProvider(ws));


const subscribeToPendingTransactions = async () => {
    try {
        const subscription = await web3.eth.subscribe("pendingTransactions");

        subscription.on("data", async (txHash) => {
            try {
                const transaction = await web3.eth.getTransaction(txHash);

                if (transaction && transaction.value >= 10000000000000) {
                    console.log("Transaction Hash:", txHash);
                    console.log("Transaction Value:", web3.utils.fromWei(transaction.value, "ether") + " ETH");
                }
            } catch (error) {
                console.error(error);
            }
        });

        subscription.on("error", (error) => {
            console.error(error);
        });
    } catch (error) {
        console.error(error);
    }
};

subscribeToPendingTransactions();
