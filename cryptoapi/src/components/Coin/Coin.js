import React from "react";
import "../Coin/styles.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

//-- Este es el componente de cada criptomoneda que mostrará los params que a mi me interesan --\\

const Coin = ({ name, image, symbol, price, priceChange }) => {
  //Destructuring de los params que le queremos pasar
  return (
    
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="coinImage"/>
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-price>">€{price}</p>
          <div className="nav-btn">
          </div>
        </div>
            <Link
              to={{ pathname: `/detail/${symbol}`, state: { detail: name } }}
            >
              <Button variant="contained" color="primary" type="button">
                Detalle
              </Button>
            </Link>
      </div>
    </div>
  );
};

export default Coin;
