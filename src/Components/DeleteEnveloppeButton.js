import React from "react";
import { useNavigate } from "react-router-dom";

export const DeleteEnveloppeButton = ({env_id}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`http://localhost:4000/enveloppes/${env_id}`, requestOptions)
            .catch((error) => console.log(error));
        
        navigate('/');
    }

    return(
        <button onClick={handleClick} className="env-detail-btn" >Delete Enveloppe</button>
    )
}