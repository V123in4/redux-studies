import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	count: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			++state.count;
		},
		decrement: (state) => {
			--state.count;
		},
		reset: (state) => {
			state.count = 0;
		},
		addByAmount: (state, action) => {
			state.count += action.payload;
		},
		setToAmount: (state, action) => {
			state.count = action.payload;
		},
	},
});

export const { increment, decrement, reset, addByAmount, setToAmount } =
	counterSlice.actions;

export default counterSlice.reducer;
