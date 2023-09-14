"use client";

import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "@/store/features/counter/counterSlice";
import { addPost } from "@/store/features/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

interface ModalData {
  number: number;
  visible: boolean;
}

export function HomePage() {
  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

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
    console.log("addPost");

    dispatch(addPost({ title, content }));
    resetForm();
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

      <section>
        {posts.map(({ id, title, content }) => {
          return (
            <div className="mb-3" key={id}>
              <p>{id}</p>
              <p>{title}</p>
              <p>{content}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
