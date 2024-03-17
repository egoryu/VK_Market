import {configureStore} from "@reduxjs/toolkit";
import productsSlice from "./product/productsSlice";
export const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
    },
});

