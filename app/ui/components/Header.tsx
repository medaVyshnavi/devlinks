"use client";

import React from "react";
import Logo from "../../../public/images/logo-devlinks-large.svg";
import Image from "next/image";
import Button from "./Buttons";
import Tabs from "./Tabs";
import tabsData from "../../lib/tabsData"

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white m-4 rounded-xl py-4 px-5">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div>
        <Tabs tabItems={tabsData} />
      </div>
      <div>
        <Button
          label="Preview"
          variant="secondary"
          handleClick={() => console.log("preview")}
          type="button"
          customStyles="py-2.5"
        />
      </div>
    </div>
  );
};

export default Header;
