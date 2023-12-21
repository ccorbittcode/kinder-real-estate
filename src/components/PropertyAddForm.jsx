import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import { Box, Grid } from "@mui/material";
import TextArea from "./TextArea";
import Button from '@mui/material/Button';

const propertyTypeOptions = [
    { type: "Type", value: "Residential", label: "Residential" },
    { type: "Type", value: "Commercial", label: "Commercial" },
    { type: "Type", value: "Land", label: "Land" },
    { type: "Type", value: "Multi-Family", label: "Multi-Family" },
    { type: "Type", value: "Other", label: "Other" },
];


export default function PropertyAddForm() {
    return (
        <Box className="property-form-box">
            <form action="">
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
    )
}
