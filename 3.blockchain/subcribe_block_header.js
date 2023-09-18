import Web3 from "web3";

let apiKey = "afb51e365c4046edb9080f7f6215f5e0";
let ws = `wss://mainnet.infura.io/ws/v3/${apiKey}`;

const web3 = new Web3(new Web3.providers.WebsocketProvider(ws));

const subscribeToHeaders = async () => {
    try {
        const subscription = await web3.eth.subscribe('newBlockHeaders');

        const unsubscribe = async () => {
            if (subscription) {
                await subscription.unsubscribe();
                console.log("Unsubscribed successfully.");
            }
        };

        return subscription;
    } catch (error) {
        throw error;
    }
};

const main = async () => {
    try {
        const subscription = await subscribeToHeaders();
        subscription.on('data', (event) => {
            console.log("Received log event:", event);
        });
    } catch (error) {
        console.error("Error:", error);
    }
};

main();
