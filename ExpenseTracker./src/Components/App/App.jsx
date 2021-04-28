import React from 'react';
import './app.css';
import { Header } from '../Header/Header';
import { Balance } from '../Balance/Balance';
import { IncomeExp } from '../IncomeExp/IncomeExp';
import { TransactionList } from '../TransactionList/TransactionList';
import { AddTransaction } from '../AddTransaction/AddTransaction';

import { GlobalProvider } from '../Context/GlobalState';

function App() {
    return (
        <GlobalProvider>

<Header />

<div className="main">
    <Balance />
    <IncomeExp />
    <TransactionList />
    <AddTransaction />
</div>
        </GlobalProvider>
            
            
            


    );

}

export default App;
