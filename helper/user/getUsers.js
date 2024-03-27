import axios from "axios";

const getUsers = async () => {
    try {
        const res = await axios.get('http://localhost:5000/users',)
        return res.data;
    }
    catch {
        return
    }
}

export default getUsers;