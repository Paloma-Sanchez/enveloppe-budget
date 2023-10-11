import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTransactionsByEnveloppeId, selectAllTransactions } from "./transactionListSlice";
import { DeleteTransactionButton } from "../../Components/DeleteTransactionButton";

export const TransactionList = ({env_id}) => {
    const allTransactions = useSelector(selectAllTransactions);
    const dispatch = useDispatch();

    /*useEffect(() => {
        dispatch(loadTransactionsByEnveloppeId(env_id));
    }, [dispatch, env_id]);*/

    const transactions = allTransactions.map((transaction, index) => {

        return(
            <>
                <p className="transaction-text" key={index}>{transaction.description}</p>
                <p className="transaction-text" key={index*10+1}>${transaction.amount}</p>
                <DeleteTransactionButton trans_id = {transaction.id}/>
            </>
        )
    })

return(
    <div>
        
        <div className="transaction-grid-container" >
            <h3 className="h3" >Transactions</h3>
            <div className="transaction-grid">
                <p className="transaction-header" >Description</p>
                <p className="transaction-header">Amount</p>
                <p>x</p>
                {transactions}
            </div>
        </div>
    </div>
)

};