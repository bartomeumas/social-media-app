import { ReactElement } from "react";

interface IconContainerProps {
  count?: number;
  icon: ReactElement;
  isClickable?: boolean;
  onClick?: () => void;
}

const IconContainer = ({
  count,
  icon,
  isClickable,
  onClick,
}: IconContainerProps) => {
  return (
    <div>
      {isClickable ? (
        <button className='flex items-center' onClick={onClick}>
          {icon}
          <span className='ml-1'>{count}</span>
        </button>
      ) : (
        <div className='flex items-center'>
          {icon}
          <span className='ml-1'>{count}</span>
        </div>
      )}
    </div>
  );
};

export default IconContainer;
