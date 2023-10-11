import { configureStore } from '@reduxjs/toolkit';

import {enveloppeListReducer} from '../Features/EnveloppeList/enveloppeListSlice';
import { transactionListReducer } from '../Features/TransactionList/transactionListSlice';


export const store = configureStore({
  reducer: {
    enveloppeList : enveloppeListReducer,
    transactionList : transactionListReducer 
  },
});
