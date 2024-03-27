'use client'
import createUser from '@/helper/user/createUser';
import { Alert, IconButton, Snackbar, TextField } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const CreateUser = () => {

    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setMessage('');
    };

    const action = (
        <>
            <IconButton
                size="small"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    const onSubmit = async (event) => {
        event.preventDefault();
        const user = {
            'username': event.target.username.value,
        }

        const res = await createUser(user)
            .then(res => {
                setMessage('User Created Succussfully')
                setColor('primary')
                setOpen(true)
            })
            .catch(err => {
                setMessage('User already Exists')
                setColor('error')
                setOpen(true)
            })
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
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                action={action}
            >
                <Alert
                    onClose={handleClose}
                    severity={color}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </form>
    )
}

export default CreateUser
