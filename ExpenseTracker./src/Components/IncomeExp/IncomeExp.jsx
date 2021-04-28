import React,{useContext } from 'react';
import {GlobalContext } from '../Context/GlobalState';

export const IncomeExp = () => {

    const {transactions } = useContext (GlobalContext) ;

    const amounts = transactions.map(transaction => transaction.amount);

    
    const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

    return (
        <div className="container">
            <div>
                <h4>Income</h4>
                <p className="moneyplus" >
                 Rs {income}               
                 </p>
                <div>
                    <h4>Expense</h4>
                    <p className="moneyminus">
                    Rs {expense}
                    </p>
                </div>
            </div>
            
        </div>
    )
}
