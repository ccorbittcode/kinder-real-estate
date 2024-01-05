import React from 'react'
import ContactForm from '../components/ContactForm'
import { Box } from '@mui/material'
import './Contact.css'

export default function Contact() {
    return (
        <Box sx={{mt:15}}>
            <h1>Contact Us</h1>
            <p>Send us your info and we'll get in touch with you about your property needs.</p>
            <ContactForm />
        </Box>
    )
}
