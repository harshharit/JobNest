import React, { useState } from 'react'

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted', formData);
    };

    return (
        <div className='min-h-screen bg-gray-100'>
            {/* Banner Section */}
            <div className='bg-[#3367D1] text-white py-20'>
                <div className='max-w-screen-lg mx-auto text-center'>
                    <h1 className='text-4xl font-bold mb-4'>Unlock Your Dream Job!</h1>
                    <p className='text-xl mb-8'>Join our job Nest and connect with top employers. Your perfect job is just a few clicks away.</p>
                    <button className='bg-white text-[#3575E2] px-6 py-2 font-semibold rounded-lg hover:bg-gray-200'>
                        Learn More
                    </button>
                </div>
            </div>

            {/* Sign Up Form Section */}
            <div className='max-w-screen-md mx-auto p-8'>
                <h2 className='text-3xl font-bold text-center mb-6'>Create Your Account</h2>
                <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-lg p-8'>
                    <div className='mb-4'>
                        <label htmlFor='name' className='block text-gray-700 font-semibold mb-2'>Full Name</label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full p-3 border border-gray-300 rounded-lg'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='email' className='block text-gray-700 font-semibold mb-2'>Email Address</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full p-3 border border-gray-300 rounded-lg'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-gray-700 font-semibold mb-2'>Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='w-full p-3 border border-gray-300 rounded-lg'
                            required
                        />
                    </div>
                    <button type='submit' className='bg-[#3575E2] text-white px-6 py-2 font-semibold rounded-lg hover:bg-[#2a5bb7] w-full'>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUpPage;
