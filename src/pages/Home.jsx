import React from 'react';
import WidgetBlock from '../components/widget-block/WidgetBlock';
import WidgetRow from '../components/widget-row/WidgetRow';
import MainLayout from '../layouts/main_layout';

import BackToTopButton from '../components/back-to-top-button/BackToTopButton';
import WidgetCallback from '../components/widget-callback/WidgetCallback';
import About from '../components/About';
import Header from '../components/header/Header';
import Services from '../components/services/Services';
import Speciality from '../components/speciality/Speciality';
import Appointment from '../components/appointment/Appointment';
import FAQ from '../components/faq/FAQ';
import Contact from '../components/contact/Contact';

const Home = () => {
  return <MainLayout>
            
    <Header />

    <About />

    <Services />

    <Speciality />

    <Appointment />

    <FAQ />

    <Contact />

    <WidgetBlock extraClass="moto-bg-color3_3">
        <WidgetRow>

        </WidgetRow>
    </WidgetBlock>

    <BackToTopButton />

    <WidgetCallback phone1="+261 34 40 589 40" phone2="+261 34 41 589 41" phone3="+261 34 42 589 42" />
    
    </MainLayout>;
    
};

export default Home;
