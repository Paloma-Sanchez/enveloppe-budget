import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadAllEnveloppes } from "../Features/EnveloppeList/enveloppeListSlice";

export const Form = () => {
    const [name, setName] = useState('');
    const [budget, setBudget] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        const nameLowerCase = name.toLowerCase();
        const nameToSend = nameLowerCase.charAt(0).toLocaleUpperCase() + nameLowerCase.slice(1);

        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name : nameToSend,
                budget : budget})
        };
        fetch('http://localhost:4000/newEnveloppe', requestOptions)
        .then(() => dispatch(loadAllEnveloppes()))
        .then(() => navigate('/'))   
        .catch((error) => console.log(error));
       
        
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