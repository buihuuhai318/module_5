import axios from "axios";


const apiService = "http://localhost:8080/types";

export const getAll = async () => {
    try {
        const res = await  axios.get(apiService);
        return res.data;
    } catch (e) {
        alert("Không có dữ liệu");
    }
}