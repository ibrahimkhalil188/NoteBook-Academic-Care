import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error(error.message, { id: "Id" })
    }
    if (user) {
        navigate('/')
        toast.success("Your created", { id: "id" })
    }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary'>Google
            </button>

        </div>
    );
};

export default SocialLogin;