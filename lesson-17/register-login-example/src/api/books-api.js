import instance from "./auth-api";

export const requestFetchBooks = async () => {
    const { data } = await instance.get("/books");
    return data;
}

export const requestAddBooks = async (body) => {
    const { data } = await instance.post("/books", body);
    return data;
}

export const requestDeleteBook = async (id) => {
    const { data } = await instance.delete(`/books/${id}`);
    return data;
}