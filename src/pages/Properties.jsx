import * as React from 'react'
import './Properties.css'
import PropertyList from '../components/PropertyList'
import { Typography } from '@mui/material'

export default function Properties() {
    return (
        <div className='properties-main'>
            <Typography variant="h4" sx={{ m: 2, textAlign: "center" }}>
                Current Listings
            </Typography>
           <PropertyList />
        </div>
    )
}
