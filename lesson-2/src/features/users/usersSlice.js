import { createSlice } from "@reduxjs/toolkit";

const initialState = [
	{ id: "1", name: "name1" },
	{ id: "2", name: "name2" },
	{ id: "3", name: "name3" },
];

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
