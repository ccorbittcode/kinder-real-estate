import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function PopUpSnackbar({ message, open, handleClose }) {

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </div>
    );
}


// const [open, setOpen] = React.useState(false);

//     const handleClick = () => {
//         setOpen(true);
//     };

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpen(false);
//     };
