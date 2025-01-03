import Image from "next/image";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  variant: 'primary' | 'secondary';
  handleClick: () => void;
  customStyles?: string;
  type: 'button' | 'submit';
  icon?:string
}

const Button = ({
  label,
  disabled = false,
  variant,
  handleClick,
  customStyles,
  type = "button",
  icon = ""
} : ButtonProps) => {
  const baseStyles = `relative font-bold text-medium rounded-lg px-7 cursor-pointer`;
  const variantStyles =
    variant === "secondary"
      ? `border border-primary text-primary ${
          !disabled && "hover:bg-lightPurple"
        }`
      : `bg-primary text-white ${!disabled && "hover:bg-hover"}`;
  const disableStyles = disabled && `opacity-25`;
  
  return (
    <>
      <button
        type={type}
        className={`${customStyles} ${baseStyles} ${variantStyles} ${disableStyles}`}
        disabled={disabled}
        onClick={handleClick}
      >
        {icon && <Image src={icon} alt="icon" width={20} height={20}/>}
        {label}
      </button>
    </>
  );
}

export default Button