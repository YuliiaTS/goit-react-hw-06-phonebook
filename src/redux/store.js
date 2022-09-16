import { configureStore } from '@reduxjs/toolkit';
import contactReduser from './contact/reduser';

export const store = configureStore({
   reducer: {
      contact: contactReduser,
   },
   devTools: process.env.NODE_ENV === 'development',
});