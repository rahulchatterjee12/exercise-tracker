import axios from "axios";

const deleteExercise = async (id) => {
    const res = await axios.delete(`http://localhost:5000/exercises/${id}`)
    return res.data
}

export default deleteExercise;