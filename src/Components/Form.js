import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState(0);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name : name,
                budget : budget})
        };
        fetch('http://localhost:4000/newEnveloppe', requestOptions)
            .catch((error) => console.log(error));
       
        navigate('/')
    }

    return(
        <div className="form-div" >
            <form onSubmit={onSubmit} >
                <label htmlFor = "name" className="label" >Enveloppe's name</label>
                <br/>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} 
                id="name" name="name" className="input" placeholder="Ex: Groceries" required/>
                <br/>
                <label htmlFor = "budget" className="label" >Initial Budget</label>
                <br/>
                <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} 
                id="budget" className="input" placeholder="Ex: 100" name="budget"/>
                <br/>
                <button className="button" >Create Enveloppe</button>
            </form>
        </div>
    )
}