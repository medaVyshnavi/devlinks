import React from 'react'
import Image from 'next/image'
import DragDrop from "../../../public/images/icon-drag-and-drop.svg"
import { useFormik } from 'formik';
import InputField from './InputField';
import LinkIcon from "../../../public/images/icon-link.svg"
import Dropdown from './Dropdown';

const LinkComponent = () => {

   const formik = useFormik({
     initialValues: {
       platform: "",
       url:""
     },
     onSubmit: (values) => {
       alert(JSON.stringify(values, null, 2));
     },
   });
  return (
    <div className="bg-lightGray text-gray text-medium rounded-lg px-4 pt-4">
      <div>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <Image src={DragDrop} alt="drag drop" width={16} height={16} />
            <p className="font-bold text-medium pl-3">Link #</p>
          </div>
          <button>Remove</button>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className="my-2">
          <label htmlFor="email" className="font-normal text-small">
            Platform
          </label>
          <Dropdown />
        </div>
        <div className='my-2'>
          <label htmlFor="url" className="font-normal text-small">
            Link
          </label>
          <InputField
            id="url"
            name="url"
            type="text"
            placeholder="e.g. alex@email.com"
            icon={LinkIcon}
            errorMessage={formik.errors.url}
            value={formik.values.url}
            handleOnChange={formik.handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default LinkComponent