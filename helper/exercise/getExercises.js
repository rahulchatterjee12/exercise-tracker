import axios from "axios";

const getExercises = () => {
    axios.get('http://localhost:5000/users/add')
        .then(res => {
            return res.data
        })
}

export default getExercises;