import { useState } from "react";
import { PostCard } from "../PostCard";

interface Post {
  userId: string;
  text: string;
  createdAt: string;
  updatedAt?: string;
}

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts &&
        posts.map((post, index) => (
          <li key={index} className='mb-2'>
            <PostCard
              user={post.userId}
              text={post.text}
              createdAt={post.createdAt}
            />
          </li>
        ))}
    </ul>
  );
};

export default PostList;
