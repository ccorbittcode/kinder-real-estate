import React from "react";
import { useLocation } from 'react-router-dom';
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import PropertyCard from "./PropertyCard";
import Typography from "@mui/material/Typography";

export default function SearchResults() {
    const location = useLocation();
    console.log(location.state);
    const results = location.state.results;

    return (
        <Box sx={{
            flexGrow: 1,
            mt: 7,
            p: 3,
            backgroundImage: 'linear-gradient(#8ECAE6 , #24c5f3)'
        }}
        >
            <Typography variant="h3" sx={{textAlign: "center", mb: 3}}>
                Search Results
            </Typography>
            <Grid container spacing={2}>
                {
                    results.map((result, index) => {
                        return (
                            <Grid item xs={6} md={3}>
                                <PropertyCard key={index} property={result} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Box>
    );
}
