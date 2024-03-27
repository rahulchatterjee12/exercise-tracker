import React, { useEffect, useState } from 'react';
import getExerciseById from '@/helper/exercise/getExerciseById';
import { Box, Button, IconButton, Modal } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    borderRadius: 2
};

const EditPopup = ({ id }) => {
    const [open, setOpen] = useState(false);
    const [exercise, setExercise] = useState();

    const handleClose = () => setOpen(false);

    const fetchExercise = async () => {
        const res = await getExerciseById(id);
        setExercise(res);
    }

    useEffect(() => {
        fetchExercise();
    }, [])

    return (
        <>
            <IconButton color='primary' onClick={() => setOpen(true)}><EditIcon /></IconButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    asdfl
                    <Button>Save</Button>
                </Box>
            </Modal>
        </>
    )
}

export default EditPopup
