import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllEnveloppesLoading } from './enveloppeListSlice';
import { loadAllEnveloppes } from './enveloppeListSlice';
import {selectAllEnveloppes} from './enveloppeListSlice';
import { Enveloppe } from '../../Components/Enveloppe';
import { Link } from 'react-router-dom';

export const EnveloppeList = () => {
    let allEnveloppes = useSelector(selectAllEnveloppes);
    const dispatch = useDispatch();
    const loadingEnveloppes = useSelector(selectAllEnveloppesLoading);

    useEffect(() => {
        dispatch(loadAllEnveloppes());
    }, [dispatch]);

   if(loadingEnveloppes){
        return <h1>Loading...</h1>;
    }
    
   const publicEnveloppes = allEnveloppes.map((envel) => {
        return(
            <Link to={`/${envel.name}`} className='link' >
                <Enveloppe title = {envel.name} amount = {envel.budget}/> 
            </Link>
        )
    });

   return (
        <div className='grid-container' >
            <div className='grid'>
            {publicEnveloppes}
            </div>
        </div>
        
   )
}