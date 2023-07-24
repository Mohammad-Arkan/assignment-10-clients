import React, { useContext, useState } from 'react';
import { AuthContext } from '../../components/Auth/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const[error, setError] = useState('')
    const [success, setSuccess] = useState('')
// console.log(signInUser)

  const handleLogin = event => {
    event.preventDefault()
setError('')
setSuccess('')
    const form =event.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signInUser(email, password)
    .then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser)
      form.reset()
      setSuccess('Login successful')
    })
    .catch((error) => {
      console.log(error)
      setError('Your email or password not match')
    })


  }


    return (
        <div className="hero min-h-screen bg-orange-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login!</h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className='text-orange-400'>{success}</p>
              <p className='text-red-600'>{error}</p>

            </form>
            <p className='mb-4 ms-8 login'><Link to="/register">New to Cox&apos;s Restaurant please Register</Link> </p>
          </div>
        </div>
      </div>
      
    );
};

export default Login;