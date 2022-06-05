import React from 'react';

const HeroSection = () => {
    return (
        <div >
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col flex-shrink-0 lg:flex-row-reverse">
                    <img src="https://images.unsplash.com/photo-1581821886078-64336baf4ada?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class=" w-92 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl flex-shrink-0 font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;