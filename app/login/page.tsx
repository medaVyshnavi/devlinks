"use client"

import React from 'react'
import Image from 'next/image'
import Logo from "../../public/images/logo-devlinks-large.svg"
import { useFormik } from "formik";
import InputField from '../ui/components/InputField';
import MailIcon from '../../public/images/icon-email.svg'
import PasswordIcon from '../../public/images/icon-password.svg'
import Button from '../ui/components/Buttons';
import Link from 'next/link';

const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      password:"",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center items-center flex-col m-auto h-screen bg-lightGray">
      <Image src={Logo} alt="devlinks logo" width={182} height={40} />
      <div className=" bg-white rounded-lg pb-6 pt-12 px-12 mt-16">
        <div>
          <h1 className="font-bold text-large">Login</h1>
          <p className="text-gray text-medium font-normal mt-3 my-9">
            Add your details below to get back into the app
          </p>

          <form onSubmit={formik.handleSubmit}>
            <div className="w-96">
              <label htmlFor="email" className="font-normal text-small">
                Email address
              </label>
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="e.g. alex@email.com"
                icon={MailIcon}
                errorMessage={formik.errors.email}
                value={formik.values.email}
                handleOnChange={formik.handleChange}
              />
            </div>
            <div className="w-96">
              <label htmlFor="password" className="font-normal text-small">
                Password
              </label>
              <InputField
                id="password"
                name="password"
                type="password"
                value={formik.values.password}
                placeholder="Enter your password"
                icon={PasswordIcon}
                errorMessage={formik.errors.password}
                handleOnChange={formik.handleChange}
              />
            </div>

            <Button
              type="submit"
              label="Submit"
              variant="primary"
              handleClick={() => console.log("form submit")}
              customStyles="w-full mt-3"
            />
          </form>
        </div>
        <p className="text-medium font-normal my-6 text-center">
          Don’t have an account?{" "}
          <Link className="text-primary" href='/signup'>  Create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login