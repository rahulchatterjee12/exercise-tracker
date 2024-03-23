"use client";
import React from 'react'


const CreateExercise = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        let username = event.target.username.value;
        let description = event.target.description.value;
        let duration = event.target.duration.value;
        let date = event.target.date.value;
        let users = event.target.users.value;

        console.log(username, description, duration, date, users)
    }
    return (
        <div className='p-2'>
            <form onSubmit={onSubmit} className="max-w-sm mx-auto">
                <div className='m-2'>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 ">Username :</label>
                    <input required name='username' type="text" id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs   " />
                </div>
                <div className='m-2'>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Description :</label>
                    <input required name='description' type="text" id="description" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs   " />
                </div >
                <div className='m-2'>
                    <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 ">Duration :</label>
                    <input required name='duration' type="number" id="duration" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs   " />
                </div >
                <div className='m-2'>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 ">Date :</label>
                    <input required name='date' type="date" id="date" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs   " />
                </div >
                <div className='m-2'>
                    <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900">Select User</label>
                    <select name='users' id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  ">
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                    <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Purple to Blue</button>
                </div>
            </form >
        </div >
    )
}

export default CreateExercise
