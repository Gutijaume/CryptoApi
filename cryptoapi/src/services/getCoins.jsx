
const apiURL =
"https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";


export default function getCoins() {

    fetch (apiURL)
        .then (res => res.json())
        .then (response => {
        const {data = []} = response
        if (Array.isArray(data)){
            const coins = data.map(coin =>{

                const {id, name, current_price, image, market_cap, symbol} = coin
            })
                return coins
        }
        return[]

    } )
}




