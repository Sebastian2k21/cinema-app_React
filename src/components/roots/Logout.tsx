import { useContext, useEffect } from "react";
import { UserContext } from "../common/UserContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem("username");
        setUser(null);
        navigate('/login');
    }, [])

    return null;
 }
export default Logout;