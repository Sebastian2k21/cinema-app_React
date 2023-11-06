import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/UserServices';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../common/UserContext';


const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const user = getUser(username);
        if(user == null) {
            console.error('Błąd logowania. Nieprawidłowa nazwa użytkownika lub hasło.');
            toast(`Błąd logowania. Nieprawidłowa nazwa użytkownika lub hasło.`,
            {
                icon: '😪',
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            });
            return;
        }
    
        const savedPassword = user.password;
    
        if (savedPassword && savedPassword === password) {
            console.log('Logowanie zakończone sukcesem!');
            toast(`Sukces! Zalogowano jako ${username}`,
            {
                icon: '👏',
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            });
            navigate('/tickets')
            localStorage.setItem('username', username);
            userContext.setUser(username);
        } else {
            toast(`Błąd logowania. Nieprawidłowa nazwa użytkownika lub hasło.`,
            {
                icon: '😪',
                style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
                },
            });
            console.error('Błąd logowania. Nieprawidłowa nazwa użytkownika lub hasło.');
        }
    }

    return (
        
        <div className="login-box">
     <form onSubmit={handleSubmit} className="login-box">
        <h2>Logowanie</h2>

        <div className="user-box">
            <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="username">Nazwa użytkownika:</label>
        </div>

        <div className="user-box">
            <input 
                type="password" 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Hasło:</label>
        </div>
        <br/>
        <button type="submit" className="button">Zaloguj się</button>
        
        <Link to="/register" className="button">Nie masz konta? Zarejestruj się!</Link>
    </form>

</div>

    );
}

export default Login;
