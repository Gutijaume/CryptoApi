import React, {useState, useEffect} from 'react'


export default function ApiCall(apiURL) {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      axios.get(apiURL).then((res) => {
        //-- Llamada a la API con Axios --//
        setCoins(res.data);
      });
    }, [apiURL])

    return {coins, search}
}
