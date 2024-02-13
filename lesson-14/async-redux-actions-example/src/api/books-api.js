import axios from "axios";

const booksInstance = axios.create({
    baseURL: "https://65c27014f7e6ea59682b6082.mockapi.io/api/books"
});

export const requestFetchBooks = async ()=> {
    const {data} = await booksInstance.get("/");
    return data;
}

export const requestAddBooks = async (body) =>{
    const {data} = await booksInstance.post("/", body);
    return data;
}
export const requestDeleteBook = async (id) => {
    const {data} = await booksInstance.delete(`/${id}`);
    return data;
}