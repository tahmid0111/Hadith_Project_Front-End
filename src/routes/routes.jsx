import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Main from "../layout/Main";
import Random from "../components/random/Random";
import AllHadith from "../components/AllHadith/AllHadith";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/random',
                element: <Random />
            },
            {
                path: '/all',
                element: <AllHadith />
            },
        ]
    },
])

export default router;