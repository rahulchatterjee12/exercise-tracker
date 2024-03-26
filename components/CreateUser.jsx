'use client'
import createUser from '@/helper/user/createUser';
import { TextField } from '@mui/material';

const CreateUser = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        const user = {
            'username': event.target.username.value,
        }

        createUser(user);
    }
    return (
        <form onSubmit={onSubmit} className=' w-[90vw] md:w-[60vw] mx-auto mt-3'>
            <h2 className='text-center mt-2 text-gray-700 font-mono'>Create a new user</h2>
            <TextField
                name='username'
                size='small'
                sx={{ marginTop: 2 }}
                label='User name'
                placeholder='Enter Yout name'
                fullWidth
                required
            />
            <button type='submit' className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Create User</button>
        </form>
    )
}

export default CreateUser
