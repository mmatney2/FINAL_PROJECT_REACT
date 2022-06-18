import { React, useContext, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext";
import useRegister from '../hooks/useRegister';

//Defining our yup validation
const FormSchema = Yup.object({
  email: Yup.string().email("Must be a valid e-mail format").required(),
  password: Yup.string().required(),
  confirm_password: Yup.string().required(),
});

const initialValues = {
  email: "",
  password: "",
  first_name:"",
  last_name:""
};

export default function RegisterForm() {
    const {setUser} = useContext(AppContext);
    const [loginCreds, setLoginCreds] = useState({});
    const [error, setError] = useState('')

  useRegister(loginCreds, setLoginCreds, setError, setUser)


  const handleSubmit = (values) => {
    console.log(values);
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: FormSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

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
    </form>
  );
}
