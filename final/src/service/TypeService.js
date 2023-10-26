import axios from "axios";

const apiBook = "http://localhost:8080/types"

export const getAll = async () => {
    try {
        const res = await axios.get(apiBook)
        return res.data;
    } catch (e) {
        alert("Data not found");
    }
}