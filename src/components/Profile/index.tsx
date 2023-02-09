import { useState } from "react";

import { Button } from "../Button";
import ProfileMain from "./ProfileMain";
import ProfileInformation from "./ProfileInformation";

import { FriendsList } from "../FriendsList";
import { Posts } from "../Posts";

export const Profile = ({}) => {
  return (
    <div className='text-center w-full h-full'>
      <ProfileInformation />
      <ProfileMain />
    </div>
  );
};
