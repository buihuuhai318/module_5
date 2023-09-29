import axios from "axios";


const apiVegetables = "http://localhost:8080/vegetables";

export const getAll = async (page, limit, search) => {
    try {
        return await axios.get(apiVegetables + `?_page=${page}&_limit=${limit}&name_like=${search}`);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const create = async (data) => {
    try {
        return await axios.post(apiVegetables, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const edit = async (data) => {
    try {
        return await axios.put(apiVegetables + `/${data.id}`, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const del = async (data) => {
    try {
        return await axios.delete(apiVegetables + `/${data.id}`, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const findById = async (id) => {
    try {
        return await axios.get(apiVegetables + `/${id}`);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}