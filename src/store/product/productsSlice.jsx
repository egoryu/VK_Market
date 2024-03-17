import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, thunkAPI) => {
        const res = await axios("https://fakestoreapi.com/products");

        return res.data;
    });

const productsSlice = createSlice({
    name: "products",
    initialState: {
        isLoad: false,
        list: [],
        counts: {},
    },
    reducers: {
        incrementById: (state, action) => {
            const currentCount = state.counts[action.payload] || 1;
            state.counts[action.payload] = Math.min(currentCount + 1, 10);
        },
        decrementById: (state, action) => {
            const currentCount = state.counts[action.payload] || 1;
            state.counts[action.payload] = Math.max(currentCount - 1, 1);
        },
        removeById: (state, action) => {
            delete state.counts[action.payload];
            state.list = state.list.filter(item => item.id !== action.payload);
        },
    },
    selectors: {
        selectTotalPrice: (state) => state.list.reduce((acc, val) => acc + val.price * state.counts[val.id], 0).toFixed(2),
        selectProductsAmountAndTotalPrice: (state) => state.list.reduce((acc, val) => [
            ...acc,
            {
                id: val.id,
                title: val.title,
                amount: state.counts[val.id],
                total: (state.counts[val.id] * val.price).toFixed(2)
            }
        ], []),
    },
    extraReducers: builder => {
        builder.addCase(getProducts.pending, (state) => {
           state.isLoad = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.list = action.payload;
            state.isLoad = false;

            action.payload.forEach(({id}) => {
                if (!state.counts[id]) {
                    state.counts[id] = 1;
                }
            });
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            console.log(action.payload ?? action.error);
            state.isLoad = false;
        });
    },
});

export const {incrementById, decrementById, removeById} = productsSlice.actions;
export const {selectTotalPrice,selectProductsAmountAndTotalPrice} = productsSlice.selectors;
export default productsSlice;