import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import './LoginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });

            if (response.ok) {
                // Redirect the user to the home page, or wherever you want
                navigate('/dashboard');
            } else {
                // Handle login failure
                alert('Login failed');
            }
        } catch (error) {
            // Handle error
            console.error(error);
        }
    };

    return (
        <Box sx={{ m: 10 }}>
            <form onSubmit={handleSubmit}>
                <Box className="signup-box" sx={{
                    m: 10,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    <Typography variant="h4" sx={{ m: 2 }}>
                        Login
                    </Typography>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <button type="submit">Log In</button>
                </Box>
            </form>
        </Box>
    );
}

export default LoginForm;
