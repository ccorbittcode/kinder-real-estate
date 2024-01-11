import React from 'react'
import PropertyCard from './PropertyCard'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function PropertyList() {
    const [properties, setProperties] = useState([]);

    // This method fetches the records from the database.
    useEffect(() => {
        async function getProperties() {
            const response = await fetch(`http://localhost:5000/properties/`);
            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const properties = await response.json();
            setProperties(properties);
        }
        getProperties();
        return;
    }, [properties.length]);
    // This method will delete a property
    async function deleteProperty(id) {
        await fetch(`http://localhost:5000/${id}`, {
            method: "DELETE"
        });
        const newProperties = properties.filter((el) => el._id !== id);
        setProperties(newProperties);
    }

    return (
        <>
            <Box sx={{
                flexGrow: 1,
                p: 3,
                backgroundImage: 'linear-gradient(#8ECAE6 , #24c5f3)'
            }}
            >
                <Grid container spacing={2}>
                    // mapping over the properties array and displaying each property
                    {
                        properties.map((property, index) => {
                            return (
                                <Grid item xs={6} md={3}>
                                    <PropertyCard key={index} property={property} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}
