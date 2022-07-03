import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);


    if (error) {
        toast.error(error.message, { id: "Id" })
    }
    if (user) {
        navigate('/')
        toast.success("Your created", { id: "id" })
    }
    return (
        <div className='w-full mb-12'>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary w-[82%] ml-8'>Google
            </button>

        </div>
    );
};

export default SocialLogin;