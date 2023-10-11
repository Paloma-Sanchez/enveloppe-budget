import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadAllEnveloppes } from "../Features/EnveloppeList/enveloppeListSlice";

export const DeleteEnveloppeButton = ({env_id}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClick = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:4000/enveloppes/${env_id}`, requestOptions)
            .then(() => dispatch(loadAllEnveloppes))
            .then(()=> navigate('/')) 
            .catch((error) => console.log(error));
        
        
    }

    return(
        <button onClick={handleClick} className="env-detail-btn" >Delete Enveloppe</button>
    )
}