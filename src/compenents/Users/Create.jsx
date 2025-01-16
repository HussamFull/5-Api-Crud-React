import React from 'react'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

export default function Create() {

  const { register, control, handleSubmit } = useForm();

  const navigate = useNavigate();

  const registerUser = async (responsive) => {


    const res = await axios.post(`${import.meta.env.VITE_BURL}/users`, responsive);


 

    if (res.status === 201) {
      alert('User Created')
      navigate('/users');
      
    }
  }


  return (
    <>



      <div className=" container vh-100 ">
        
          <div className="row">

          
          <h1>Create User </h1>
          <form onSubmit={handleSubmit(registerUser)}>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="userName" placeholder=""  {...register("userName")} />
              <label htmlFor="userName">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" placeholder="name@example.com"  {...register("email")} />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="password" placeholder=""  {...register("password")} />
              <label htmlFor="epasswordmail">password </label>

            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="phone" placeholder="+01000000"  {...register("phone")} />
              <label htmlFor="phone">phone Number </label>
            </div>


            <button type="submet" className="btn btn-outline-primary">Submit</button>
          </form>
        
      </div>
      </div>



      <DevTool control={control} />

    </>
  )
}
