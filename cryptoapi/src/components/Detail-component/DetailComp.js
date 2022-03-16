import React, {useState, useEffect}  from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";


const apiURL ="https://api.coingecko.com/api/v3/coins/";


export default function DetailComp() {


    
    // const {symbol} = useParams()
    // console.log(symbol)

    // const [coins, setCoins] = useState([]);
 
    // useEffect(() => {
    //   axios.get(`https://api.coingecko.com/api/v3/coins/${symbol}`).then((res) => {
    //     //-- Llamada a la API con Axios --//
    //     setCoins(res.data);
    //   });
    // }, [symbol]);


  return (
    <div>
      
      <img src="https://www.gifsanimados.org/data/media/695/en-construccion-imagen-animada-0035.gif" alt="error"/>
      </div>
  );
}




  
