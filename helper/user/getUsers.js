import axios from "axios";

const getUsers = () => {
    axios.get('http://localhost:5000/users')
        .then(res => {
            return res.data;
        })
        .catch(error => {
            return error;
        })
}

export default getUsers;