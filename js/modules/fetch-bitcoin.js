export default function initFetchBitcoin() {}

fetch(`https://www.blockchain.com/ticker`)
  .then((res) => res.json())
  .then((body) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (1000 / body.BRL.buy).toFixed(4);
  })
  .catch((erro) => console.log(Error(erro)));

// https://www.blockchain.com/ticker
