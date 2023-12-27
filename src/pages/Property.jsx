import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './Property.css';
import ImageCarousel from '../components/ImageCarousel';


export default function Property() {
    const [property, setProperty] = useState(null);
    const { id } = useParams();
    // This method fetches the records from the database.
    useEffect(() => {
        async function getProperty() {
            const response = await fetch(`http://localhost:5000/property/${id}`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const property = await response.json();
            setProperty(property); // Set the fetched property
        }
        getProperty();
    }, [id]);

    return (
        <div className="property-main">
            {property && (
                <Box>
                    <h2>{property.name}</h2>
                    <ImageCarousel />
                    <p>{property.description}</p>

                </Box>
            )}
        </div>
    )
}
