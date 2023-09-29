import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../posts/postsSlice";

export const appApi = createApi({
  reducerPath: "api",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://testproject.bvntaev.repl.co/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
      // query: (params) => ({
      //   url: "`posts",
      //   //  params: some params like page_size
      // }),
      providesTags: ["Posts"],
    }),
    getPost: builder.query<Post, { postId?: string }>({
      query: ({ postId }) => `posts/${postId}`,
    }),
    createPost: builder.mutation<Post, Post>({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { useGetPostQuery, useGetPostsQuery, useCreatePostMutation } =
  appApi;
