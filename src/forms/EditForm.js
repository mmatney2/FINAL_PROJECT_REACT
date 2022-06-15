import { React, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Button from "../components/Button";
import TextField from "@mui/material/TextField";
import { CancelToken } from "apisauce";
import { AppContext } from "../context/AppContext";
import useEdit from "../hooks/useEdit";
import useDelete from "../hooks/useDelete";


//Defining our yup validation
const FormSchema = Yup.object({
  email: Yup.string().email("Must be a valid e-mail format").required(),
  password: Yup.string().required(),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
});





export default function EditProfileForm({user}) {
//   const { setUser } = useContext(AppContext);
    const [editUser, setEditUser]=useState('')
    const [deleteUser, setDeleteUser] = useState(0)

    useDelete(deleteUser)
    useEdit(editUser, user?.user_id)

    const initialValues = {
        email: '',
        password: ''
        
    };  

    const handleDelete=()=>{
        setDeleteUser(user?.user_id)
    }
    const handleSubmit = (values, resetForm) => {
        setEditUser(values);

        console.log(values)
        resetForm(initialValues)
    };
    

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values, {resetForm})=>{handleSubmit(values, resetForm)},
        enableReinitialize:true
    })

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
      

      <Button type="submit" sx={{ width: "100%" }}>Edit Profile</Button>
      <Button color="error" onClick={()=>handleDelete()} sx={{width:"100%", my:1}}>Delete</Button>

    </form>
  );
}
