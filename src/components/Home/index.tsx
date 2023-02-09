import { postApi } from "../../../api/index";

import { useState, useEffect } from "react";
import { Button } from "../Button";
import Posts from "../Posts";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    postApi.getPosts().then(({ data, error }) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className='container'>
      <Posts posts={posts} />
      <Button type='add' onClick={() => {}}></Button>
    </div>
  );
};
