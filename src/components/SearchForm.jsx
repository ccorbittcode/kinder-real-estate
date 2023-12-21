import * as React from "react";
import PropertyTypeSelector from "./PropertyTypeSelector";
import { Box } from "@mui/material";
import TextInput from "./TextInput";
import "./SearchForm.css"
import Grid from "@mui/material/Grid";
import SelectInput from "./SelectInput";
import Button from '@mui/material/Button';

const priceOptions = [
    { type: "Price", value: 100000, label: "$100,000" },
    { type: "Price", value: 250000, label: "$250,000" },
    { type: "Price", value: 500000, label: "$500,000" },
    { type: "Price", value: 750000, label: "$750,000" },
    { type: "Price", value: 1000000, label: "$1,000,000" },
    { type: "Price", value: 5000000, label: "$5,000,000" },
    { type: "Price", value: 10000000, label: "$10,000,000" },
    { type: "Price", value: 50000000, label: "$50,000,000" },
    { type: "Price", value: 100000000, label: "$100,000,000" },
]

const bedOptions = [
    { type: "Bedrooms", value: 1, label: "1" },
    { type: "Bedrooms", value: 2, label: "2" },
    { type: "Bedrooms", value: 3, label: "3" },
    { type: "Bedrooms", value: 4, label: "4" },
    { type: "Bedrooms", value: 5, label: "5" },
    { type: "Bedrooms", value: 6, label: "6" },
    { type: "Bedrooms", value: 7, label: "7" },
    { type: "Bedrooms", value: 8, label: "8" },
    { type: "Bedrooms", value: 9, label: "9" },
    { type: "Bedrooms", value: 10, label: "10" },
]

const bathOptions = [
    { type: "Bathrooms", value: 1, label: "1" },
    { type: "Bathrooms", value: 2, label: "2" },
    { type: "Bathrooms", value: 3, label: "3" },
    { type: "Bathrooms", value: 4, label: "4" },
    { type: "Bathrooms", value: 5, label: "5" },
    { type: "Bathrooms", value: 6, label: "6" },
    { type: "Bathrooms", value: 7, label: "7" },
    { type: "Bathrooms", value: 8, label: "8" },
    { type: "Bathrooms", value: 9, label: "9" },
    { type: "Bathrooms", value: 10, label: "10" },
]

const cityOptions = [
    { type: "City", value: "Akumal", label: "Akumal" },
    { type: "City", value: "Cancun", label: "Cancun" },
    { type: "City", value: "Paamul", label: "Paamul" },
    { type: "City", value: "Playa del Carmen", label: "Playa del Carmen" },
    { type: "City", value: "Puerto Aventuras", label: "Puerto Aventuras" },
    { type: "City", value: "Puerto Morelos", label: "Puerto Morelos" },
    { type: "City", value: "Tulum", label: "Tulum" },

]


export default function SearchForm() {
    return (
        <div className="searchform" >
            <form>
                <PropertyTypeSelector />
                <Box sx={{ m: 2, p: 1.5 }}>
                    <Grid container spacing={1}>
                        <Grid item xs={6} md={4}>
                            <SelectInput options={cityOptions} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <SelectInput options={bedOptions} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <SelectInput options={bathOptions} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <SelectInput options={priceOptions} />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <TextInput labelText="Keyword" />
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Button
                                sx={{ m: 1, p: 2, width: '100%' }} variant="contained"
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </div>
    )
}
