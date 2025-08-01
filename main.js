// DOM 

const resultBTC = document.querySelector('.resultBTC');
const priceInUahBTC = document.querySelector('.priceInUahBTC');
const resultETH = document.querySelector('.resultETH');
const resultSOL = document.querySelector('.resultSOL');
const resultXRP = document.querySelector('.resultXRP');
const resultBNB = document.querySelector('.resultBNB');
const resultMATIC = document.querySelector('.resultMATIC');
const resultLINK = document.querySelector('.resultLINK');
const resultARB = document.querySelector('.resultARB');

// results 

const infoBTC = document.querySelector('.infoBTC');
const infoETH = document.querySelector('.infoETH');
const infoSOL = document.querySelector('.infoSOL');
const infoXRP = document.querySelector('.infoXRP');
const infoBNB = document.querySelector('.infoBNB');
const infoMATIC = document.querySelector('.infoMATIC');
const infoLINK = document.querySelector('.infoLINK');
const infoARB = document.querySelector('.infoARB');

let data;

getData();

async function getData () {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,binancecoin,matic-network,arbitrum,chainlink,cosmos-hub&vs_currencies=usd,uah');
    data = await response.json();
    console.log(data);
    resultBTC.textContent = `${data.bitcoin.usd} $`;
    priceInUahBTC.textContent = `Price in UAH: ${data.bitcoin.uah} UAH`;
    resultETH.textContent = `${data.ethereum.usd} $`;
    resultSOL.textContent = `${data.solana.usd} $`;
    resultXRP.textContent = `${data.ripple.usd} $`;
    resultBNB.textContent = `${data.binancecoin.usd} $`;
    resultMATIC.textContent = `${data["matic-network"].usd} $`;
    resultLINK.textContent = `${data.chainlink.usd} $`;
    resultARB.textContent = `${data.arbitrum.usd} $`;
}

async function btc () {
    infoBTC.style.display = 'flex';
    infoETH.style.display = 'none';
    infoSOL.style.display = 'none';
    infoXRP.style.display = 'none';
    infoBNB.style.display = 'none';
    infoMATIC.style.display = 'none';
    infoLINK.style.display = 'none';
    infoARB.style.display = 'none';
}

async function eth () {
    infoBTC.style.display = 'none';
    infoETH.style.display = 'flex';
    infoSOL.style.display = 'none';
    infoXRP.style.display = 'none';
    infoBNB.style.display = 'none';
    infoMATIC.style.display = 'none';
    infoLINK.style.display = 'none';
    infoARB.style.display = 'none';
}

async function sol () {
    infoBTC.style.display = 'none';
    infoETH.style.display = 'none';
    infoSOL.style.display = 'flex';
    infoXRP.style.display = 'none';
    infoBNB.style.display = 'none';
    infoMATIC.style.display = 'none';
    infoLINK.style.display = 'none';
    infoARB.style.display = 'none';
}

async function xrp () {
    infoBTC.style.display = 'none';
    infoETH.style.display = 'none';
    infoSOL.style.display = 'none';
    infoXRP.style.display = 'flex';
    infoBNB.style.display = 'none';
    infoMATIC.style.display = 'none';
    infoLINK.style.display = 'none';
    infoARB.style.display = 'none';
}

async function bnb () {
    infoBTC.style.display = 'none';
    infoETH.style.display = 'none';
    infoSOL.style.display = 'none';
    infoXRP.style.display = 'none';
    infoBNB.style.display = 'flex';
    infoMATIC.style.display = 'none';
    infoLINK.style.display = 'none';
    infoARB.style.display = 'none';
}

async function matic () {
    infoBTC.style.display = 'none';
    infoETH.style.display = 'none';
    infoSOL.style.display = 'none';
    infoXRP.style.display = 'none';
    infoBNB.style.display = 'none';
    infoMATIC.style.display = 'flex';
    infoLINK.style.display = 'none';
    infoARB.style.display = 'none';
}

async function link () {
    infoBTC.style.display = 'none';
    infoETH.style.display = 'none';
    infoSOL.style.display = 'none';
    infoXRP.style.display = 'none';
    infoBNB.style.display = 'none';
    infoMATIC.style.display = 'none';
    infoLINK.style.display = 'flex';
    infoARB.style.display = 'none';
}

async function arb () {
    infoBTC.style.display = 'none';
    infoETH.style.display = 'none';
    infoSOL.style.display = 'none';
    infoXRP.style.display = 'none';
    infoBNB.style.display = 'none';
    infoMATIC.style.display = 'none';
    infoLINK.style.display = 'none';
    infoARB.style.display = 'flex';
}



setInterval(getData, 10000)