import axios from "axios";

const createExercise = (exercise) => {
    axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => {
            return res.status
        })
}

export default createExercise;