import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    // params: {
    //     key: "",
    //     image_type: "photo",
    //     orientation: "horizontal"
    // }
})

export const getAllPosts = ()=> {
    return instance.get("/");
}

export const searchPosts = (q, _page = 1) => {
    // return instance.get(`/?q=${q}&_limit=6&_page=${_page}`)
    return instance.get("/", {
        params: {
            q,
            _limit: 6,
            _page,
        }
    })
}