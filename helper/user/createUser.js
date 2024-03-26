import axios from "axios";

const createUser = (user) => {
    axios.post('http://localhost:5000/users/add', user)
        .then(res => {
            return res.data
        })
}

export default createUser;