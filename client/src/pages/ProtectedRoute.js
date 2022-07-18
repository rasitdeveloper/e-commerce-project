import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"

function ProtectedRoute({ admin }) {
    const { loggedIn, user } = useAuth();

    return (
        // First-) Redirect to login page if not logged in.
        // Second-) Redirect to product page if you want to admin page and user role is not admin.
        loggedIn ? (admin==="true" && user.role !== "admin" ? <Navigate to="/" /> : <Outlet />) : <Navigate to='/login'/>
        
    )
}

export default ProtectedRoute