import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
	name: "counter",
	initialState: {
		value: 0,
	},
	reducers: {
		increase: (state) => {
			state.value += 1;
		},
		decrease: (state) => {
			state.value -= 1;
		},
		increaseByValue: (state, action) => {
			state.value += action.payload;
		},
	},
});


export const {decrease, increase, increaseByValue } = counterSlice.actions;

export default counterSlice.reducer;