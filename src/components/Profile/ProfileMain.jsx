import { useState } from "react";

import { Button } from "../Button";
import PostList from "../Posts";
import { FriendsList } from "../FriendsList";

const ProfileMain = () => {
  const [view, setView] = useState("Posts");

  return (
    <div>
      <div className='flex justify-around mt-5'>
        <Button
          buttonClassName='bg-blue-500 text-white'
          onClick={() => {
            setView("Posts");
          }}>
          Posts
        </Button>
        <Button
          buttonClassName='bg-blue-500 text-white'
          onClick={() => {
            setView("Friends");
          }}>
          Friends
        </Button>
      </div>
      <div>{view == "Posts" ? <PostList /> : <FriendsList />}</div>
    </div>
  );
};

export default ProfileMain;
