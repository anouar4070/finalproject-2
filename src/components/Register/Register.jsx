import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const [registers, setRegister] = useState([]);

  const submitRegister = async () => {
    try {
      const formData = {
        name: formik.values.name,
        last_name: formik.values.last_name, 
        floating_company: formik.values.floating_company,
        email: formik.values.email,
        phone: formik.values.phone,
        password: formik.values.password,
      };

      const response = await axios.post("http://localhost:4000/registres", formData);
      setRegister(response.data);
    } catch (error) {
      console.error({ message: "error", error });
    }
    console.log("submit");
  };

  let phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "name minlength is 3")
      .max(15, "Must be 15 characters or less")
      .required("Name is required"),
    last_name: Yup.string()
      .min(3, "last name minlength is 3")
      .max(15, "Must be 15 characters or less")
      .required("Last Name is required"),

    floating_company: Yup.string()
      .min(3, "company minlength is 3")
      .max(15, "Must be 15 characters or less")
      .required("Name of company is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("email Required"),
    phone: Yup.string()
      .matches("phoneRegExp", "phone is invalid")
      .required("phone is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password start with uppercase")
      .required("password  is Required"),
    rePassword: Yup.string().oneOf([Yup.ref("password")]),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
      floating_company: "",
    },
    validationSchema,
    onSubmit: submitRegister,
  });

  return (
    //     <div className="w-3/4 mx-auto p-5">
    //       <h3 class="text-3xl font-bold mb-4 text-gray-900 pb-2 border-bottom-2 border-gray-200">Register now</h3>

    //       <form onSubmit={formik.handleSubmit}>
    //         <label htmlFor="name">Name</label>
    //         <input
    //           type="text"
    //           name="name"
    //           value={formik.values.name}
    //           className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           id="name"
    //         />
    //         {formik.errors.name && formik.touched.name && (
    //           <div className="alert mt-2 p-2 bg-red-500 text-white font-bold">
    //             {formik.errors.name}
    //           </div>
    //         )}

    //         <label htmlFor="phone">Phone</label>
    //         <input
    //           type="tel"
    //           name="phone"
    //           value={formik.values.phone}
    //           className="w-full rounded border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           id="phone"
    //         />
    //         {formik.errors.phone && formik.touched.phone && (
    //           <div className="mt-2 p-2 bg-red-500 text-white font-bold">
    //             {formik.errors.phone}
    //           </div>
    //         )}

    //         <label htmlFor="email">email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           value={formik.values.email}
    //           className="w-full rounded border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           id="email"
    //         />
    //         {formik.errors.email && formik.touched.email && (
    //           <div className="mt-2 p-2 bg-red-500 text-white font-bold">
    //             {formik.errors.email}
    //           </div>
    //         )}

    //         <label htmlFor="password">password</label>
    //         <input
    //           type="password"
    //           name="password"
    //           value={formik.values.password}
    //           className="w-full rounded border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           id="password"
    //         />
    //         {formik.errors.password && formik.touched.password && (
    //           <div className="mt-2 p-2 bg-red-500 text-white font-bold">
    //             {formik.errors.password}
    //           </div>
    //         )}

    //         <label htmlFor="rePassword">Re-Password</label>
    //         <input
    //           type="password"
    //           name="rePassword"
    //           value={formik.values.rePassword}
    //          className="w-full rounded border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
    //           onChange={formik.handleChange}
    //           onBlur={formik.handleBlur}
    //           id="rePassword"
    //         />
    //         {formik.errors.rePassword && formik.touched.rePassword && (
    //           <div className="mt-2 p-2 bg-red-500 text-white font-bold">
    //             {formik.errors.rePassword}
    //           </div>
    //         )}

    // <button
    //   disabled={!formik.isValid && formik.dirty}
    //   type="submit"
    //   class="cursor-not-allowed bg-green-600 text-white font-medium rounded-md shadow-sm mt-6 py-2 px-4 disabled:opacity-50"
    // >
    //   Submit
    // </button>

    //       </form>
    //     </div>

    <>
      <div className="py-6 max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-green-600">Register now</h2>
        <form onSubmit={formik.handleSubmit}>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              class="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              for="email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
            {formik.errors.email && formik.touched.email && (
              <div className="mt-2 p-2 text-red-600 font-normal block py-2.5 px-0 w-full text-sm  bg-transparent border-0   appearance-none dark:text-white  focus:outline-none focus:ring-0  ">
                {formik.errors.email}
              </div>
            )}
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="floating_password"
              class="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
            />
            <label
              for="password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {formik.errors.password && formik.touched.password && (
              <div className="mt-2 p-2 text-red-600 font-normal block py-2.5 px-0 w-full text-sm  bg-transparent border-0   appearance-none dark:text-white  focus:outline-none focus:ring-0  ">
                {formik.errors.password}
              </div>
            )}
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="rePassword"
              value={formik.values.rePassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="rePassword"
              class="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              required
            />
            <label
              for="rePassword"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
            {formik.errors.rePassword && formik.touched.rePassword && (
              <div className="mt-2 p-2 text-red-600 font-normal block py-2.5 px-0 w-full text-sm  bg-transparent border-0   appearance-none dark:text-white  focus:outline-none focus:ring-0  ">
                {formik.errors.rePassword}
              </div>
            )}
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="name"
                class="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                for="name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>

              {formik.errors.name && formik.touched.name && (
                <div className="mt-2 p-2 text-red-600 font-normal block py-2.5 px-0 w-full text-sm  bg-transparent border-0   appearance-none dark:text-white  focus:outline-none focus:ring-0  ">
                  {formik.errors.name}
                </div>
              )}
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="last_name"
                class="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                for="last_name"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
              {formik.errors.last_name && formik.touched.last_name && (
                <div className="mt-2 p-2 text-red-600 font-normal block py-2.5 px-0 w-full text-sm  bg-transparent border-0   appearance-none dark:text-white  focus:outline-none focus:ring-0  ">
                  {formik.errors.last_name}
                </div>
              )}
            </div>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="phone"
                class="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                for="phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (123-456-7890)
              </label>
              {formik.errors.phone && formik.touched.phone && (
                <div className="mt-2 p-2 text-red-600 font-normal block py-2.5 px-0 w-full text-sm  bg-transparent border-0   appearance-none dark:text-white  focus:outline-none focus:ring-0  ">
                  {formik.errors.phone}
                </div>
              )}
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_company"
                value={formik.values.floating_company}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                id="floating_company"
                class="block py-3.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_company"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Company (Ex. Google)
              </label>
              {formik.errors.floating_company &&
                formik.touched.floating_company && (
                  <div className="mt-2 p-2 text-red-600 font-normal block py-2.5 px-0 w-full text-sm  bg-transparent border-0   appearance-none dark:text-white  focus:outline-none focus:ring-0  ">
                    {formik.errors.floating_company}
                  </div>
                )}
            </div>
          </div>
          <button
            disabled={!formik.isValid && formik.dirty}
            type="submit"
            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
