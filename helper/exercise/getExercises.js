import axios from "axios";

const getExercises = async () => {
    const res = await axios.get('http://localhost:5000/exercises/')
    return res.data

}

export default getExercises;