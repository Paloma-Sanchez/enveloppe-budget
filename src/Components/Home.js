import React from 'react';
import {EnveloppeList} from '../Features/EnveloppeList/EnveloppeList';

export const Home = () => {
    return(
        <>
            <div>
            <h1 className='welcome'> Welcome to your personnal bugdet tracker Franz!</h1>
            <h2 className='h2'>Here are your enveloppes:</h2>
            </div>
            <EnveloppeList />
        </>
    )
}