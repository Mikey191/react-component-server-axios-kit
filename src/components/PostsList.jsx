import React from "react";
import PostItem from "./PostItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostsList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h1 className="post-list__title" style={{ textAlign: "center" }}>
        ПОСТОВ НЕТ
      </h1>
    );
  }
  return (
    <div className="">
      <h1 className="post-list__title" style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostsList;
