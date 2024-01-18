import React, { useState } from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (newPassword !== confirmNewPassword) {
            alert('New passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/change-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: user, oldPassword: currentPassword, newPassword })
            });

            if (response.ok) {
                alert('Password changed successfully');
                setCurrentPassword('');
                setNewPassword('');
                setConfirmNewPassword('');
                setShowPassword(false);
            } else {
                const data = await response.json();
                alert(data.message);
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred');
        }
    };

    return (
        <Box sx={{
            m: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <form onSubmit={handleSubmit}>
                <Box className="signup-box" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    maxWidth: "500px"
                }}
                >
                    <Typography variant="h4" sx={{ m: 2 }}>
                        Change Password
                    </Typography>
                    <input type={showPassword ? "text" : "password"} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Old Password" required />
                    <input type={showPassword ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" required />
                    <input type={showPassword ? "text" : "password"} value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} placeholder="Confirm New Password" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? "Hide Passwords" : "Show Passwords"}</button>
                    <button type="submit">Change Password</button>
                </Box>
            </form>
        </Box>
    )
}
