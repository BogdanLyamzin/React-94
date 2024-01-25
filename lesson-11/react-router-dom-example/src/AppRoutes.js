import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PostsSearchPage = lazy(() => import("./pages/PostsSearchPage/PostsSearchPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const SinglePostPage = lazy(() => import("./pages/SinglePostPage/SinglePostPage"));
const SinglePostCommentsPage = lazy(() => import("./pages/SinglePostCommentsPage/SinglePostCommentsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="posts-search" element={<PostsSearchPage />} />
                <Route path="posts/:id" element={<SinglePostPage />}>
                    <Route path="comments" element={<SinglePostCommentsPage />} />
                </Route>
                <Route path="contacts" element={<ContactsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;