import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import Box from '@mui/material/Box';
import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Layout() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/auth/check');
                if (response.ok) {
                    const data = await response.json();
                    if (data.isAuthenticated) {
                        setUser({});
                    } else {
                        setUser(null);
                    }
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Failed to check if user is logged in:', error);
                setUser(null);
            }
        };

        checkUserLoggedIn();
    }, []);

    return (
        <Box sx={{
            m: 0,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '97.5vh'
        }}
        >
            <Navbar user={user} setUser={setUser} />
            <UserContext.Provider value={{ user, setUser }}>
                <Outlet className="outlet" />
            </UserContext.Provider>
            <Footer />
        </Box>
    )
}
