import axios from "axios";


const apiCustomer = "http://localhost:8080/customerList";

export const getAll = async (page, limit, search) => {
    try {
        const res = await axios.get(apiCustomer + `?_page=${page}&_limit=${limit}&name_like=${search}`);
        const records = res.headers.get("x-total-count");
        const data = res.data;
        return [data, records];
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const create = async (data) => {
    console.log(data)
    try {
        return await axios.post(apiCustomer, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const edit = async (data) => {
    // console.log(data)
    console.log(apiCustomer + `/${data.id}`)
    try {
        return await axios.put(apiCustomer + `/${data.id}`, data);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}

export const del = async (data) => {
    // console.log(data)
    console.log(apiCustomer + `/${data.id}`)
    try {
        return await axios.delete(apiCustomer + `/${data.id}`, data);
    } catch (e) {
        // alert("Không có dữ liệu");
    }
}

export const findById = async (id) => {
    try {
        // console.log(await axios.get(apiBooks + `/${id}`))
        return await axios.get(apiCustomer + `/${id}`);
    } catch (e) {
        alert("Không có dữ liệu");
    }
}