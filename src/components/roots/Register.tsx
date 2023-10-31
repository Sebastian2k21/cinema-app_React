import React, { useState } from 'react';
import { addUser, getUser } from '../../services/UserServices';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            console.error('Hasła nie są takie same!');
            toast(`Hasła nie są takie same!`,
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

        // Sprawdzanie, czy użytkownik o danej nazwie użytkownika już istnieje
        const existingUser = getUser(username);
        if (existingUser) {
            console.error('Nazwa użytkownika jest już zajęta!');
            toast(`Nazwa użytkownika jest już zajęta!`,
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

        // Zapisywanie użytkownika w local storage
        addUser({username, password});
        console.log(`Zarejestrowano użytkownika: ${username}`);
        toast(`Zarejestrowano użytkownika: ${username}`,
        {
            icon: '🥰',
            style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            },
        }
        );
        navigate('/login');
    }

    return (
        <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
            <h1>Rejestracja</h1>
    
            <div className="input-group">
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder=" "
                />
                <label htmlFor="username">Nazwa użytkownika:</label>
            </div>
    
            <div className="input-group">
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder=" "
                />
                <label htmlFor="password">Hasło:</label>
            </div>
    
            <div className="input-group">
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder=" "
                />
                <label htmlFor="confirmPassword">Potwierdź hasło:</label>
            </div>
    
            <button type="submit">Zarejestruj się</button>
        </form>
    </div>
    );
}

export default Register;
