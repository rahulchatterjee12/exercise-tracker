import axios from "axios";

const getExerciseById = (id) => {
    axios.get('http://localhost:5000/users/add')
        .then(res => {
            return res.data
        })
}

export default getExerciseById;