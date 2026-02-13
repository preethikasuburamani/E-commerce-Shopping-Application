  import React from 'react'
  import "./Signin.css"
  import {useForm} from "react-hook-form"
  import { yupResolver } from "@hookform/resolvers/yup";
  import * as Yup from "yup"
  import { useNavigate } from 'react-router-dom';

  const Signin = () => {

      const schema =Yup.object({
          username:Yup.string().required("user name is required").matches(/^[A-Z][a-z]+$/,"Enter a vaild username"),
          password:Yup.string().required("Password is required").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Enter a valid paaword")
          .min(8,"password must be min 8 characters")

      })

      function onSubmit(data){

        console.log("Sigin Form",data)
        alert("signed succesfully")
        reset(); 
        navigate(`/`)
      }

      const{ register,handleSubmit,formState:{errors},reset}=useForm({ resolver: yupResolver(schema)})

    const navigate=  useNavigate()

    return (
      <div className='sigin-container '>

          <h1>Sigin</h1>
          <h1 onClick={()=>navigate("/register")}>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='sigin-form'>
          
          <input type='text' {...register("username")} placeholder='username'/>
          {errors.username&&<p className='error'>{errors.username.message}</p>}

          <input type='password' {...register("password")} placeholder='password'/>
          {errors.password&&<p className='error'>{errors.password.message}</p>}


          <button type='submit'>SIGN IN</button>

        </form>
      </div>
    )
  }

  export default Signin