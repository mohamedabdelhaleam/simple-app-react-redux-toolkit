
import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';



const store = configureStore({
    reducer : {
        user : userSlice
    }
});

export default store;
//__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//__REDUX_DEVTOOLS_EXTENSION_COMPOSE__