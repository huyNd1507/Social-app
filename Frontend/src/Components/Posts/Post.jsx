import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const post = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  return (
    <>
      <section className="post-container">
        {post.slice(1).map((post, index) => {
          return (
            <div className="posts">
              <p className="posts-title">{post.title}</p>
              <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
                {tags[post.tag]}
              </p>
              <p className="posts-description">{post.description}</p>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Post;
