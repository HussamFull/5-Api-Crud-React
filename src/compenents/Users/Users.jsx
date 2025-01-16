import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Users() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {

        const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
        setUsers(data.users)
        console.log(data.users)
    }
    useEffect(() => {
        getUsers();
    }, [users])


    const deleteUser = async (id) => {
        await axios.delete(`${import.meta.env.VITE_BURL}/users/${id}`);
        alert('User Deleted successfully')
        //getUsers();
    }

    return (
        <>
        <div className="container">
        <h1> Create Users</h1>
        <Link className="btn btn-primary" to={'/Create'}>Create User</Link>
 

            <div className="  m-5 container-fluid d-flex  justify-content-center align-items-center">
                <div className="row ">
                    {users.map((user) => (
                        <div  key={user.id} className="col-md-3 mb-4" style={{ width: "18rem" }}>
                            <div className="card-container">
                                <div className="circle-background">
                                    <div className="square-icon">
                                        <span className="icon-text">JS</span>
                                    </div>
                                </div>
                                <div className="title"> <span className="lessons-count" >
                                <span class="badge bg-info text-dark"> Name:</span>
                                           </span> {user.userName}
                                    
                                    </div>
                                <div className="description"> <span className="lessons-count" >
                                <span class="badge bg-info text-dark">Email:</span>

                                    
                                    
                                    </span> {user.email}</div>
                                
                                <div className="description"> <span className="lessons-count" >
                                <span class="badge bg-info text-dark">  phone :</span>
                                   
                                    
                                    
                                    </span> 
                                    
                                    {user.phone}</div>
                                <div className=" gap-2 d-flex justify-content-between">

                                <Link to={`/users/${user._id}`} className="btn btn-primary">Details</Link>


                                <button onClick={()=> deleteUser(user._id)} type="button" class="btn btn-danger">Delete</button>
                                </div>

                            </div>
                        </div>

                    ))}

                </div>

            </div>
            </div>
        </>
    )
}




