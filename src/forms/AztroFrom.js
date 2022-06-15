import React, {useContext, useState} from 'react';
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from '../components/Button';
import TextField from '@mui/material/TextField';
import Error from '../components/Error';

            
    // "id": self.id,
    // "lucky_time": self.lucky_time,
    // "description":self.description,
    // "date_range":self.date_range,
    // "color":self.color,
    // "mood":self.mood,
    // "compatibility":self.compatibility,
    // "current_date": self.current_date,
    // "lucky_number": self.lucky_number,
    // "created_on":self.created_on
 
//Defining our yup validation


function fetchCityWeather(cityname){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${token}&units=imperial`
    
    
    
    ).then((res)=>res.json())
        .then(function(data){
            console.log(data)
            let current_date = data.main.current_date
            let low = data.main.temp_min
            let humidity = data.main.humidity
            let forcast = data.weather[0].main
            document.getElementById("current_date").innerHTML=high
            document.getElementById("low").innerHTML=low
            document.getElementById("humidity").innerHTML=humidity
            document.getElementById("forcast").innerHTML=forcast

                      
        })
            .catch((error)=>console.log(error, "error here"))

}


let searchButton=document.getElementById("search")
searchButton.addEventListener("click", function(){
    let cityname= document.getElementById("cityname").value
    fetchCityWeather(cityname)
})











// const FormSchema=Yup.object(
//     {
//         sign:Yup.string().required(),
//         day:Yup.string().required("Must enter either 'today', 'tomorrow', or 'yesterday'."),
        
//     }
// )




// export default function AztroForm({Aztro={id:1,
//                 sign:"virgo",
//                 day:"today"}}){

//     const initialValues={
//         sign:Aztro?.sign ?? '',
//         day:Aztro?.day ?? ''
//     }

//     const handleSubmit=(values)=>{
//         console.log(values)
//     }               
//     const formik = useFormik({
//         initialValues:initialValues,
//         validationSchema:FormSchema,
//         onSubmit:(values)=>{handleSubmit(values)}
//     })

//     return(
//         <form onSubmit={formik.handleSubmit}>
//             <TextField
//                 id="email"
//                 name="email"
//                 fullWidth
//                 sx={{mb:2, mt:2}}
//                 label="email"
//                 placeholder="email"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}            
//             />

//             <TextField
//                 id="password"
//                 name="password"
//                 type="password"
//                 fullWidth
//                 sx={{mb:2}}
//                 label="password"
//                 placeholder="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 error={formik.touched.password && Boolean(formik.errors.password)}
//                 helperText={formik.touched.password && formik.errors.password}            
//             />

//             <Button type="submit" sx={{width:"100%"}}>Login</Button>
//             <Error>{error}</Error>
//         </form>
//     )

// }