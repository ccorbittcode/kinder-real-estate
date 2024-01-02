import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
export default function PropertyEditForm() {
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
        imageUrl: "",
        records: [],
    });
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }
            setForm(record);
        }
        fetchData();
        return;
    }, [params.id, navigate]);
    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    async function onSubmit(e) {
        e.preventDefault();
        const editedPerson = {
            name: form.name,
            position: form.position,
            level: form.level,
        };
        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:5000/update/${params.id}`, {
            method: "POST",
            body: JSON.stringify(editedPerson),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        navigate("/");
    }
    // This following section will display the form that takes input from the user to update the data.
    return (
        <Box className="property-form-box">
        <form action={onSubmit}>
            <Grid container spacing={1}>
                <Grid item xs={8} md={6} lg={6}>
                    <TextInput className="form-input" labelText="Property Name" />
                </Grid>
                <Grid item xs={4} md={6} lg={6}></Grid>
                <Grid item xs={11} md={8} lg={8}>
                    <TextInput className="form-input" labelText="Address" />
                </Grid>
                <Grid item xs={1} md={4} lg={4}></Grid>
                <Grid item xs={5} md={4} lg={3}>
                    <TextInput className="form-input" labelText="City" />
                </Grid>
                <Grid item xs={3} md={3} lg={2}>
                    <TextInput className="form-input" labelText="State/Province" />
                </Grid>
                <Grid item xs={3} md={3} lg={2}>
                    <TextInput className="form-input" labelText="Postal Code" />
                </Grid>
                <Grid item xs={1} md={2} lg={5}></Grid>
                <Grid item xs={8} md={4} lg={4}>
                    <SelectInput className="form-input" options={propertyTypeOptions} />
                </Grid>
                <Grid item xs={4} md={8} lg={8}></Grid>
                <Grid item xs={11} md={6} lg={4}>
                    <TextInput className="form-input" labelText="Price" />
                </Grid>
                <Grid item xs={1} md={6} lg={8}></Grid>
                <Grid item xs={3} md={3} lg={2}>
                    <TextInput className="form-input" labelText="Bedrooms" />
                </Grid>
                <Grid item xs={3} md={3} lg={2}>
                    <TextInput className="form-input" labelText="Bathrooms" />
                </Grid>
                <Grid item xs={6} md={6} lg={8}></Grid>
                <Grid item xs={3} md={2} lg={2}>
                    <TextInput className="form-input" labelText="Square Feet" />
                </Grid>
                <Grid item xs={3} md={2} lg={2}>
                    <TextInput className="form-input" labelText="Lot Size" />
                </Grid>
                <Grid item xs={3} md={2} lg={2}>
                    <TextInput className="form-input" labelText="Year Built" />
                </Grid>
                <Grid item xs={11} md={8} lg={8}>
                    <TextArea className="form-input" labelText="Description" />
                </Grid>
                <Grid item xs={1} md={4} lg={4}></Grid>
                <Grid item xs={11} md={8} lg={6}>
                    <TextInput className="form-input" labelText="Image URL" />
                </Grid>
                <Grid item xs={1} md={4} lg={6}></Grid>
                <Grid item xs={3} md={2} lg={2}>
                    <Button
                        sx={{ m: 1, p: 2, width: '100%' }} variant="contained"
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    </Box>
    );
}

