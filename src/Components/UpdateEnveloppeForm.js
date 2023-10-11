import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadAllEnveloppes } from "../Features/EnveloppeList/enveloppeListSlice";

export const UpdateEnveloppeForm = ({env_id, name, setUpdateOn}) => {
    const navigate = useNavigate();
    const [updatedBudget, setUpdatedBudget] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({updatedBudget : updatedBudget})
        };
        fetch(`http://localhost:4000/enveloppes/${env_id}`, requestOptions)
        .then(() => dispatch(loadAllEnveloppes()))
        .then(() => navigate(`/${name}`))    
        .catch((error) => console.log(error));
        
        setUpdateOn(false);
    }

    return(
       <form onSubmit={onSubmit} className="update-budget-form">
            <input value={updatedBudget} placeholder="Ex:123" onChange={(e) => setUpdatedBudget(e.target.value)} type="number" name="updatedBudget" id="updatedBudget" className="input" required/>
            <button className="button" >ok</button>
       </form>
    )
}