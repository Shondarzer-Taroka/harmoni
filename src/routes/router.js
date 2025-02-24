import App from "../App";
import HomePage from "../components/Homepage/HomePage";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path: '/',
        element: < App/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path:'/foo',
                element: 'hi'
            }
        ]
    }
])