import { useState } from "react";

import Image from "next/image";
import { Pill } from "../Pill";
import IconContainer from "../IconContainer";

import { CommentIcon } from "@/resources/icons/components/CommentIcon";
import { formatDate } from "@/utils";
import { HeartIcon } from "@/resources/icons/components/HeartIcon";
import { ShareIcon } from "@/resources/icons/components/ShareIcon";

import beach from "../../resources/images/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg";
import { Button } from "../Button";

interface PostCard {
  user: string;
  profilePicture?: string;
  isFollowing?: boolean;
  text: string;
  createdAt: string;
  likes: number;
  timesShared: number;
  comments?: string[];
  postImage?: string;
}

export const PostCard = ({
  user = "unknown",
  profilePicture,
  isFollowing,
  text,
  createdAt = "unknown",
  likes = 0,
  timesShared = 0,
  comments = [],
  postImage,
}: PostCard) => {
  const followPillClass = "bg-white text-blue-600 w-[106px]";
  const followingPillClass = "bg-green-500 text-white w-[106px]";

  const [pillText, setPillText] = useState("Follow");
  const [pillClass, setPillClass] = useState(followPillClass);

  const handlePillButtonClick = () => {
    if (pillText === "Follow") {
      // handle request to follow, if request is successful set text to "following", otherwise leave it as it is
      setPillText("Following");
      setPillClass(followingPillClass);
    } else {
      // handle request to unfollow, if request is successful set text to "follow", otherwise leave it as it is
      setPillText("Follow");
      setPillClass(followPillClass);
    }
  };

  return (
    <div className='border-2-blue-500 p-3 rounded-2xl bg-white'>
      <div className='flex'>
        <div className='w-10 h-10 rounded-full bg-blue-400 mr-2'>
          {profilePicture && <Image src={profilePicture} alt='profile-pic' />}
        </div>
        <div>
          <b className='text-gray-600'>{user}</b>
          <p className='text-gray-400'>{formatDate(createdAt)}</p>
        </div>
        {/* <Pill
          text={pillText}
          onClick={handlePillButtonClick}
          pillClassName={pillClass}
        /> */}
      </div>
      <div className='mt-1 mb-2'>{text}</div>
      {postImage && (
        <div className='w-full'>
          <Image src={postImage} alt='post-image' className='rounded-xl' />
        </div>
      )}
      <div className='flex justify-between mt-2'>
        <div className='flex justify-around w-1/2'>
          <IconContainer
            count={likes}
            icon={<HeartIcon />}
            isClickable
            onClick={() => {
              console.log("?");
            }}
          />
          <IconContainer
            count={comments?.length}
            icon={<CommentIcon />}
            isClickable
            onClick={() => {
              console.log("?");
            }}
          />
        </div>
        <IconContainer
          count={timesShared}
          icon={<ShareIcon />}
          isClickable
          onClick={() => {
            console.log("?");
          }}
        />
      </div>
    </div>
  );
};
