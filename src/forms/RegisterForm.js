import { React, useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik, Formik, Form } from "formik";
import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext";
import useRegister from '../hooks/useRegister';
import Error from '../components/Error';
import { useParams } from "react-router-dom";
import {Navigate} from 'react-router-dom'


const FormSchema = Yup.object({
    email: Yup.string().email("Must be a valid e-mail format").required(),
    password: Yup.string().required(),
    first_name: Yup.string().required(),
    last_name: Yup.string().required()
  });
export default function RegisterForm(){
  const [user, setUser]= useState({
    email: "",
    password: "",
    first_name:"",
    last_name:""
  })
  const options = [
    {key: 'Email', value: 'email'},
    {key: 'Password', value: 'password'}
  ]
  const initialValues = {
    email: "",
    password: "",
    first_name:"",
    last_name:""
  };
  


const onSubmit = values => {
  console.log('Form data', values)
}
const handleSubmit=(values)=>{
  console.log(values)
}


  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values, {resetForm}) => {handleSubmit(values, resetForm);
    }
  })



  return (
    <form onSubmit={formik.handleSubmit} method = 'post'>
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
    </form>
  );
}


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