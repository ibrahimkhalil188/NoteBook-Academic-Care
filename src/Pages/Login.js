import React, { useState } from 'react';
import SocialLogin from '../Components/Authentication/SocialLogin';
import wave from '../Assets/Image/loginwave.svg'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import Loading from '../Components/Shared/Loading';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        toast.error(error.message, { id: "Id" })
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return (toast.success("Login success", { id: "userId" }), navigate("/"))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${wave})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-[-100px]">
                <form onSubmit={(e) => handleSubmit(e)} class="card-body">
                    <h1 className='text-4xl text-center font-bold'>Login</h1>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" class="input input-bordered" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" class="input input-bordered" onChange={(e) => setPassword(e.target.value)} required />
                        <label class="label">
                            {/* <a href="#" class="label-text-alt link link-hover">Forgot password?</a> */}
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <input type="submit" value="Login" class="btn btn-primary" />
                    </div>
                </form>
                <div>
                    <h1 className='text-lg ml-12'>Are you new here? <Link to="/registration" className='text-blue-600 underline'>Register now</Link></h1>
                </div>
                <div class="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>


        </div>
    );
};

export default Login;