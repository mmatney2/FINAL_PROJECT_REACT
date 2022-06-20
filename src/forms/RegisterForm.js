import { React, useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext";
import useRegister from '../hooks/useRegister';
import Error from '../components/Error';
import { useParams } from "react-router-dom";
import {Navigate} from 'react-router-dom';
import useEdit from '../hooks/useEdit';
import useDelete from '../hooks/useDelete';



const FormSchema = Yup.object({
    email: Yup.string().email("Must be a valid e-mail format").required(),
    password: Yup.string().required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required()
  });
export default function RegisterForm(){
  const [user, setAlert] = useContext(AppContext);
  const[newUser, setNewUser] = useState([]);
  const[editUser, setEditUser] = useState([]);
  const [deleteUser, setDeleteUser] = useState([]);

  useRegister(newUser);
  useEdit(editUser);
  useDelete(deleteUser);

  const initialValues = {
    email: "",
    password: "",
    first_name:"",
    last_name:""
  };
  
const handleSubmit=(values, resetForm)=>{
  if (!user.first_name){
    setNewUser(values.first_name);console.log("Registered")
  }else{
    setEditUser({...values});
    console.log("Edit Profile")
  }
  console.log(values)
  resetForm(initialValues);
}


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values, {resetForm}) => {handleSubmit(values, resetForm);
    }
  })
  const handleDelete = (e)=>{
    setDeleteUser(user);
    console.log("test", user)
  }



  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        name="email"
        fullWidth
        sx={{ mb: 2, mt: 2 }}
        label="email"
        placeholder="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        id="password"
        name="password"
        type="password"
        fullWidth
        sx={{ mb: 2 }}
        label="password"
        placeholder="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <TextField
        id="first_name"
        name="first_name"
        fullWidth
        sx={{ mb: 2 }}
        label="first_name"
        placeholder="first_name"
        value={formik.values.first_name}
        onChange={formik.handleChange}
        error={
          formik.touched.first_name &&
          Boolean(formik.errors.first_name)
        }
        helperText={
          formik.touched.first_name && formik.errors.first_name
        }
      />
      <TextField
        id="last_name"
        name="last_name"
        fullWidth
        sx={{ mb: 2 }}
        label="last_name"
        placeholder="last_name"
        value={formik.values.last_name}
        onChange={formik.handleChange}
        error={
          formik.touched.last_name &&
          Boolean(formik.errors.last_name)
        }
        helperText={
          formik.touched.last_name && formik.errors.last_name
        }
      />

      <Button type="submit" sx={{ width: "100%" }}>Register</Button>
      <Button type="submit" sx={{ width: "100%" }}>Edit Profile</Button>
      <Button color="error" onClick={()=>handleDelete()} sx={{width:"100%", my:1}}>Delete</Button>

    </form>
  );
}

// import React from "react";
// import { Formik, Form, useField, ErrorMessage } from "formik";
// import { object, string, ref } from "yup";

// const RegisterValidation = object().shape({
//   first_name: string().required("Required"),
//   last_name: string().required("Required"),
//   email: string()
//     .required("Valid email required").email("Valid email required"),
//   password: string().min(8, "Required").required("Required"),
// });

// const Input = ({ name, label, ...props }) => {
//   const [field, meta] = useField(name);
//   return (
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold" for={field.name}>
//         {label}
//       </label>
//       <input
//         className={`${
//           meta.error && meta.touched ? "border-red-500" : ""
//         } shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
//         {...field}
//         {...props}
//       />
//       <ErrorMessage
//         first_name={field.first_name}
//         component="div"
//         className="text-red-500 text-xs"
//       />
//     </div>
//   );
// };

// export default function RegForm() {
//   const handleSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <div className="h-screen flex items-center justify-center flex-col bg-gray-100">
//       <Formik
//         initialValues={{
//           first_name: "",
//           last_name: "",
//           email: "",
//           password: "",
//         }}
//         onSubmit={handleSubmit}
//         validationSchema={RegisterValidation}
//       >
//         {() => {
//           return (
//             <Form className="bg-white w-6/12 shadow-md rounded px-8 pt-6 pb-8">
//               <Input name="first_name" label="First Name" />
//               <Input name="last_name" label="Last Name" />

//               <Input name="email" label="Email" />
//               <Input name="password" label="Password" type="password" />
              
//               <div className="flex items-center justify-between">
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                   type="submit"
//                 >
//                   Register
//                 </button>
//               </div>
//             </Form>
//           );
//         }}
//       </Formik>
//     </div>
//   );
// }

















// import FormikControl from './FormikControl';

//Defining our yup validation
// const FormSchema = Yup.object({
//   email: Yup.string().email("Must be a valid e-mail format").required(),
//   password: Yup.string().required(),
//   first_name: Yup.string().required(),
//   last_name: Yup.string().required()
// });

// export default function RegisterForm({user}) {
//     const {User} = useContext(AppContext);
//     const [newUser, setNewUser] = useState('')
//     const [loginCreds, setLoginCreds] = useState({});


//     // const [loginCreds, setLoginCreds] = useState({});
//     // const [error, setError] = useState('')

//   useRegister(newUser)

//   const initialValues = {
//     email: "",
//     password: "",
//     first_name:"",
//     last_name:""
//   };
//   const handleSubmit = (values, resetForm) => {
//     if (user){
//       setNewUser(values)
//     }else{
//       setLoginCreds(values)
//     }
//     console.log(values)
//     resetForm(initialValues)
//   };

  // return <Formik initialValues={initialValues} validationSchema={validationSchema}>
  // </Formik>