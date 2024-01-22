import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

function stripHTML(html) {
  if (!html) {
    return "";
  }
  var text = html.replace(/<br>/g, ' ').replace(/<\/?p>/g, ' ');
  var doc = new DOMParser().parseFromString(text, 'text/html');
  return doc.body.textContent || "";
}

export default function PropertyCard({ property }) {
  const descriptionText = stripHTML(property.description).substring(0, 120);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/property/${property._id}`);
    window.scrollTo(0, 0);
  }
  return (
    <Card
      onClick={handleClick}
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <CardMedia
        component="img"
        alt="Property Image"
        height="140"
        image={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload/v1704205644/${property.images[0]}.png`}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {property.name.length > 20 ? `${property.name.substring(0, 20)}...` : property.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descriptionText}...
        </Typography>
      </CardContent>
      <CardActions >
        <Link to={`/property/${property._id}`}>
          <Button size="small">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
