import React, { useEffect, useState } from "react";
import { Enveloppe } from "./Enveloppe";
import { useParams } from "react-router-dom";
import { TransactionList } from "../Features/TransactionList/TransactionList";
import { useDispatch, useSelector } from "react-redux";
import { selectAllEnveloppes } from "../Features/EnveloppeList/enveloppeListSlice";
import { NewTransactionForm } from "../app/NewTransactionForm";
import { loadTransactionsByEnveloppeId, selectAllTransactions } from "../Features/TransactionList/transactionListSlice";
import { DeleteEnveloppeButton } from "./DeleteEnveloppeButton";


export const EnveloppeDetail = () => {
    const {category} =  useParams();
    let allEnveloppes = useSelector(selectAllEnveloppes);
    let enveloppe = allEnveloppes.filter((env) => env.name === category);
    let budget = enveloppe[0].budget;
    const id = enveloppe[0].id;
    const dispatch = useDispatch();
    let transactions =useSelector(selectAllTransactions);
    const [updateOn, setUpdateOn] = useState(false);

    useEffect(() => {
        dispatch(loadTransactionsByEnveloppeId(id));
    }, [dispatch, id, transactions ]);

    
   

    return(
        <div>
            <div className="env-detail-header" >
                <DeleteEnveloppeButton env_id = {id}/>
                <button onClick={(e) => setUpdateOn(true)} className="env-detail-btn">Update this budget</button>
            </div>
            <Enveloppe title = {category} amount = {budget} detail={true} updateOn = {updateOn} env_id={id}/>
            <TransactionList env_id = {id} />
             <NewTransactionForm env_id={id} budget = {budget} />
          
        </div>
    )
}