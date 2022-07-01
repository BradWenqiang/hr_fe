import Login from '../pages/login'
import Admin from '../pages/admin'
import Department from '../pages/department'
import { Navigate } from "react-router-dom"
import { Children } from 'react'


const element = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: 'department',
                element: <Department />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="login" />
    }
]
export default element