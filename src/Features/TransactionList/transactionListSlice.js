import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadTransactionsByEnveloppeId = createAsyncThunk(
    'transactionList/loadTransactionsByEnveloppeId',

    async (env_id) => {
        const response = await fetch(`http://localhost:4000/enveloppes/${env_id}`);
        const json  = await response.json();
        return json;
    }
);

const initialState = {
    transactions : [],
    allTransactionsLoading : false,
    allTransactionsFailed : false,
    newTransactionPosting : false,
    newTransactionFailed : false,

};

const transactionListSlice = createSlice({
    name : 'transactionList',
    initialState : initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
            //LoadTransactionns
            .addCase(loadTransactionsByEnveloppeId.pending, (state) => {
                    state.allTransactionsLoading = true;
                    state.allTransactionsFailed = false;
            })
            .addCase(loadTransactionsByEnveloppeId.fulfilled, (state, action) => {
                state.transactions = action.payload;
                state.allTransactionsLoading = false;
                state.allTransactionsFailed = false;
            })
            .addCase(loadTransactionsByEnveloppeId.rejected, (state) => {
                state.allTransactionsLoading = false;
                state.allTransactionsFailed =true;
            })
            //createTransaction
            /*.addCase(createNewEnveloppe.pending, (state) => {
                state.newEnveloppePosting = true;
                state.newEnveloppeFailed = false;
            })
            .addCase(createNewEnveloppe.fulfilled, (state, action) => {
                state.enveloppes = action.payload;
                state.allEnveloppesLoading= false;
                state.allEnveloppesFailed=false;
            })
            .addCase(createNewEnveloppe.rejected, (state) => {
                state.allEnveloppesLoading= false;
                state.allEnveloppesFailed=true;
            })*/
    }
});

export const selectAllTransactions = (state) => {
    return state.transactionList.transactions
};

export const selectTransactionsLoading = (state) => {
    return state.enveloppeList.allTransactionsLoading
}; 

export const selectTransactionsFailed = (state) => {
    return state.enveloppeList.allTransactionsFailed
};

/*export const selectEnveloppeByName = (state) => {
    return state.enveloppeList.enveloppes.filter((enveloppe) => {
        envelo
    })
}*/

export const transactionListReducer = transactionListSlice.reducer;
