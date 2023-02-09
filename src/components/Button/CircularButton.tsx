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
  return <button className='bg-blue-500 p-2 rounded-full'>{children}</button>;
};

export default CircularButton;
