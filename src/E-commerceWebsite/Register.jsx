import React from 'react'
import "./Register.css"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from "yup"

const Register = () => {


    const schema = Yup.object({
        email:Yup.string().required("Email is must").email("enter a vaild email"),
        firstName : Yup.string().required("FirstName is must").matches(/^[A-Z][a-z]+$/,"enter a valid FirstName").min(5,"first name should be min 5 character"),
        lastName : Yup.string().required("LastName is must").matches(/^[A-Z][a-z]+$/,"enter a valid lastName").min(5,"lastname should be min 5 character"),
        password: Yup.string().required("password is must").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Enter a valid paaword").min(8,"password must be 8 character"),
        confirmPassword: Yup.string().required("Confirm password is must").oneOf([Yup.ref("password")],"passwoed must match")
    })

    //function to handel Submit
    function onSubmit(data){
        console.log("register data",data)
        alert("Register sucessfully")
        // fetch("",{method:"Post",
        //           headers:{"context-Type":"application/json"},
        //           body: JSON.stringify(data)
        // })

        reset(); 

    }

    const{register,handleSubmit,formState:{errors},reset}= useForm({resolver:yupResolver(schema)})
  return (
    <div className='register-container'>

        <h1>Register now</h1>

        <form className='register-form' onSubmit={handleSubmit(onSubmit)}>

            <input type='email' {...register("email")} placeholder='Email'/>
            {errors.email && <p className='error'>{errors.email.message}</p>}

            <input type='text' {...register("firstName")} placeholder='Firstname'/>
            {errors.firstName && <p className='error'>{errors.firstName.message}</p>}

            <input type='text' {...register("lastName")} placeholder='Lastname'/>
            {errors.lastName && <p className='error'>{errors.lastName.message}</p>}

            <input type='password' {...register("password")} placeholder='password'/>
            {errors.password && <p className='error'>{errors.password.message}</p>}

            <input type='password' {...register("confirmPassword")} placeholder='Confirm password'/>
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword.message}</p>}

            <button type='submit'>Register</button>

        </form>
    </div>
  )
}

export default Register