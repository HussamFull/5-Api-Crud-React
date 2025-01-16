import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


export default function Details() {
    const navigate = useNavigate();
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

    const updateUser = async (value) => {

        const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,

            {
                userName: value.userName
            }

        );

        if (response.status === 200) {

            navigate('/users');
            alert("User updated successfully");
        }
    }

    return (
        <>
            <div className=" container vh-100   ">
                <div className="row">
                    <h1>Create User </h1>
                    <form onSubmit={handleSubmit(updateUser)}>

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
