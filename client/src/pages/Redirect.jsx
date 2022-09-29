import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Redirect(){
    const {user} = useAuth();
    return(
            !user?
            <Navigate to='/login'/>
            :<Navigate to="/h"/>
    )
}