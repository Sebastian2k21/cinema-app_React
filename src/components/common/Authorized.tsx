import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

const Authorized = ({children} : any) => {
    const navigate = useNavigate()//useNavigate() - element z react-router-dom, który pozwala na nawigację wewnątrz aplikacji na podstawie routes zdefiniowanych w komponencie content

    useEffect(() => {
        const username = localStorage.getItem("username");
        if (!username) {
            navigate('/login');
        }
    })

    return children;
}

export default Authorized;