import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './sliders/authSlice';
import modalReducer from './sliders/modalSlice';

const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    modal: modalReducer,
  }),
});

export default store;
