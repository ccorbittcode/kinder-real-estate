import TextInput from "./TextInput";
import { Box, Grid } from "@mui/material";
import TextArea from "./TextArea";
import ImageUploader from "./ImageUploader";
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const propertyTypeOptions = [
//     { type: "Type", value: "Residential", label: "Residential" },
//     { type: "Type", value: "Commercial", label: "Commercial" },
//     { type: "Type", value: "Land", label: "Land" },
//     { type: "Type", value: "Multi-Family", label: "Multi-Family" },
//     { type: "Type", value: "Other", label: "Other" },
// ];


export default function PropertyAddForm() {
    const [loading, setLoading] = useState(false);
    //set publicIds for image upload
    const [publicIds, setPublicIds] = useState([]);
    const [form, setForm] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        propertyType: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        squareFeet: "",
        lotSize: "",
        yearBuilt: "",
        description: "",
        images: publicIds,
    });

    const navigate = useNavigate();
    // These methods will update the state properties.
    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        setForm(form => ({ ...form, images: publicIds }));
    }, [publicIds]);

    // This function will handle the submission.
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (loading) {
            return;
        }
        try {
            const formData = {
                ...form,
                images: publicIds, // Use the current value of publicIds
            };
            const response = await fetch('http://localhost:5000/properties/add', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            setForm({
                name: "",
                address: "",
                city: "",
                state: "",
                postalCode: "",
                propertyType: "",
                price: "",
                bedrooms: "",
                bathrooms: "",
                squareFeet: "",
                lotSize: "",
                yearBuilt: "",
                description: "",
                images: publicIds,
            });
            setPublicIds([]);
            navigate("/dashboard");
        } catch (error) {
            window.alert(error);
        }
    };
    return (
        <Box className="property-form-box">
            <form onSubmit={handleSubmit} id="property-add-form">
                <Grid container spacing={1}>
                    <Grid item xs={8} md={6} lg={6}>
                        <TextInput
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Property Name"
                        />
                    </Grid>
                    <Grid item xs={4} md={6} lg={6}></Grid>
                    <Grid item xs={11} md={8} lg={8}>
                        <TextInput
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Address"
                        />
                    </Grid>
                    <Grid item xs={1} md={4} lg={4}></Grid>
                    <Grid item xs={5} md={4} lg={3}>
                        <TextInput
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            className="form-input"
                            labelText="City"
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={2}>
                        <TextInput
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            className="form-input"
                            labelText="State/Province"
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={2}>
                        <TextInput
                            name="postalCode"
                            value={form.postalCode}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Postal Code"
                        />
                    </Grid>
                    <Grid item xs={1} md={2} lg={5}></Grid>
                    <Grid item xs={8} md={4} lg={4}>
                        <TextInput
                            name="propertyType"
                            value={form.propertyType}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Property Type (commercial, residential, etc.)"
                        />
                    </Grid>
                    <Grid item xs={4} md={8} lg={8}></Grid>
                    <Grid item xs={11} md={6} lg={4}>
                        <TextInput
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Price"
                        />
                    </Grid>
                    <Grid item xs={1} md={6} lg={8}></Grid>
                    <Grid item xs={3} md={3} lg={2}>
                        <TextInput
                            name="bedrooms"
                            value={form.bedrooms}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Bedrooms"
                        />
                    </Grid>
                    <Grid item xs={3} md={3} lg={2}>
                        <TextInput
                            name="bathrooms"
                            value={form.bathrooms}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Bathrooms"
                        />
                    </Grid>
                    <Grid item xs={6} md={6} lg={8}></Grid>
                    <Grid item xs={3} md={2} lg={2}>
                        <TextInput
                            name="squareFeet"
                            value={form.squareFeet}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Square Feet"
                        />
                    </Grid>
                    <Grid item xs={3} md={2} lg={2}>
                        <TextInput
                            name="lotSize"
                            value={form.lotSize}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Lot Size"
                        />
                    </Grid>
                    <Grid item xs={3} md={2} lg={2}>
                        <TextInput
                            name="yearBuilt"
                            value={form.yearBuilt}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Year Built"
                        />
                    </Grid>
                    <Grid item xs={11} md={8} lg={8}>
                        <TextArea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Description"
                        />
                    </Grid>
                    <Grid item xs={1} md={4} lg={4}></Grid>
                    <Grid item xs={11} md={8} lg={6}>
                        {/* <TextInput
                            name="imageUrl"
                            value={form.imageUrl}
                            onChange={handleChange}
                            className="form-input"
                            labelText="Image URL"
                        /> */}
                        <ImageUploader setPublicIds={setPublicIds} setLoading={setLoading} publicIds={publicIds}/>
                    </Grid>
                    <Grid item xs={1} md={4} lg={6}></Grid>
                    <Grid item xs={3} md={2} lg={2}>
                        <Button
                            sx={{ m: 1, p: 2, width: '100%' }}
                            variant="contained"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    )
}
