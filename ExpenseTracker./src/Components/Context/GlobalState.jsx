import React ,{ createContext,useReducer } from 'react';
import AppReducer from './AppReducer.jsx';

//initial state ,any global state will go on this oject
//object
const init = {
    transactions :[ { id: '1', text: 'Salary', amount: 4000 },
    // {  id: '2' , text: 'Salary', amount: 300 },
     // { id: '3'  ,text: 'Kitkat', amount: -10 },
   //   {  id: '4' ,text: 'Pizza', amount: 150 }
]
}

//context
export const GlobalContext =createContext (init);

//provider

export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer( AppReducer , init) ;


    //ACtions

    function deleteTransaction(id) {
        dispatch({
          type: 'DELETE_TRANSACTION',
          payload: id
        });
      }

      function addTransaction(transaction) {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: transaction
        });
      }

    return (<GlobalContext.Provider value = {{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
