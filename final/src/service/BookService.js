import axios from "axios";

const apiBook = "http://localhost:8080/book"

export const getAll = async (search, id) => {
    try {
        if (id === "") {
            return await axios.get(apiBook + `?name_like=${search}`);
        } else {
            return await axios.get(apiBook + `?name_like=${search}&type.id=${id}`);
        }

    } catch (e) {
        alert("Data not found");
    }
}

export const create = async (data) => {
    try {
        return await axios.post(apiBook, data);
    } catch (e) {
        alert("Data not found");
    }
}