import './App.css';
import React, {useState, useEffect} from 'react';
// import { axios } from 'axios';




function App() {

  const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';
  const [coins, setCoins] = useState([])

  useEffect(()=>{
    console.log('funciona')
    fetch(apiURL)
      .then(res=>res.json())
      .then (response =>{
        const {data} = response
        console.log(response)
      })
  
  }, [])




//   useEffect (()=>{
//     axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
//       .then(res=>{
//         setCoins(res.data)
//         console.log(res.data)
//       })

// })




  return (
    <div className="App">
      <section className='App-content'>
        CRYPTOS
      </section>
     
    </div>
  );
}

export default App;
