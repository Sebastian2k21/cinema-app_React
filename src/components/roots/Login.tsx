import React, { useState } from 'react';


const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Tu dodaj logikę logowania, np. wysyłanie danych do serwera
        console.log(`Próba logowania z nazwą użytkownika: ${username} i hasłem: ${password}`);
    }

    return (
        
        <div className="login-container">

    
    <form onSubmit={handleSubmit} className="login-form">
        <h1>Logowanie</h1>
        <label htmlFor="username">Nazwa użytkownika:</label>
        <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Hasło:</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Zaloguj się</button>
    </form>
</div>

    );
}

export default Login;
