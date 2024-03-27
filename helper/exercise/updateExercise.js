import axios from "axios";

const updateExercise = async (id) => {
    const res = await axios.get(`http://localhost:5000/exercises/${id}`)
    return res.data
}

export default updateExercise;