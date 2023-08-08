import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Container } from '@mui/material';


  const images = [
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_1.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_2.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_3.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_4.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_5.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_6.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_7.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_8.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_9.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_10.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_11.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_12.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_13.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_14.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_15.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_16.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_17.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_18.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_19.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_20.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_21.jpg",
    },
    {
      src: "https://d1d5i0xjsb5dtw.cloudfront.net/ferinsumos/imagen_22.jpg",
    },
  ];
  


export default function Productos() {
    return (
<Container maxWidth>
    <Grid container spacing = {3}>
        {images.map((image) => (
            <Grid key = {image.label} item xs = {12} sm={12} md={4}>
                <Card 
                    raised
                    sx={{ 
                        maxWidth: 600,
                        margin: "0 auto",
                        padding: "0.1em",
                    }}>
                    <CardMedia
                        component="img"
                        alt={image.label}
                        height="600"
                        image={image.src}
                        sx={{ padding: "1em 1em 0 1em", objectFit: "fill" }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {image.label}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
</Container>
    )
}