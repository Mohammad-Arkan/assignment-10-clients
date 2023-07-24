import React, { useContext,  useRef,useState } from 'react';
import { AuthContext } from '../../components/Auth/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import app from '../../configs/firebase.config';
// import app from '../../firebase/firebase.init';

const auth = getAuth(app);

const Login = () => {
    const {signInUser} = useContext(AuthContext)
    const[error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const emailRef = useRef();

    const navigate = useNavigate()
    const location = useLocation()
    console.log('login page location', location)
    const from = location.state?.from.pathname || '/'
  
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
      navigate(from, {replace: true})

    })
    .catch((error) => {
      console.log(error)
      setError('Your email or password not match')
    })
  }

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
       signInWithPopup(auth, googleProvider)
       .then( (result)=>{
        const user = result.user;
        console.log(user)
       })
       .catch((error) => {       
       console.log('error', error.message)            
      });   
    }

    const handleGitHubSignIn = () => {
      signInWithPopup(auth, gitHubProvider)
      .then( (result)=>{
       const gitHubUser = result.user;
       console.log(gitHubUser)
      //  setUser(gitHubUser)
      })
      .catch((error) => {
      console.log('error', error.message)
     });
   }

   //forget password
   const handleResetPassword=(event) => {
    const email = emailRef.current.value
    if(!email){
        alert('Please provide your email to reset password')
    }
    sendPasswordResetEmail(auth, email)
    .then(()=> {
        alert('Please check your email')
    })
    .catch((error)=>{
        console.log(error)
        setError(error.message)
    })
   
}


    return (
      
      <div className='grid justify-items-center bg-orange-200'>
          <div className="hero min-h-screen ">
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
                <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password'  placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" onClick={handleResetPassword} className="label-text-alt link link-hover">Forgot password?</a>
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
      <div className='bg-orange-200 flex gap-2 -mt-20 mb-10'>
           <button onClick={handleGoogleSignIn}>Google Login</button>
           <button onClick={handleGitHubSignIn}>GitHub Login</button>
        </div>
      </div>
    );
};

export default Login;