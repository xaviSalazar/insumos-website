import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
        ¿Necesitas más información acerca de nosotros?
        <br/>
        <br/>
        <a href="https://raw.githubusercontent.com/xaviSalazar/insumos-website/main/public/FERSA_CATALOGO.pdf" download>
          descargar catalogo_1
        </a>
        <br/>
        <br/>
        <a href="https://github.com/xaviSalazar/insumos-website/raw/main/public/FERSA_FERRETERIA.pdf" download>
          descargar catalogo_2
        </a>
        </Typography>
        
      </Button>
      <Typography variant="h4" sx={{ my: 3 }}>
        Contactanos al !
      </Typography>
      <Typography variant="h5" sx={{ my: 3 }}>
        (+593) 987447381 | ventas@fersainsumos.com
      </Typography>
      {/* <Box
        component="img"
        src="/static/themes/onepirate/productBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      /> */}
    </Container>
  );
}

export default ProductSmokingHero;
