import axios from "axios";

const createUser = async (user) => {
    const res = await axios.post('http://localhost:5000/users/add', user)
    console.log(res)
}

export default createUser;