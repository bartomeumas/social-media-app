import classNames from "classnames";

interface InputProps {
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  onChange: any;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value: string;
}

const Input = ({
  label,
  onChange,
  type = "text",
  inputClassName,
}: InputProps) => {
  const baseInputClass =
    "border-gray-300 border-2 rounded-md w-full resize-none px-2 py-1";
  const inputClasses = classNames(baseInputClass, inputClassName);

  const input = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            className={inputClasses}
            onChange={onChange}
            rows={4}
            cols={40}
          />
        );
        break;
      default:
        return (
          <input className={inputClasses} onChange={onChange} type={type} />
        );
        break;
    }
  };
  return (
    <div>
      {label && <div>{label}</div>}
      {input()}
    </div>
  );
};

export default Input;
