import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../components/Auth/AuthProvider';
import { useState } from 'react';
import './Login.css'

const Register = () => {
    const {user, createUser} = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const handleRegistration= event => {
        event.preventDefault()
        setSuccess('')
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

 /**password validetion* */
 setError('')
 if(!/(?=.*?[A-Z])/.test(password)){
     setError('At least one upper case ')
     return;
 }
 else if(!/(?=.*?[a-z])/.test(password)){
     setError('At least one lower case English letter')
     return;
 }
 else if(!/(?=.*?[0-9])/.test(password)){
     setError('At least one digit')
     return;
 }
 else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
     setError('At least one special character')
     return;
 }
  
 else if(password.length < 6){
     setError('Password must have 6 character')
     return
 }

        createUser(email, password)
         .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setSuccess("User login Successful")
          form.reset()

		form.reset()
         })
         .catch((error) =>{
            console.log(error.message)
         })

   }

    return (
        <div className="hero min-h-screen bg-orange-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Registration</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password'  placeholder="password" className="input input-bordered" required/>        
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name='photo'  placeholder="photo url" className="input input-bordered" required/>        
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p className='text-orange-700'>{success}</p>
              <p className='text-red-700'>{error}</p>
            </form>          
            <p className='mb-4 ms-8 login'><Link to="/login">Already have an account please login</Link> </p>
          </div>
        </div>
      </div>
      
    );
};

export default Register;