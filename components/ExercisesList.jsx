'use client';
import getExercises from '@/helper/exercise/getExercises';
import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditPopup from './EditPopup';
import deleteExercise from '@/helper/exercise/deleteExercise';

const ExercisesList = () => {
    const [exercises, setExercises] = useState();

    const fetchExercises = async () => {
        const res = await getExercises()
        if (res) setExercises(res);
    }

    const handleDelete = async (id) => {
        const res = await deleteExercise(id);
        if (res) fetchExercises();
    }

    useEffect(() => {
        fetchExercises();
    }, [])

    return (
        <div className='w-[90vw] mx-auto mt-3'>
            {exercises && exercises.map(exercise => (
                <div key={exercise._id} className='p-2 border border-blue-200 rounded-md mt-2 text-blue-950 relative'>
                    <div className='absolute top-1 right-0'>
                        <EditPopup id={exercise.id} />
                        <IconButton onClick={() => handleDelete(exercise._id)} color='error'><DeleteForeverIcon /></IconButton>
                    </div>
                    <div> Username:  {exercise.username}</div>
                    <div> Description:  {exercise.description}</div>
                    <div> Duration:  {exercise.duration} M</div>
                </div>))}
        </div>
    )
}

export default ExercisesList
