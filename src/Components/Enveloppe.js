import React, { useState } from 'react';
import { UpdateEnveloppeForm } from './UpdateEnveloppeForm';

export const Enveloppe = ({title, amount, detail, updateOn, setUpdateOn, env_id}) => {
   
    return(
        <div>
            <h3 className={detail?'h2':'h3'} >{title}</h3>
            {updateOn ? <UpdateEnveloppeForm env_id={env_id} name={title} setUpdateOn={setUpdateOn} /> : <p className={detail?'budget':'env-budget'} >${amount}</p>}
        </div>
    )
}