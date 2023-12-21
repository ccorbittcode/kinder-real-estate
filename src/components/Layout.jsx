import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"
import Box from '@mui/material/Box';

export default function Layout() {
    return (
        <Box sx={{
            m: 0,
            display: 'flex',
            flexDirection: 'column',
            minHeight: '97.5vh'
        }}
        >
            <Navbar />
            <Outlet className="outlet" />
            <Footer />
        </Box>
    )
}
