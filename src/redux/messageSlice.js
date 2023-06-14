import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMessage = createAsyncThunk('get/fetchMessage', async () => {
  const res = await axios.get('http://localhost:3000/api/v1/message');
  return res.data.data;
});

const messageSlice = createSlice({
  name: 'msg',
  initialState: {
    isLoading: false,
    message: '',
    errors: '',
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMessage.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchMessage.fulfilled, (state, action) => ({
        message: action.payload,
        isLoading: false,
        errors: '',
      }))
      .addCase(fetchMessage.rejected, (state) => ({
        ...state,
        errors: 'Can not fetch data',
        isLoading: false,
      }));
  },
});

export default messageSlice.reducer;
