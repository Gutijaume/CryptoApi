import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "../../components/Coin/Coin";
import Header from "../../components/Header/Header";


const apiURL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false";

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get(apiURL).then((res) => {
      //-- Llamada a la API con Axios --//
      setCoins(res.data);
    });
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())  ); //Filtrado para el buscador con Lowercase (mayus-minus)

  const handleChange = (e) => { //HandleCh para recoger el target segun escribimos
    setSearch(e.target.value)};

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
      <Header />
      {filteredCoins.map((coin) => {
        return (
          <Coin          
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            image={coin.image}
            symbol={coin.symbol}
            priceChange={coin.price_change_percentage_24h}      //Params de la moneda
          />
        );
      })}
    </div>
         
  );
}