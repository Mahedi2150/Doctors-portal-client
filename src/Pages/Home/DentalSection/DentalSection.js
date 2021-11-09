import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatment from "../../../images/treatment.png"
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
const DentalSection = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, mt: 8 }} >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: 450 }} src={treatment} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} style={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        textAlign: "left",
                        alignItems: "center",
                        height: 400
                    }}>
                        <Box >
                            <Typography variant='h3' sx={{ my: 5 }} style={{ fontWeight: 400 }}>
                                Exceptional Dental <br />Care, on Your Terms
                            </Typography>
                            <Typography sx={{ mb: 5 }} variant='h6' color="gray">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque alias odit ipsa similique assumenda amet, eaque fugit error quidem porro facilis, non mollitia tempore? Quisquam ex soluta, excepturi numquam harum maxime necessitatibus fugit beatae nam atque assumenda labore, deserunt reprehenderit dolorem. Rerum dignissimos dicta harum exercitationem illo voluptatum ipsam?
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: "#5ce7ed" }}>Learn More</Button>

                        </Box>
                    </Grid>

                </Grid>
            </Box>

        </div>
    );
};

export default DentalSection;