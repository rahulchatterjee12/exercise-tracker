import axios from "axios";

const createExercise = async (exercise) => {
    const res = await axios.post('http://localhost:5000/exercises/add', exercise)

    return res.status

}

export default createExercise;