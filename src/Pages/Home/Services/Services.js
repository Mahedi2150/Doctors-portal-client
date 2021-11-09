import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
const services = [
    {
        name: "Fluoride Treatment",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam aspernatur dolor eius et, dolorum corporis autem perferendis repellat, magni asperiores, ullam molestias molestiae voluptates! Rem quos illo maiores omnis cumque aspernatur nihil aliquid velit minus accusantium, provident consectetur nam blanditiis quas aliquam? Excepturi facilis assumenda illo reprehenderit? Sequi, deleniti.",
        img: fluoride
    },
    {
        name: "Cavety Filling",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam aspernatur dolor eius et, dolorum corporis autem perferendis repellat, magni asperiores, ullam molestias molestiae voluptates! Rem quos illo maiores omnis cumque aspernatur nihil aliquid velit minus accusantium, provident consectetur nam blanditiis quas aliquam? Excepturi facilis assumenda illo reprehenderit? Sequi, deleniti.",
        img: cavity
    },
    {
        name: "Teeth whitening",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veniam aspernatur dolor eius et, dolorum corporis autem perferendis repellat, magni asperiores, ullam molestias molestiae voluptates! Rem quos illo maiores omnis cumque aspernatur nihil aliquid velit minus accusantium, provident consectetur nam blanditiis quas aliquam? Excepturi facilis assumenda illo reprehenderit? Sequi, deleniti.",
        img: whitening
    }
]
const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h5" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 500, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Container>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <Service
                                key={service.name}
                                service={service}
                            ></Service>)
                        }
                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default Services;