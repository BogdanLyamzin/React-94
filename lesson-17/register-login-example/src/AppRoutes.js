import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MyBooksPage = lazy(() => import("./pages/MyBooksPage/MyBooksPage"));
const MyFavoriteBooksPage = lazy(() => import("./pages/MyFavoriteBooksPage/MyFavoriteBooksPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="my-books" element={<MyBooksPage />} />
                    <Route path="my-favorite-books" element={<MyFavoriteBooksPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;