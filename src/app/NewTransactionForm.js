import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadTransactionsByEnveloppeId } from "../Features/TransactionList/transactionListSlice";

export const NewTransactionForm = ({env_id, budget}) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState();
    const [addActivated, setAddActivated] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ budget: budget, description: description, amount : amount})
        };
        fetch(`http://localhost:4000/enveloppes/${env_id}`, requestOptions)
        .then(() => dispatch(loadTransactionsByEnveloppeId(env_id)) )   
        .catch((error) => console.log(error));
        setAddActivated(!addActivated);
    }

    return (
        <div className="form-div" >
          {addActivated?  
          <form onSubmit={onSubmit} > 
                <label htmlFor = "description" className="label" >Description</label>
                <br/>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} 
                id="description" name="description" className="input" placeholder="Ex: New shoes" required/>
                <br/>
                <label htmlFor = "amount" className="label" >Amount</label>
                <br/>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} 
                id="amount" className="input" placeholder="Ex: 100" name="budget"/>
                <br/>
                <button className="button" > Add transaction</button>
            </form> : <button className="button" onClick={(e) => setAddActivated(!addActivated)}> Add transaction</button>
        }
        </div>
        
    )

}

