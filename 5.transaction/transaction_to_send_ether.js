import Web3 from "web3";
import Transaction from "ethereumjs-tx";
import { Chain, Common } from '@ethereumjs/common'

let apiKey = "afb51e365c4046edb9080f7f6215f5e0"

let url = `https://sepolia.infura.io/v3/${apiKey}`;
const web3 = new Web3(new Web3.providers.HttpProvider(url));

const privateKey1Hex = "0x3694d07a5448b727d4485892acbfa6aae2fa974c4210e0c053041592db586a22";
const privateKey1 = Buffer.from(privateKey1Hex.slice(2), 'hex');
const account1 = "0x81dB604b67022F8F07927875F444cd35D6A3b949"
const account2 = "0x5c2147E9ec1eb462C3cd2E98df8b29Eba11B89fB"
const gasPrice = await web3.eth.getGasPrice();

const common = new Common({ chain: Chain.Sepolia })

const SendTransaction = async () => {
    const getTransaction = await web3.eth.getTransactionCount(account1);
    //build a transaction object
    const transactionObject = {
        nonce: web3.utils.toHex(getTransaction),
        to: account2,
        value: web3.utils.toHex(web3.utils.toWei('0.000000000001', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(gasPrice)
    }
    //sign traction with private key of sender
    const tx = new Transaction(transactionObject, { chain: common });
    tx.sign(privateKey1)

    //serialize the transaction
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')


    //boardcast transaction to the network
    const sendTransaction = await web3.eth.sendSignedTransaction(raw);
    console.log(sendTransaction)
}

SendTransaction()


