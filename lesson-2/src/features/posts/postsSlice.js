import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
	{
		id: 1,
		title: "title1",
		content: "this is a long content 1",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
	},
	{
		id: 2,
		title: "title2",
		content: "this is a long content 2",
		date: sub(new Date(), { minutes: 5 }).toISOString(),
	},
];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			// this is called before the reducer
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						title,
						content,
						date: new Date().toISOString(),
						userId,
					},
				};
			},

			// this is called after the prepare
			reducer(state, action) {
				state.push(action.payload);
				// state.sort((a, b) => new Date(b.date) - new Date(a.date));
				// this doesnt mutate the state, there is another push method under the hood
			},
		},
	},
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;
// the create slice makes the same function as postsSlice.recuders.functions

export default postsSlice.reducer;
