import React from "react";
import { useNavigate } from "react-router-dom";

export const DeleteTransactionButton = ({trans_id}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:4000/enveloppes/transactions/${trans_id}`, requestOptions)
            .catch((error) => console.log(error));
        
        navigate('/');
    }

    return(
        <button onClick={handleClick} className="delete-transaction-btn">X</button>
    )
}