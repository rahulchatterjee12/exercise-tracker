"use client";

import React, { useEffect, useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
import { useRouter } from 'next/navigation';
import createExercise from '@/helper/exercise/createExercise';
import getUsers from '@/helper/user/getUsers';


const CreateExercise = () => {
    const router = useRouter()
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])


    const onSubmit = (event) => {
        event.preventDefault();

        const exercise = {
            "username": event.target.username.value,
            "description": event.target.description.value,
            "duration": event.target.duration.value,
            "date": event.target.date.value,
            // "users": event.target.users.value.split(','),
        }
        createExercise(exercise)
            .then(res => console.log(res));
        router.push('/');
    }
    return (
        <div className='p-2'>
            <form onSubmit={onSubmit} className="max-w-sm mx-auto">
                <div className='m-2'>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username :</label>
                    <input required name='username' type="text" id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                </div>
                <div className='m-2'>
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description :</label>
                    <input required name='description' type="text" id="description" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                </div >
                <div className='m-2'>
                    <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900">Duration (in Minutes) :</label>
                    <input required name='duration' type="number" id="duration" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                </div >
                <div className='m-2'>
                    <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">Date :</label>
                    <input required name='date' type="date" id="date" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs" />
                </div >
                <div className='m-2'>
                    <label htmlFor="user" className="block mb-2 text-sm font-medium text-gray-900">Users :</label>
                    <FormControl sx={{ marginBottom: 1 }} size="small" fullWidth>
                        <InputLabel id="user">Users</InputLabel>
                        <Select
                            labelId="user"
                            label="Users"
                            name='users'
                            multiple
                            defaultValue={[]}
                        >
                            {users && users.map((user) => <MenuItem key={user._id} value={user.username}>{user.username}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <button type="submit" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create Exercise</button>
                </div>
            </form >
        </div >
    )
}

export default CreateExercise
