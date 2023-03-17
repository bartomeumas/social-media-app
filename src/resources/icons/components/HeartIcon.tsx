import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const HeartIcon = ({ size = 30, fill = false }) => {
  return fill ? (
    <AiFillHeart size={size} color='#ff2825' />
  ) : (
    <AiOutlineHeart size={size} />
  );
};
