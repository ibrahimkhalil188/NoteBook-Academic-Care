import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Shared/Loading';
import auth from '../../firebase.init';

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Login now!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class=" hero avatar">
                                <div class="rounded">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <div>
                                <h1>{user?.email}</h1>
                                <h1>{user?.displayName}</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;