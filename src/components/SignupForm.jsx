import React, { useState } from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import './SignupForm.css';

function SignupForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                // Redirect the user to the login page, or wherever you want
                window.location.href = '/login';
            } else {
                // Handle signup failure
                alert('Signup failed');
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
                        Register a new Realtor
                    </Typography>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </Box>
            </form>
        </Box>
    );
}

export default SignupForm;
