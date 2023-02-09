import "react";

export const PostCard = ({
  user = "bartomeumas00",
  isFollowing = false,
  postText = "Hola chicos",
  comments = [],
}) => {
  return (
    <div className='border-2-blue-500 p-3 rounded-lg bg-slate-400'>
      <div className='flex justify-between'>
        <div>{user}</div>
        <div>Follow/Following</div>
      </div>
      <div>{postText}</div>
      <div className='flex justify-around'>
        <div>CommentButton</div>
        <div>EditButton/</div>
      </div>
    </div>
  );
};
