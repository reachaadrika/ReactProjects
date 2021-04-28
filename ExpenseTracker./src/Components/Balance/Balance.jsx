import React , {useContext } from 'react'
import {GlobalContext } from '../Context/GlobalState';

//import { Transaction } from '../Transaction/Transaction';

//import {GlobalContext } from '../Context/GlobalState';

export const Balance = () => {
    
    const {transactions } = useContext (GlobalContext) ;

    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    
   // const {transactions } = useContext (GlobalContext) ;

    return (
        <div className="style">
            <h4> Your Balance </h4>
            <h1> Rs.{total} </h1>
        </div>
    )
}
