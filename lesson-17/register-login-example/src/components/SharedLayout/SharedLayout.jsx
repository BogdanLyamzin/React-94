import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<p>...Loading page</p>}>
                <Outlet />
            </Suspense>
        </>
    )
}

export default SharedLayout;