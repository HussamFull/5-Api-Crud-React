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
    }, [])

    return (
        <>
        <div className="container">
        <h1> Create Users</h1>
        <Link className="btn btn-primary" to={'/Create'}>Create User</Link>
 

        </div>
            
            <div className="container-fluid d-flex vh-100 justify-content-center align-items-center">
                <div className="row">
                    {users.map((user) => (
                        <div key={user.id} className="col-md-4" style={{ width: "18rem" }}>
                            <div className="card-container">
                                <div className="circle-background">
                                    <div className="square-icon">
                                        <span className="icon-text">JS</span>
                                    </div>
                                </div>
                                <div className="title"> <span className="lessons-count" >Name:        </span> {user.userName}</div>
                                <div className="description"> <span className="lessons-count" >Email :</span> {user.email}</div>
                                <div className="description"> <span className="lessons-count" >phone :</span> {user.phone}</div>
                                <button className="view-lessons-button">عرض الدروس</button>
                            </div>
                        </div>

                    ))}

                </div>

            </div>
        </>
    )
}




