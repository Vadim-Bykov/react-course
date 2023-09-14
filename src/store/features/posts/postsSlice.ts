import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";

interface PostsState {
  id: string;
  title: string;
  content: string;
}

const initialState: PostsState[] = [
  { id: "1", title: "title 1", content: "Some content 1 " },
  { id: "2", title: "title 2", content: "Some content 2 " },
  { id: "3", title: "title 3", content: "Some content 3 " },
];

export const postsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //  addPost: {
    //    reducer(state, action: PayloadAction<PostsState>) {
    //      state.push(action.payload);
    //    },
    //    prepare: (title, content) => {
    //      return {
    //        payload: {
    //          id: nanoid(),
    //          title,
    //          content,
    //        },
    //      };
    //    },
    //  },
    // },
    addPost: (
      state,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      return [...state, { id: nanoid(), ...action.payload }];
    },
  },
});

export const { addPost } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
