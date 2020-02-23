import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import AboutPage from './AboutPage';

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Charts coinData={coinData} />
      <Route path="/about" component={AboutPage} /> 
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Router><App /></Router>, rootElement);
