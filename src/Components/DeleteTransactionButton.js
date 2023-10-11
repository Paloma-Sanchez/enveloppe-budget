import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadTransactionsByEnveloppeId } from "../Features/TransactionList/transactionListSlice";

export const DeleteTransactionButton = ({trans_id, env_id}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:4000/enveloppes/transactions/${trans_id}`, requestOptions)
        .then(dispatch(loadTransactionsByEnveloppeId(env_id)))    
        .catch((error) => console.log(error));
        
    }

    return(
        <button onClick={handleClick} className="delete-transaction-btn">X</button>
    )
}