import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadAllEnveloppes = createAsyncThunk(
    'enveloppeList/loadAllEnveloppes',

    async () => {
        const response = await fetch('http://localhost:4000/enveloppes');
        const json  = await response.json();
        return json;
    }
);

export const createNewEnveloppe = createAsyncThunk(
    'newEnveloppe/createEnveloppe',

    async (obj) => {
        const response = await fetch('http://localhost:4000/newEnveloppe', {
            method: 'POST',
            mode : 'cors',
            body: JSON.stringify(obj)
        });
        const json  = await response.json();
        return json;
    }
);

const initialState = {
    enveloppes : [],
    allEnveloppesLoading : false,
    allEnveloppesFailed : false,
    newEnveloppePosting : false,
    newEnveloppeFailed : false,

};

const enveloppeListSlice = createSlice({
    name : 'enveloppeList',
    initialState : initialState,
    reducers : {},
    extraReducers: (builder) => {
        builder
            //LoadEnveloppes
            .addCase(loadAllEnveloppes.pending, (state) => {
                    state.allEnveloppesLoading= true;
                    state.allEnveloppesFailed=false;
            })
            .addCase(loadAllEnveloppes.fulfilled, (state, action) => {
                state.enveloppes = action.payload;
                state.allEnveloppesLoading= false;
                state.allEnveloppesFailed=false;
            })
            .addCase(loadAllEnveloppes.rejected, (state) => {
                state.allEnveloppesLoading= false;
                state.allEnveloppesFailed=true;
            })
            //createEnveloppe
            .addCase(createNewEnveloppe.pending, (state) => {
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
            })
    }
});

export const selectAllEnveloppes = (state) => {
    return state.enveloppeList.enveloppes
};

export const selectAllEnveloppesLoading = (state) => {
    return state.enveloppeList.allEnveloppesLoading
}; 

export const selectAllEnveloppesFailed = (state) => {
    return state.enveloppeList.allEnveloppesFailed
};

/*export const selectEnveloppeByName = (state) => {
    return state.enveloppeList.enveloppes.filter((enveloppe) => {
        envelo
    })
}*/

export const enveloppeListReducer = enveloppeListSlice.reducer;



//export {selectAllEnveloppes, selectAllEnveloppesLoading, selectAllEnveloppesFailed}