import React from 'react'
import MockupImg from "../../../public/images/illustration-phone-mockup.svg"
import Image from 'next/image'

const Mockup = () => {
  return (
    <div className="bg-white px-32 py-7 rounded-xl">
      <Image src={MockupImg} alt="Phone mockup" />
    </div>
  );
}

export default Mockup