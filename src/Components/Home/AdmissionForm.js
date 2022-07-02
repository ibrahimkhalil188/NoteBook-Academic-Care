import React from 'react';

const AdmissionForm = () => {
    return (
        <div className='mx-24 my-12 border-2 border-cyan-600'>
            <h1 className='uppercase text-center py-12 text-4xl font-bold'>Registration Form</h1>

            <form >
                <div className='flex'>
                    <div className='w-full'>
                        <div className='w-[80%] mx-12'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">First name</span>
                            </label>
                            <input type="text" placeholder="Your first name" class="input input-bordered w-full required" />
                        </div>

                        <div className='w-[80%] mx-12'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">Father's name</span>
                            </label>
                            <input type="text" placeholder="Your first name" class="input input-bordered w-full required" />
                        </div>
                        <div className='w-[80%] mx-12'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">Date of birth</span>
                            </label>
                            <input type="date" placeholder="Your first name" class="input input-bordered w-full required" />
                        </div>
                        <div className='w-[80%] mx-12'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Your first name" class="input input-bordered w-full required" />
                        </div>
                        <div className='w-[80%] mx-12'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">Address</span>
                            </label>
                            <input type="email" placeholder="Your first name" class="input input-bordered w-full required" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-[80%] mx-12'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">last name</span>
                            </label>
                            <input type="text" placeholder="Your first name" class="input input-bordered w-full required" />
                        </div>
                        <div className='w-[80%] mx-12 my-4'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">Gender</span>
                            </label>
                            <input type="radio" name="radio-1" class="radio radio-xs mx-4" checked />Male
                            <input type="radio" name="radio-1" class="radio radio-xs mx-4" />Female
                        </div>
                        <div className='w-[80%] mx-12'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">Profile image</span>
                            </label>
                            <input type="file" placeholder="Your first name" class="input input-bordered w-full required" />
                        </div>
                        <div className='w-[80%] mx-12'>
                            <label class="label">
                                <span class="label-text text-lg uppercase font-bold">Phone number</span>
                            </label>
                            <input type="number" placeholder="Your first name" class="input input-bordered w-full required" />
                        </div>
                    </div>
                </div>
                <input type='submit' className='btn btn-primary w-1/2 text-center my-6 lg:ml-56'></input>
            </form>
        </div>

    );
};

export default AdmissionForm;