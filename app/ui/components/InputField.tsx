import Image from "next/image";

type InputProps = {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  customStyles?: string ;
  id: string;
  name: string;
  icon?: string;
  alt?: string;
  placeholder: string
  errorMessage?: string;
  type:string
};

const InputField = ({
  value,
  handleOnChange,
  customStyles,
  id,
  name,
  icon = "",
  alt = "",
  placeholder = "",
  errorMessage,
  type
}: InputProps) => {
  const baseStyles = `w-full font-normal text-medium text-darkGray rounded-lg ${icon && 'pl-12'} px-4 py-3 border border-borderGray mb-5 mt-1`;
  const activeStyles = `focus:border focus:border-primary focus:outline focus:outline-transparent`;
  const errorStyles = `border border-red`;

  return (
      <div className="relative">
        {icon && <Image src={icon} alt={alt} width={16} height={16} className="absolute left-[5%] top-[28%]"/>}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          className={`${customStyles} ${baseStyles} ${activeStyles} ${
            errorMessage && errorStyles
          }`}
          value={value}
          onChange={handleOnChange}
        />
        <span className="text-error text-small absolute right-[2%] top-[34%] pl-">{errorMessage && errorMessage}</span>
      </div>
  );
};

export default InputField;
