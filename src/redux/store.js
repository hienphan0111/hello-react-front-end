import { configureStore } from '@reduxjs/toolkit';
import messageReducer from './messageSlice';

const store = configureStore({
  reducer: {
    msg: messageReducer,
  },
});

export default store;
