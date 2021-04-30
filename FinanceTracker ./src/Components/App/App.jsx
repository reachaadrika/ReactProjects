import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Bit from '../Bit/Bit';
import '../App/App.css';

export default function App() {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios
          .get(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
          )
          .then(res => {
            setCoins(res.data);
            console.log(res.data);
          })
          .catch(error => console.log(error));
      }, []);
    
      const handleChange = e => {
        setSearch(e.target.value);
      };
    
      const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      );
    
      
    return (
        <div className='bit'>
            <div className="bit-search">
                <h1 className="bit-text">
                    Search Currency
                    </h1>
                <form>
                    <input type="text" placeholder="Search"
                        className="coin-input" onChange={handleChange} />
                </form>

            </div>

            {filteredCoins.map(coin => {
                return (
                    <Bit 

                        key={coin.id} name={coin.name} image={coin.image}
                        symbol={coin.symbol} volume={coin.market_cap}
                        price={coin.current_price}
                        priceChange={coin.price_change_percentage_24h} />
                )
            })}
        </div>

    );
}