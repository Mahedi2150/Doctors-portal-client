import React from 'react';
import Grid from '@mui/material/Grid';
import chair from "../../../images/chair.png"
import bg from "../../../images/bg.png"
import { Button, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';




const bannerBg = {
    background: `url(${bg})`,

}

const verticalCentre = {
    display: 'flex',
    alignItems: "center",
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...verticalCentre, textAlign: "left" }} item xs={12} md={6}>
                    <Box>
                        <Typography variant="h3">
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant="h6" sx={{ my: 3, fontSize: 13, color: "gray", fontWeight: 300 }}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum temporibus maiores illo minima sit corrupti, quae consequuntur suscipit! Error, veniam?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5ce7ed" }}>Get Appoinyment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCentre}>
                    <img style={{ width: "350px " }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;