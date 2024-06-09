import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Register = () => {
  function submitRegister() {
    console.log("submit");
  }
  // function validate(values) {
  //   let errors= {};
  //   // Name validation
  //   if (!values.name){
  //     errors.name = 'Name is required'
  //   }
  //   else if(values.name.length < 3) {
  //     errors.name = 'Name must be at least 3 characters'
  //   }

  // // Phone validation
  // const phoneRegex = /^\d{8}$/;
  // if (!phoneRegex.test(values.phone)) {
  //   errors.phone = 'Invalid phone number. Must be 8 digits.';
  // }

  // // Email validation
  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (!emailRegex.test(values.email)) {
  //   errors.email = 'Invalid email address.';
  // }

  // // Password validation
  // const passwordRegex = /^(?=.*[a-z])(.?=*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/; // Minimum 8 characters, 1 lowercase, 1 uppercase, 1 digit, 1 special character
  // if (!passwordRegex.test(values.password)) {
  //   errors.password = 'Password must be at least 8 characters and include a lowercase letter, an uppercase letter, a digit, and a special character.';
  // } else if (values.password !== values.rePassword) {
  //   errors.rePassword = 'Passwords do not match.';
  // }

  // return errors;
  // }

  let phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  let validationSchema = Yup.object({
    name: Yup.string()
    .min(3, 'name minlength is 3')
      .max(15, "Must be 15 characters or less")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("email Required"),
    phone: Yup.string()
      .matches("phoneRegExp", "phone is invalid")
      .required("phone is required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{5,10}$/, "password start with uppercase")
      .required("password  is Required"),
    rePassword: Yup.string().oneOf([Yup.ref("password")])
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: submitRegister,
  });

  return (
    <div className="w-3/4 mx-auto p-5">
      <h3 class="text-3xl font-bold mb-4 text-gray-900 pb-2 border-bottom-2 border-gray-200">Register now</h3>

      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="name"
        />
        {formik.errors.name && formik.touched.name && (
          <div className="alert mt-2 p-2 bg-red-500 text-white font-bold">
            {formik.errors.name}
          </div>
        )}

        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formik.values.phone}
          className="w-full rounded border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="phone"
        />
        {formik.errors.phone && formik.touched.phone && (
          <div className="mt-2 p-2 bg-red-500 text-white font-bold">
            {formik.errors.phone}
          </div>
        )}

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          className="w-full rounded border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
        />
        {formik.errors.email && formik.touched.email && (
          <div className="mt-2 p-2 bg-red-500 text-white font-bold">
            {formik.errors.email}
          </div>
        )}

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          className="w-full rounded border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="password"
        />
        {formik.errors.password && formik.touched.password && (
          <div className="mt-2 p-2 bg-red-500 text-white font-bold">
            {formik.errors.password}
          </div>
        )}

        <label htmlFor="rePassword">Re-Password</label>
        <input
          type="password"
          name="rePassword"
          value={formik.values.rePassword}
         className="w-full rounded border py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="rePassword"
        />
        {formik.errors.rePassword && formik.touched.rePassword && (
          <div className="mt-2 p-2 bg-red-500 text-white font-bold">
            {formik.errors.rePassword}
          </div>
        )}

<button
  disabled={!formik.isValid && formik.dirty}
  type="submit"
  class="cursor-not-allowed bg-green-600 text-white font-medium rounded-md shadow-sm mt-6 py-2 px-4 disabled:opacity-50"
>
  Submit
</button>

      </form>
    </div>
  );
};

export default Register;

