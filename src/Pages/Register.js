import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../Components/Authentication/SocialLogin';
import Loading from '../Components/Shared/Loading';
import auth from '../firebase.init';
import wave from '../Assets/Image/loginwave.svg'

const Register = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfirmPassword] = useState('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        toast.error(error.message, { id: "Id" })
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return (toast.success("Login success", { id: "userId" }), navigate('/'))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (confrimPassword === password) {
            createUserWithEmailAndPassword(email, password)
        }
        else {
            toast.error("Password Not match")
        }

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${wave})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-[-100px]">
                <form onSubmit={(e) => handleSubmit(e)} class="card-body">
                    <h1 className='text-4xl text-center font-bold'>Register</h1>
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
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm password" class="input input-bordered" onChange={(e) => setConfirmPassword(e.target.value)} required />
                    </div>
                    <div class="form-control mt-6">
                        <input type="submit" value="Register" class="btn btn-primary" />
                    </div>
                </form>
                <div>
                    <h1 className='text-lg ml-12'>Are you new here?<Link to="/login" className='text-blue-600 underline'>Login now</Link></h1>
                </div>
                <div class="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>


        </div>
    )

};

export default Register;