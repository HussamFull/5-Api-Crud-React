import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'


export default function Details() {




    const { id } = useParams();
    const { register, handleSubmit, setValue } = useForm();

    const getDetails = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`);
        setValue("userName", data.user.userName);
        setValue("email", data.user.email);
        setValue("phone", data.user.phone);
        console.log(data)
    }



    useEffect(() => {
        getDetails();
    }, [])




    return (
        <>

            <div className=" container vh-100   ">

                <div className="row">


                    <h1>Create User </h1>
                    <form onSubmit={handleSubmit()}>

                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="userName" placeholder=""  {...register("userName")} />
                            <label htmlFor="userName">Name</label>
                        </div>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com"  {...register("email")} disabled />
                            <label htmlFor="email">Email address</label>

                        </div>



                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="phone" placeholder="+01000000"  {...register("phone")} />
                            <label htmlFor="phone">phone Number </label>
                        </div>


                        <button type="submet" className="btn btn-outline-primary">Update</button>
                    </form>

                </div>
            </div>




        </>
    )
}