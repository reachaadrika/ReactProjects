import React,{useContext} from 'react'

import {GlobalContext } from '../Context/GlobalState';
import { Transaction } from '../Transaction/Transaction';

export const TransactionList = () => {

    const {transactions } = useContext (GlobalContext) ;

    //console.log(context);
    
    return (
        <div>
            <h3>
                History
            </h3>
            <ul id="list" className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                
                
            </ul>
        </div>
    )

}
