<<<<<<< Updated upstream
import './App.css';
import React, {useState, useEffect} from 'react';
// import { axios } from 'axios';

=======
import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "wouter";
>>>>>>> Stashed changes



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
<<<<<<< Updated upstream
    <div className="App">
      <section className='App-content'>
        CRYPTOS
      </section>
     
=======
    <div>
      <Router>
        <Navbar />        
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;
