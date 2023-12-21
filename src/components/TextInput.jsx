import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextInput({labelText}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          m: 1,
          backgroundColor: 'white',
          borderRadius: '5px',
          width: '100%'
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="text-input"
        label={labelText}
        variant="outlined"
        sx={{
          '& > :not(style)': {
          }
        }}
      />
    </Box>
  );
}
