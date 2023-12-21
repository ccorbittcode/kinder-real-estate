import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextArea({ labelText }) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%', backgroundColor: 'white', borderRadius: '5px'},
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                id="text-area"
                label={labelText}
                multiline
                rows={4}
                defaultValue=""
            />
        </Box>
    )
}
