import React from 'react';

const Navbar = () => {
    return (
        <div className='text-white sticky top-0 border-b-2'>
            <div class="navbar">
                <div class="navbar-start ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#021f5b] rounded-box w-52">
                            <li><a>Item 1</a></li>

                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl">NAC</a>

                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Item 1</a></li>

                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;