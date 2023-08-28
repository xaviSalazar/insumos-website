import * as React from 'react';
import ProductCategories from './modules/views/ProductCategories';
import ProductSmokingHero from './modules/views/ProductSmokingHero';
import ProductHero from './modules/views/ProductHero';
import ProductValues from './modules/views/ProductValues';
import withRoot from './modules/withRoot';

import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

function Index() {

  return (
      <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      <ProductSmokingHero />
      <WhatsAppWidget
            message={`Hola! 👋🏼 \n\nEn que podemos ayudarle?`}
            phoneNumber="593987447381"
        />
      </React.Fragment>  
  );
  
}

export default withRoot(Index);
