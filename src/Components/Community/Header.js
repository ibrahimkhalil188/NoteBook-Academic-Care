import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex justify-center items-center my-6'>
                <div class="avatar">
                    <div class="w-16 mr-4 rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                </div>


            </div>
            <button className='btn btn-primary'>Post</button>
        </div>
    );
};

export default Header;