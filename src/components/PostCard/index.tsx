import { useState } from "react";

import { Pill } from "../Pill";

import { CommentIcon } from "@/resources/icons/components/CommentIcon";
import { EditIcon } from "@/resources/icons/components/EditIcon";
import { formatDate } from "@/utils";

interface PostCard {
  user: string;
  isFollowing?: boolean;
  text: string;
  createdAt: string;
  comments?: string[];
}

export const PostCard = ({
  //   user,
  //   isFollowing = false,
  //   text = "Hoy fue un dia divertido",
  //   createdAt = "dd/mm/yyyy",
  //   comments = [],
  // }{
  user,
  isFollowing,
  text,
  createdAt,
  comments,
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
    <div className='border-2-blue-500 p-3 rounded-lg bg-blue-500'>
      <div className='flex justify-between text-white'>
        <b>@{user}</b>
        <p>{formatDate(createdAt)}</p>
        {/* <Pill
          text={pillText}
          onClick={handlePillButtonClick}
          pillClassName={pillClass}
        /> */}
      </div>
      <div className='text-white'>{text}</div>
      <div className='flex justify-around'>
        <CommentIcon />
        <EditIcon />
      </div>
    </div>
  );
};
