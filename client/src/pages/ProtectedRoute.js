import {Navigate, Outlet} from 'react-router-dom'
import { useAuth } from "../contexts/AuthContext"

function ProtectedRoute({ element:Element, ...rest}) {
    const { loggedIn } = useAuth();
    return (
        // If authorized, return an outlet that will render child elements
        // If not, return element that will navigate to login page
        loggedIn ? <Outlet/> : <Navigate to='/login'/>
      )
}

export default ProtectedRoute