
import { configureStore } from '@reduxjs/toolkit';
import apiReducer from '../store/slice/Slice';

const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});

export default store;