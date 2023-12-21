import * as React from 'react';
import "./PropertyTypeSelector.css"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';



export default function PropertyTypeSelector() {
  const [active, setActive] = useState('all');

  const handleChange = (event) => {
    setActive(event.currentTarget.value);
  };

  return (
    <ButtonGroup
      variant="contained"
      aria-label="button group"
      className="button-group"
      sx ={{backgroundColor: "#ffffff", border: "0px", ml: 4, mr: 4, mt: 2.5,}}
    >
      <Button
        value="all"
        onClick={handleChange}
        className="button"
        sx={{ backgroundColor: active === "all" ? "#000000" : "#333333" }}
      >
        All
      </Button>
      <Button
        value="forRent"
        onClick={handleChange}
        className="button"
        sx={{
          backgroundColor: active === "forRent" ? "#000000" : "#333333",
          border: "0px",
         }}
      >
        For Rent
      </Button >
      <Button
        value="forSale"
        onClick={handleChange}
        className="button"
        sx={{
          backgroundColor: active === "forSale" ? "#000000" : "#333333",
          border: "0px",
        }}
      >
        For Sale
      </Button>
    </ButtonGroup>
  );
}
