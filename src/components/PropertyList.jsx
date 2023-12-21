import React from 'react'
import PropertyCard from './PropertyCard'
import { useState, useEffect, useRef } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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

export default function PropertyList() {
    const [properties, setProperties] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);

    const elementRef = useRef(null);



    // function onIntersection(entries) {
    //     const firstEntry = entries[0];
    //     if (firstEntry.isIntersecting && hasMore) {
    //         fetchMoreProperties();
    //     }
    // }

    // useEffect(() => {
    //     const observer = new IntersectionObserver(onIntersection);
    //     if (observer && elementRef.current) {
    //         observer.observe(elementRef.current);
    //     }

    //     return () => {
    //         if (observer) {
    //             observer.disconnect();
    //         }
    //     }
    // }, [properties]);

    useEffect(() => {
        //temp property populate
        setProperties(propertyTemp);
    }, []);

    // const fetchMoreProperties = async () => {
    //     //fetch the next batch of properties
    //     const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`);
    //     const data = await response.json();
    //     if (data.properties.length == 0) {
    //         setHasMore(false);
    //     } else {
    //         setProperties(prevProducts => [...prevProducts, ...data.properties]);
    //         setPage(prevPage => prevPage + 1);
    //     }
    // }

    return (
        <>
        <Box sx={{
            flexGrow: 1,
            p: 3,
            backgroundImage: 'linear-gradient(#8ECAE6 , #24c5f3)'
        }}
        >
            <Grid container spacing={2}>
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
            {hasMore &&
                <div
                    ref={elementRef}
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Loading...
                </div>
            }
        </>
    )
}
