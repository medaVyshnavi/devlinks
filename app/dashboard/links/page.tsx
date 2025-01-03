"use client"

import Button from '@/app/ui/components/Buttons';
import React, { useState } from 'react'
import IllustrationEmpty from "../../../public/images/illustration-empty.svg"
import Image from 'next/image';

const Links = () => {

  const [linksList,setLinksList] = useState([])
  return (
    <div className="bg-white rounded-lg ml-5 flex-1">
      <div className="p-5">
        <div>
          <h1 className="font-bold text-large text-darkGray">
            Customize your Links
          </h1>
          <p className="font-normal text-small text-gray pt-2">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <Button
            label="+ Add new link"
            variant="secondary"
            type="button"
            handleClick={() => console.log("add button")}
            customStyles="py-2 w-full mt-7 mb-2 text-small"
          />
        </div>
        {linksList.length === 0 && (
          <div className="bg-lightGray flex flex-col justify-center items-center text-center my-4">
            <Image src={IllustrationEmpty} alt="empty links list" className='mt-3'/>
            <h1 className="font-bold text-large text-darkGray pt-5">{`Let's get you started`}</h1>
            <p className="font-normal text-small text-gray px-20 py-5">
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We’re here to help
              you share your profiles with everyone!
            </p>
          </div>
        )}
      </div>
      <div className="border border-lightGray border-1"></div>
      <Button label='Save' variant='primary' handleClick={() => console.log('on save')} type='button' customStyles='py-2.5 my-6 mx-5' disabled/>
    </div>
  );
}

export default Links