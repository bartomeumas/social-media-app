import { useState } from "react";
import { PostCard } from "../PostCard";

interface Post {
  userId: string;
  text: string;
  createdAt: string;
  updatedAt?: string;
  likes: number;
  timesShared: number;
}

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts?.length > 0 &&
        posts.map((post, index) => (
          <li key={index} className='mb-4'>
            <PostCard
              user={post.userId}
              text={post.text}
              createdAt={post.createdAt}
              likes={post.likes}
              timesShared={post.timesShared}
            />
          </li>
        ))}
    </ul>
  );
};

export default PostList;
