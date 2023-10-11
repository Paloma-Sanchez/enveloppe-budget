import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UpdateEnveloppeForm = ({env_id}) => {
    const navigate = useNavigate();
    const [updatedBudget, setUpdatedBudget] = useState('');

    const onSubmit = () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({updatedBudget : updatedBudget})
        };
        fetch(`http://localhost:4000/enveloppes/${env_id}`, requestOptions)
            .catch((error) => console.log(error));
        
        navigate('/');
    }

    return(
       <form onSubmit={onSubmit} className="update-budget-form">
            <input value={updatedBudget} placeholder="Ex:123" onChange={(e) => setUpdatedBudget(e.target.value)} type="number" name="updatedBudget" id="updatedBudget" className="input" required/>
            <button className="button" >ok</button>
       </form>
    )
}