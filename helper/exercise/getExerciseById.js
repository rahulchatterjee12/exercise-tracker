import axios from "axios";

const getExerciseById = async (id) => {
    const res = await axios.get(`http://localhost:5000/exercises`, { param: id });
    return res.data;
}

export default getExerciseById;