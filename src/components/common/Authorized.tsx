import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Authorized = ({children} : any) => {
    const navigate = useNavigate()

    useEffect(() => {
        const username = localStorage.getItem("username");
        if (!username) {
            navigate('/login');
        }
    })

    return children;
}

export default Authorized;