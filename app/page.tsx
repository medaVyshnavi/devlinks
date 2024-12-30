"use client"

import { useState } from "react";
import InputField from "./ui/components/InputField";
import Email from "../public/images/icon-email.svg";

export default function Home() {
 const [fname,setFName] = useState('')
  return (
    <div className="w-96 mt-5 ml-3">
      <InputField id="name" name="name" useIcon={true} icon={Email} handleOnChange={(e) => setFName(e.target.value)} value={fname} placeholder="Enter your name" isError={true} errorMessage="please check again"/>
    </div>
  );
}
