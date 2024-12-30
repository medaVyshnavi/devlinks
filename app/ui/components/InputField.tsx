import Image from "next/image";

type InputProps = {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customStyles?: string ;
  id: string;
  name: string;
  useIcon: boolean;
  icon?: string;
  alt?: string;
  placeholder: string
  isError?: boolean;
  errorMessage?: string;
};

const InputField = ({
  value,
  handleOnChange,
  customStyles,
  id,
  name,
  useIcon,
  icon = "",
  alt = "",
  placeholder = "",
  isError,
  errorMessage,
}: InputProps) => {
  const baseStyles = `w-full font-normal text-medium text-darkGray rounded-lg ${useIcon && 'pl-10'} px-4 py-3 border border-borderGray`;
  const activeStyles = `focus:border focus:border-primary focus:outline focus:outline-transparent`;
  const errorStyles = `border border-red`;

  return (
      <div className="relative">
        {useIcon && <Image src={icon} alt={alt} width={16} height={16} className="absolute left-[2%] top-[34%]"/>}
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          id={id}
          className={`${customStyles} ${baseStyles} ${activeStyles} ${
            isError && errorStyles
          }`}
          value={value}
          onChange={handleOnChange}
        />
        <span className="text-error text-small absolute right-[2%] top-[34%] pl-">{isError && errorMessage}</span>
      </div>
  );
};

export default InputField;
