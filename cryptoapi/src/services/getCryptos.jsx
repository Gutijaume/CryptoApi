
export default function getCryptos() {
    const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';
   return fetch (apiURL)
    .then (res => res.json())
    .then (response => {
        console.log(response)
    } )
}
      



    


