"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type TabList = {
  id: number,
  name: string,
  icon: string
  value:string
}

type TabsProp = {
  tabItems: TabList[];
};

const Tabs = ({tabItems}:TabsProp)=> {
  const [active, setActive] = useState(1);

  const handleClick = (event) => {
    setActive(Number(event.target.id));
  };

  return (
    <div>
        <div className="relative flex justify-center align-center">
          {tabItems.map(({ id, name, icon,value }, index) => (
            <div
              key={index}
              className={`flex justify-center items-center px-6 py-2.5 mx-4 rounded-lg font-bold text-medium ${
                active === id ? "text-primary bg-lightPurple" : ""
              }`}
            >
              <Image src={icon} alt="logo" className="mr-3" width={20} height={20}/>
              <Link
                href={value}
                key={id}
                className={`${active === id ? 'text-primary' :'text-gray'}`}
                id={String(id)}
                onClick={handleClick}
              >
                {name}
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Tabs
