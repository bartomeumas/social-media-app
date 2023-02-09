import classNames from "classnames";

interface CircularButton {
  children: any;
  buttonClassName?: string;
  onClick?: () => {};
  type?: string;
}

const CircularButton = ({
  children,
  buttonClassName,
  onClick,
}: CircularButton) => {
  const circularButtonClasses = classNames(
    "bg-blue-500 p-2 rounded-full",
    buttonClassName
  );

  return <button className={circularButtonClasses}>{children}</button>;
};

export default CircularButton;
