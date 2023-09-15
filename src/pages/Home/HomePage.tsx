"use client";

import {
  addPost,
  fetchPosts,
  selectPosts,
  selectPostsError,
  selectPostsStatus,
  Post,
  addNewPost,
} from "@/store/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { nanoid } from "@reduxjs/toolkit";
import moment from "moment";
import React, {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from "react";

export function HomePage() {
  const posts = useAppSelector(selectPosts);
  const postsStatus = useAppSelector(selectPostsStatus);
  const postsError = useAppSelector(selectPostsError);

  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsStatus]);

  const onChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!!e.target.value.trim()) {
      setTitle(e.target.value);
    }
  };

  const onChangeContent: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!!e.target.value.trim()) {
      setContent(e.target.value);
    }
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (title && content) {
      // dispatch(addPost({ title, content }));
      dispatch(
        addNewPost({
          title,
          content,
          id: nanoid(),
          publishedAt: moment().format("DD/MM/YYYY HH:mm:ss"),
        })
      );
    }

    resetForm();
  };

  const renderContent = () => {
    switch (postsStatus) {
      case "succeed":
        return <PostsList posts={posts} />;

      case "idle":
      case "loading":
        return <h1>Loading...</h1>;

      case "failed":
        return <h1 className="text-red-600">{postsError}</h1>;

      default:
        return null;
    }
  };

  return (
    <main>
      <section className="mb-9">
        <form onSubmit={onSubmit}>
          <input
            value={title}
            typeof="title"
            placeholder="Enter title"
            onChange={onChangeTitle}
            className="mb-2"
          />
          <br />
          <input
            value={content}
            typeof="content"
            placeholder="Enter content"
            onChange={onChangeContent}
            className="mb-2"
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </section>

      {renderContent()}
    </main>
  );
}

const PostsList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section>
      {posts.map(({ id, title, content, publishedAt }) => {
        return (
          <div className="mb-3" key={id}>
            <p>
              <span className="font-bold">id:</span> {id}
            </p>
            <p>
              <span className="font-bold">title:</span> {title}
            </p>
            <p>
              <span className="font-bold">content:</span> {content}
            </p>
            <p>
              <span className="font-bold">date:</span> {publishedAt}
            </p>
          </div>
        );
      })}
    </section>
  );
};
