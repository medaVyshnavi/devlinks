"use client";

import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo-devlinks-large.svg";
import { useFormik } from "formik";
import InputField from "../ui/components/InputField";
import MailIcon from "../../public/images/icon-email.svg";
import PasswordIcon from "../../public/images/icon-password.svg";
import Button from "../ui/components/Buttons";
import Link from "next/link";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      createpassword: "",
      confirmpassword:""
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="flex justify-center items-center flex-col m-auto h-screen">
      <Image src={Logo} alt="devlinks logo" width={182} height={40} />
      <div className=" bg-white rounded-lg pb-4 pt-12 px-12 mt-12">
        <div>
          <h1 className="font-bold text-large">Create account</h1>
          <p className="text-gray text-medium font-normal mt-3 my-9">
            Let’s get you started sharing your links!
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
              <label
                htmlFor="createpassword"
                className="font-normal text-small"
              >
                Create password
              </label>
              <InputField
                id="createpassword"
                name="createpassword"
                type="password"
                value={formik.values.createpassword}
                placeholder="Create Password"
                icon={PasswordIcon}
                errorMessage={formik.errors.createpassword}
                handleOnChange={formik.handleChange}
              />
            </div>

            <div className="w-96">
              <label
                htmlFor="confirmpassword"
                className="font-normal text-small"
              >
                Confirm password
              </label>
              <InputField
                id="confirmpassword"
                name="confirmpassword"
                type="password"
                value={formik.values.confirmpassword}
                placeholder="Confirm Password"
                icon={PasswordIcon}
                errorMessage={formik.errors.confirmpassword}
                handleOnChange={formik.handleChange}
              />
            </div>
            <p className="font-normal text-small my-2">
              Password must contain at least 8 characters
            </p>

            <Button
              type="submit"
              label="Create new account"
              variant="primary"
              handleClick={() => console.log("account created")}
              customStyles="w-full mt-3 py-3"
            />
          </form>
        </div>
        <p className="text-medium font-normal my-4 text-center">
          Already have an account?
          <Link className="text-primary" href="/login">  Login </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
