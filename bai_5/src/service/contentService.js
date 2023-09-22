import axios from "axios";


export const create = async (data) => {
    try {
        const res = await axios.post("http://localhost:8080/todolist", data)
        return res;
    } catch (e) {

    }

}

export const getAll = async () => {
    try {
        const res = await axios.get("http://localhost:8080/todolist");
        return res.data;
    } catch (e) {
        alert("Không có dữ liệu")
    }
}