import * as React from 'react';
import PropertyCard from './PropertyCard'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
    return (
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundImage: 'linear-gradient(#24c5f3, white)'
        }}
        >
            <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                    <PropertyCard property={propertyTemp[0]}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <PropertyCard property={propertyTemp[1]}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <PropertyCard property={propertyTemp[2]}/>
                </Grid>
                <Grid item xs={6} md={3}>
                    <PropertyCard property={propertyTemp[3]}/>
                </Grid>
            </Grid>
        </Box>
    );
}
