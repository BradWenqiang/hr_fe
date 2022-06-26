import Login from '../pages/login'
import Admin from '../pages/admin'
import { Navigate } from "react-router-dom"


const element = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <Admin />
    },
    {
        path: '*',
        element: <Navigate to="login" />
    }
]
export default element