import * as React from "react";
import ImageSlider from "../components/ImageSlider";
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import SearchForm from "../components/SearchForm";
import PropertyCardStack from "../components/PropertyCardStack";
import './Home.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function Home() {
    return (
        <Box className='home'>
            <ImageSlider />
            <Box className='homeheader'>
                <Typography variant="h3">
                    Connecting you with your future
                </Typography>
                <Box className="formbox">
                    <SearchForm />
                </Box>
            </Box>
            <PropertyCardStack />
        </Box>
    )
}
