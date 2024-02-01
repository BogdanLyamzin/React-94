import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
})

export const getAllPosts = ()=> {
    return instance.get("/");
}

export const getPostById = id => {
    return instance.get(`/${id}`);
}

export const searchPosts = (q, _page = 1) => {
    return instance.get("/", {
        params: {
            q,
            _limit: 6,
            _page,
        }
    })
}

export const getCommentsByPostId = id => {
    return instance.get(`/${id}/comments`);
}