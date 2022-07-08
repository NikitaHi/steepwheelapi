const axios = require('axios');

const STEEP_WHEEL_URL = 'http://localhost:3000/';
const STEEP_WHEEL_ACCESS_TOKEN = '123123';

async function getBalance() {
    const headers = { "Accept": "application/json","Content-Type": "application/json" };
    const body = {
        token: STEEP_WHEEL_ACCESS_TOKEN,
    };
    return await axios.post(STEEP_WHEEL_URL + 'balance', body, headers).then(res => res.data.balance).catch(err => console.error(err));
}

async function getLastTransactions(afterId=0, limits=10) {
    const headers = { "Accept": "application/json","Content-Type": "application/json" };
    const body = {
        token: STEEP_WHEEL_ACCESS_TOKEN,
        limit: limits,
        transactionID: afterId
    };
    return await axios.post(STEEP_WHEEL_URL + 'last-transaction', body, headers).then(res => res.data).catch(err => console.error(err));
}

async function sendSteepCoin(recipientID, number) {
    const headers = { "Accept": "application/json","Content-Type": "application/json" };
    const body = {
        token: STEEP_WHEEL_ACCESS_TOKEN,
        recipient: recipientID,
        sum: number
    };
    return await axios.post(STEEP_WHEEL_URL + 'send_steepcoin', body, headers).then(res => res.data).catch(err => console.error(err));
}