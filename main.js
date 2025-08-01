const result = document.querySelector('.result');

let data;

getData();

async function getData () {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,ripple,binancecoin,matic-network,arbitrum,chainlink,atom&vs_currencies=usd,uah');
    data = await response.json();
    console.log(data.bitcoin.usd);
}

async function btc () {
    result.textContent = `${data.bitcoin.usd} $`;
}


