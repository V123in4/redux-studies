import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
	{ id: 1, title: "title1", content: "this is a long content 1" },
	{ id: 2, title: "title2", content: "this is a long content 2" },
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
						userId,
					},
				};
			},

			// this is called after the prepare
			reducer(state, action) {
				state.push(action.payload);
				// this doesnt mutate the state, there is another push method under the hood
				console.log(action.payload);
			},
		},
	},
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;
// the create slice makes the same function as postsSlice.recuders.functions

export default postsSlice.reducer;
