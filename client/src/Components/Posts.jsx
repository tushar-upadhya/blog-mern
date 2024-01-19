import { useState } from "react";
import { DUMMY_POSTS } from "../data/dummy";
import PostItem from "./PostItem";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
      {posts.map(
        ({ id, thumbnail, category, title, description, authorID }) => (
          <PostItem
            key={id}
            thumbnail={thumbnail}
            category={category}
            postID={id}
            title={title}
            description={description}
            authorID={authorID}
          />
        )
      )}
    </section>
  );
};

export default Posts;
