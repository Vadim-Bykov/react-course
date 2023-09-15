import { RootState } from "@/store/store";
import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
  nanoid,
} from "@reduxjs/toolkit";
import axios from "axios";

export interface Post {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
}
interface PostsState {
  posts: Post[];
  status: "idle" | "loading" | "succeed" | "failed";
  error?: string | null;
}

const POSTS_URL = "https://jsonplaceholder.org/posts";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (newPost: Post) => {
    console.log({ newPost });

    try {
      const response = await axios.post(POSTS_URL, newPost);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
);

const initialState: PostsState = {
  posts: [],
  status: "idle",
  error: null,
};

export const postsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //  addPost: {
    //    reducer(state, action: PayloadAction<Post>) {
    //      state.posts = action.payload;
    //    },
    //    prepare: (title, content) => {
    //      return {
    //        payload: {
    //          id: nanoid(),
    //          title,
    //          content,
    //          publishedAt: sub(new Date(), { minutes: 10 }).toISOString()
    //        },
    //      };
    //    },
    //  },
    // },
    addPost: (
      state,
      action: PayloadAction<{ title: string; content: string }>
    ) => {
      state.posts.push({
        id: nanoid(),
        publishedAt: new Date().toISOString(),
        ...action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = "succeed";
        state.posts = [...state.posts, ...action.payload];
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action: PayloadAction<Post>) => {
        console.log({ payload: action.payload });

        state.posts.push(action.payload);
      });
  },
});

export const selectPosts = (state: RootState) => state.posts.posts;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;

export const { addPost } = postsSlice.actions;

export const postsReducer = postsSlice.reducer;
