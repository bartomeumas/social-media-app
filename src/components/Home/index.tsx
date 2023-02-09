import { postApi } from "../../../api/index";

import { useEffect } from "react";
import { Button } from "../Button";
import Posts from "../Posts";

export const Home = () => {
  useEffect(() => {
    postApi.getPosts();
  }, []);

  return (
    <div className='container'>
      {/* <Posts posts={posts} /> */}
      <Button type='add'></Button>
    </div>
  );
};
