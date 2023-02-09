import classNames from "classnames";

interface Button {
  children: string;
  buttonClassName?: string;
  onClick?: () => {};
}

export const Button = ({ children, buttonClassName, onClick }: Button) => {
  const buttonClasses = classNames(
    "bg-white h-7 px-4 text-md text-blue-600 border-solid border-blue-500 font-bold rounded-xl",
    buttonClassName
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
