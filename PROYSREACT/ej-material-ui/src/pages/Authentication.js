import React from 'react'
import Grid from '@mui/material/Grid';
import CommonButton from '../components/common/CommonButton/CommonButton';
import  { buttonStyles } from '../components/common/CommonButton/buttonStyles';

const Authentication = () => {
    

    return (
        <Grid item xs={8}>
            <h2>This is authentication page.</h2>
            <CommonButton
                sx={buttonStyles}
                variant="contained"
            >
                Add user
            </CommonButton>
            <CommonButton
                sx={buttonStyles}
                variant="outlined"
            >
                Add user
            </CommonButton>
        </Grid>
    )
}

export default Authentication