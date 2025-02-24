// import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query";
// import productApi from "../slices/productSlice";


// const store = configureStore({
//     reducer: {
//         [productApi.reducerPath]: productApi.reducer, 
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware().concat(productApi.middleware), 
// });

// setupListeners(store.dispatch);

// export default store;




import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../slices/searchSlice';
import productApi from '../slices/productSlice';


const store = configureStore({
    reducer: {
        search: searchReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),
});
export default store;