import { nanoid } from "nanoid";

const menuItems = [
    {
        id: nanoid(),
        to: "/",
        text: "Home page",
        private: false,
    },
    {
        id: nanoid(),
        to: "/my-books",
        text: "My books",
        private: true,
    },
    {
        id: nanoid(),
        to: "/my-favorite-books",
        text: "My favorite books",
        private: true,
    },
];

export default menuItems;