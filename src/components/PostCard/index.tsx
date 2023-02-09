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
  const [pillText, setPillText] = useState("Follow");
  const handlePillButtonClick = () => {
    if (pillText === "Follow") {
      // handle request to follow, if request is successful set text to "following", otherwise leave it as it is
      setPillText("Following");
    } else {
      // handle request to unfollow, if request is successful set text to "follow", otherwise leave it as it is
      setPillText("Follow");
    }
  };

  return (
    <div className='border-2-blue-500 p-3 rounded-lg bg-blue-500'>
      <div className='flex justify-between'>
        <div className='text-white text-md'>
          <b>@{user}</b> - {formatDate(createdAt)}
        </div>
        <Pill text={pillText} onClick={handlePillButtonClick} />
      </div>
      <div className='text-white'>{text}</div>
      <div className='flex justify-around'>
        <CommentIcon />
        <EditIcon />
      </div>
    </div>
  );
};
