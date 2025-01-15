import React from 'react'

export default function Create() {
  return (
    <>

<div className=" vh-100  ">
      <header className="">
        <div className="">
           
        </div>
  <h1>Create User </h1>
  <form>

    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="userName" placeholder="" />
      <label htmlFor="userName">Name</label>
    </div>

    <div className="form-floating mb-3">
      <input type="email" className="form-control" id="email" placeholder="name@example.com" />
      <label htmlFor="email">Email address</label>
    </div>

    <div className="form-floating mb-3">
      <input type="password" className="form-control" id="password" placeholder="" />
      <label htmlFor="epasswordmail">password </label>

    </div>

    <div className="form-floating mb-3">
      <input type="text" className="form-control" id="phone" placeholder="+01000000" />
      <label htmlFor="phone">phone Number </label>
    </div>
    
    
    <button type="submet" className="btn btn-outline-primary">Submit</button>
  </form>
</header>
</div>

    
    
    
    
    
    </>
  )
}
