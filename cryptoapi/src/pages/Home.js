import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Coin from '../components/Coin/Coin';


const apiURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";


export default function Home() {
    const [coins, setCoins] = useState([]); 
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      axios.get(apiURL).then((res) => { //-- Llamada a la API con Axios --//
        setCoins(res.data);
      });
    }, []);
  
    const filteredCoins = coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
  
    const handleChange = (e) => {
      setSearch(e.target.value);
    };
  return (
    <div className="coin-app">
    <div className="coin-search">
      <h1 className="coin-text">Busca una criptomoneda</h1>
      <form>
        <input
          type="text"
          placeholder="Buscar"
          className="coin-input"
          onChange={handleChange}
        />
      </form>
    </div>
    {filteredCoins.map((coin) => {
      return (
        <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          image={coin.image}
          volume={coin.market_cap}
          symbol={coin.symbol}
          priceChange = {coin.price_change_percentage_24h}
        />
      );
    })}
  </div>
  )
}
