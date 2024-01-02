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
                <Grid container spacing="1">
                    <Grid item xs={12} md={12} lg={8}>
                        <Box>
                            <h1>{property.name}</h1>
                            <h2>{property.price}</h2>
                            <ImageCarousel property={property} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>

                        <Box
                            sx={{
                                border: "1px solid black",
                                borderRadius: 2,
                                backgroundColor: "white",
                                m: 1,
                                p: 2,
                            }}
                        >
                            <Grid
                                container spacing="1"
                                className="property-details-box"
                                sx={{
                                    textAlign: "center",
                                }}
                            >
                                <Grid item xs={12} md={12} lg={12}>
                                    <h3>Property Details</h3>
                                </Grid>
                                <Grid item xs={6} md={6} lg={6}>
                                    <p><b>Property Type:</b> {property.propertyType}</p>
                                    <p><b>Address:</b> {property.address}</p>
                                    <p><b>City:</b> {property.city}</p>
                                    <p><b>State:</b> {property.state} </p>
                                    <p><b>Postal Code:</b> {property.postalCode}</p>
                                </Grid>
                                <Grid item xs={6} md={6} lg={6}>
                                    <p><b>Bedrooms:</b> {property.bedrooms}</p>
                                    <p><b>Bathrooms:</b> {property.bathrooms}</p>
                                    <p><b>House Size:</b> {property.squareFeet}</p>
                                    <p><b>Lot Size:</b> {property.lotSize}</p>
                                    <p><b>Year Built:</b> {property.yearBuilt}</p>
                                </Grid>
                            </Grid>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <Box
                            sx={{
                                border: "1px solid black",
                                borderRadius: 2,
                                backgroundColor: "white",
                                m: 1,
                                p: 2,
                            }}
                        >
                            <h3>Description</h3>
                            <p>{property.description}</p>

                        </Box>
                    </Grid>
                </Grid>
            )}
        </div>
    )
}
