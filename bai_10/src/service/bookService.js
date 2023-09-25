import axios from "axios";

const apiBooks = "http://localhost:8080/books"

export const getAll = async () => {
    try {
        const res = await axios.get(apiBooks);
        return res.data;
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const create = async (data) => {
    try {
        return await axios.post(apiBooks, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const edit = async (data) => {
    // console.log(data)
    console.log(apiBooks + `/${data.id}`)
    try {
        return await axios.put(apiBooks + `/${data.id}`, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const del = async (data) => {
    // console.log(data)
    console.log(apiBooks + `/${data.id}`)
    try {
        return await axios.delete(apiBooks + `/${data.id}`, data);
    } catch (e) {
        // alert("Không có dữ liệu");
    }
}

export const findById = async (id) => {
    try {
        // console.log(await axios.get(apiBooks + `/${id}`))
        return await axios.get(apiBooks + `/${id}`);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}