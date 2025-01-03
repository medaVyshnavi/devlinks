import React,{useState} from 'react'
import LinkList from "../../lib/linksData"
import { LinkListProps } from "../../lib/linksData";
import Image from 'next/image';
import DownArrow from "../../../public/images/icon-chevron-down.svg"

const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)
  const [selectedLink, setSelectedLink] = useState({name:"",iconPath:""})

  const handleOpenToggle = () => {
    setToggleDropdown(!toggleDropdown);
  }

  const handleLinkSelection = ({ name, iconPath }:{name:string,iconPath:string}) => {
    setSelectedLink({name,iconPath});
    setToggleDropdown(false)
  }

  return (
    <div>
      <div className="relative">
        {selectedLink.iconPath && (
          <Image
            src={selectedLink.iconPath}
            alt="icon"
            width={16}
            height={16}
            className="absolute top-1/2 left-5 transform -translate-y-1/2"
          />
        )}

        <input
          type="text"
          onClick={handleOpenToggle}
          className="w-full border border-borderGray rounded-lg py-2.5 px-12"
          value={selectedLink.name || ""}
          readOnly
        />
        <Image
          src={DownArrow}
          alt="down icon"
          width={16}
          height={16}
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
        />
      </div>

      {toggleDropdown && (
        <ul
          className="border border-borderGray border-1 mt-3 rounded-lg max-h-56 overflow-y-scroll cursor-pointer
        "
        >
          {LinkList.map(({ id, name, value, iconPath }: LinkListProps) => (
            <div
              key={id}
              className={`flex justify-start items-center mx-4 mt-2 px-1 pt-1 pb-2 ${
                id < 14 && "border-b-[1px] border-borderGray"
              }`}
              onClick={() => handleLinkSelection({ name, iconPath })}
            >
              <Image src={iconPath} alt="icon" width={16} height={16} />
              <button
                name={name}
                value={value}
                className="block text-medium font-normal mx-4"
              >
                {name}
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown