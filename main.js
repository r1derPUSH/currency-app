// DOM 

const resultBTC = document.querySelector('.resultBTC');
const priceInUahBTC = document.querySelector('.priceInUahBTC');
const resultETH = document.querySelector('.resultETH');
const priceInUahETH = document.querySelector('.priceInUahETH');
const resultSOL = document.querySelector('.resultSOL');
const priceInUahSOL = document.querySelector('.priceInUahSOL');
const resultXRP = document.querySelector('.resultXRP');
const priceInUahXRP = document.querySelector('.priceInUahXRP');
const resultBNB = document.querySelector('.resultBNB');
const priceInUahBNB = document.querySelector('.priceInUahBNB');
const resultMATIC = document.querySelector('.resultMATIC');
const priceInUahMATIC = document.querySelector('.priceInUahMATIC');
const resultLINK = document.querySelector('.resultLINK');
const priceInUahLINK = document.querySelector('.priceInUahLINK');
const resultARB = document.querySelector('.resultARB');
const priceInUahARB = document.querySelector('.priceInUahARB');

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

function wait (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getData () {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,binancecoin,matic-network,arbitrum,chainlink,cosmos-hub&vs_currencies=usd,uah');
    data = await response.json();
    console.log(data);
    resultBTC.textContent = `${data.bitcoin.usd} $ `;
    priceInUahBTC.textContent = `= ${data.bitcoin.uah} UAH`;
    infoBTC.classList.add('blinking');
    await wait (200);
    infoBTC.classList.remove('blinking');
    resultETH.textContent = `${data.ethereum.usd} $ `;
    priceInUahETH.textContent = `= ${data.ethereum.uah} UAH`;
    infoETH.classList.add('blinking');
    await wait (200);
    infoETH.classList.remove('blinking');
    resultSOL.textContent = `${data.solana.usd} $ `;
    priceInUahSOL.textContent = `= ${data.solana.uah} UAH`;
    infoSOL.classList.add('blinking');
    await wait (200);
    infoSOL.classList.remove('blinking');
    resultXRP.textContent = `${data.ripple.usd} $ `;
    priceInUahXRP.textContent = `= ${data.ripple.uah} UAH`;
    infoXRP.classList.add('blinking');
    await wait (200);
    infoXRP.classList.remove('blinking');
    resultBNB.textContent = `${data.binancecoin.usd} $ `;
    priceInUahBNB.textContent = `= ${data.binancecoin.uah} UAH`;
    infoBNB.classList.add('blinking');
    await wait (200);
    infoBNB.classList.remove('blinking');
    resultMATIC.textContent = `${data["matic-network"].usd} $ `;
    priceInUahMATIC.textContent = `= ${data["matic-network"].uah} UAH`;
    infoMATIC.classList.add('blinking');
    await wait (200);
    infoMATIC.classList.remove('blinking');
    resultLINK.textContent = `${data.chainlink.usd} $ `;
    priceInUahLINK.textContent = `= ${data.chainlink.uah} UAH`;
    infoLINK.classList.add('blinking');
    await wait (200);
    infoLINK.classList.remove('blinking');
    resultARB.textContent = `${data.arbitrum.usd} $ `;
    priceInUahARB.textContent = `= ${data.arbitrum.uah} UAH`;
    infoARB.classList.add('blinking');
    await wait (200);
    infoARB.classList.remove('blinking');
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