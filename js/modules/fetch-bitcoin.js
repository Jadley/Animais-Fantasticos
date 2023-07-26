export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((res) => res.json())
    .then((body) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (1000 / body.BRL.sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}

// https://www.blockchain.com/ticker
