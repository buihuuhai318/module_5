import axios from "axios";


const apiService = "http://localhost:8080/serviceList";

export const getAll = async () => {
    try {
        const res = await  axios.get(apiService);
        return res.data;
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const create = async (data) => {
    try {
        return await axios.post(apiService, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const edit = async (data) => {
    // console.log(data)
    console.log(apiService + `/${data.id}`)
    try {
        return await axios.put(apiService + `/${data.id}`, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const del = async (data) => {
    // console.log(data)
    console.log(apiService + `/${data.id}`)
    try {
        return await axios.delete(apiService + `/${data.id}`, data);
    } catch (e) {
        // alert("Không có dữ liệu");
    }
}

export const findById = async (id) => {
    try {
        // console.log(await axios.get(apiBooks + `/${id}`))
        return await axios.get(apiService + `/${id}`);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}