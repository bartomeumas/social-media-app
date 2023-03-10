import classNames from "classnames";
import CircularButton from "./CircularButton";
import { MdAddCircle } from "react-icons/md";
import AddIcon from "@/resources/icons/components/AddIcon";

interface Button {
  children?: any;
  buttonClassName?: string;
  onClick?: () => void;
  type?: string;
}

export const Button = ({
  children,
  buttonClassName,
  onClick,
  type,
}: Button) => {
  const buttonClasses = classNames(
    "bg-white h-7 px-4 text-md text-blue-600 border-solid border-blue-500 rounded-xl",
    buttonClassName
  );

  switch (type) {
    case "add":
      return (
        <div className='fixed bottom-6 right-6'>
          <CircularButton
            buttonClassName='bg-green-500 shadow-md'
            onClick={onClick}>
            <AddIcon />
          </CircularButton>
        </div>
      );

    default:
      return (
        <button className={buttonClasses} onClick={onClick}>
          {children}
        </button>
      );
  }
};
