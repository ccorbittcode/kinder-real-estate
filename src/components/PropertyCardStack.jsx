import * as React from 'react';
import PropertyCard from './PropertyCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react' 

const propertyTemp = [
    {
        name: 'Property 1',
        description: 'This is property 1',
        image: 'https://dummyimage.com/300x200/000/fff'
    },
    {
        name: 'Property 2',
        description: 'This is property 2',
        image: 'https://dummyimage.com/300x200/000/fff'
    },
    {
        name: 'Property 3',
        description: 'This is property 3',
        image: 'https://dummyimage.com/300x200/000/fff'
    },
    {
        name: 'Property 4',
        description: 'This is property 4',
        image: 'https://dummyimage.com/300x200/000/fff'
    },
    {
        name: 'Property 5',
        description: 'This is property 5',
        image: 'https://dummyimage.com/300x200/000/fff'
    },
    {
        name: 'Property 6',
        description: 'This is property 6',
        image: 'https://dummyimage.com/300x200/000/fff'
    },
    {
        name: 'Property 7',
        description: 'This is property 7',
        image: 'https://dummyimage.com/300x200/000/fff'
    },

]

export default function PropertyCardStack() {
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
    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundImage: 'linear-gradient(#24c5f3, white)'
        }}
        >
            <Grid container spacing={2}>
            {
                        properties.slice(0,3).map((property, index) => {
                            return (
                                <Grid item xs={6} md={3}>
                                    <PropertyCard key={index} property={property} />
                                </Grid>
                            )
                        })
                    }
            </Grid>
        </Box>
    );
}
