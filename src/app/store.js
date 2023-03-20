import { configureStore } from '@reduxjs/toolkit';
import cardSlice from '../features/CardSlice';

export default configureStore({
  reducer: {
    card: cardSlice,
  },
});
