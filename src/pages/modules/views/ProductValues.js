import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { ListItem } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="https://d1d5i0xjsb5dtw.cloudfront.net/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={2}>

          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://d1d5i0xjsb5dtw.cloudfront.net/mision_sitio.jpg"
                alt="suitcase"
                sx={{ height: 100 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                MISIÓN 
              </Typography>
              <Typography variant="h5" align="justify">
                  En FERSA S.A.S. somos una empresa dedicada a la comercialización y 
                  distribución de insumos industriales y de seguridad, que trabaja 
                  por brindar soluciones integrales para el beneficio de nuestros 
                  clientes y el desarrollo de la región; buscando satisfacer sus 
                  necesidades a través de la oferta de productos y servicios de la
                   mejor calidad, contamos con Proveedores comprometidos y de gran 
                   trayectoria en el mercado, un equipo humano calificado y la 
                   infraestructura adecuada para garantizar un buen servicio para los clientes.

              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={item}>
              <Box
                component="img"
                src="https://d1d5i0xjsb5dtw.cloudfront.net/vision_sitio.jpg"
                alt="graph"
                sx={{ height: 100 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                VISIÓN
              </Typography>
              <Typography variant="h5">
                
                  <ListItem>
                        <ListItemText>
                          <Typography variant="h6">
                          ORIENTACIÓN AL SERVICIO:
                          </Typography>
                          <Typography variant="h5">
                          Orientamos nuestras actividades al servicio, 
                          para el cual se enfocan todos los recursos en aras de satisfacer las 
                          necesidades de los clientes.
                          </Typography>
                        </ListItemText>
                  </ListItem>

                  <ListItem>
                        < ListItemText>
                          <Typography variant="h6">
                          CALIDAD: 
                          </Typography>
                          <Typography variant="h5">
                          Nos esmeramos por brindar productos y servicios de excelente 
                          calidad cumpliendo con los estándares internacionales lo que garantiza 
                          a los clientes seguridad y confianza
                          </Typography>
                        </ListItemText>
                  </ListItem>

                  <ListItem>
                        <ListItemText>
                         <Typography variant="h6">
                         CALIDEZ: 
                          </Typography>
                          <Typography variant="h5">
                          Ofrecemos un trato amable y cálido a todos nuestros clientes 
                          bajo las bases del respeto y la tolerancia
                          </Typography>
                        </ListItemText>
                  </ListItem>

                  <ListItem>
                        <ListItemText>
                          <Typography variant="h6">
                          PROFESIONALISMO: 
                          </Typography>
                          <Typography variant="h5">
                           Estamos capacitados y entrenados al servicio de nuestros clientes
                          </Typography>
                        </ListItemText>
                  </ListItem>

                  <ListItem>
                        <ListItemText>
                        <Typography variant="h6">
                          TRABAJO EN EQUIPO:
                          </Typography>
                          <Typography variant="h5">
                          Orientamos nuestras actividades al trabajo en equipo
                          </Typography>
                        </ListItemText>
                  </ListItem>

                  <ListItem>
                        <ListItemText>
                        <Typography variant="h6">
                          PUNTUALIDAD: 
                          </Typography>
                          <Typography variant="h5">
                          Asistimos a nuestros compromisos con premura respetando el tiempo de nuestros clientes ya sean citas o el envío de productos
                          </Typography>
                        </ListItemText>
                  </ListItem>

                  <ListItem>
                         <ListItemText>
                          <Typography variant="h6">
                          MEJORA CONTINUA: 
                          </Typography>
                        
                          <Typography variant="h5">
                          Orientamos nuestra organización al autocontrol de todas las actividades con el ánimo de mejorar permanentemente.
                          </Typography>
                        </ListItemText>
                  </ListItem>

                  {/* <ListItem>
                        <ListItemIcon><CheckRoundedIcon/></ListItemIcon>
                        <ListItemText><Typography variant="h5">{`Desarrollo del sistema`}</Typography></ListItemText>
                  </ListItem> */}
              </Typography>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
