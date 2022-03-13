import React from 'react';
import { InlineWidget } from 'react-calendly';
import WidgetBlock from '../components/widget-block/WidgetBlock';
import WidgetContainer from '../components/widget-container/WidgetContainer';
import WidgetRow from '../components/widget-row/WidgetRow';
import WidgetRowColumn from '../components/widget-row__column/WidgetRowColumn';
import WidgetSpacer from '../components/widget-spacer/WidgetSpacer';
import MainLayout from '../layouts/main_layout';


import HomeAppointment from '../assets/images/home-appointment.png';
import HomeAppointmentBg1 from '../assets/images/home-appointment-bg1.png';
import HomeDoctor from '../assets/images/home-doctor.jpg';
import HomeDivider from '../assets/images/home-divider.png';
import BackToTopButton from '../components/back-to-top-button/BackToTopButton';
import WidgetCallback from '../components/widget-callback/WidgetCallback';
import WidgetImage from '../components/widget-image/WidgetImage';
import WidgetText from '../components/widget-text/WidgetText';
import WidgetButton from '../components/widget-button/WidgetButton';
import WidgetAccordion from '../components/widget-accordion/WidgetAccordion';
import WidgetAccordionItem from '../components/widget-accordion-item/WidgetAccordionItem';
import WidgetDivider from '../components/widget-divider/WidgetDivider';
import About from '../components/About';
import Header from '../components/header/Header';
import Services from '../components/services/Services';
import Speciality from '../components/speciality/Speciality';

const Home = () => {
  return <>
    <MainLayout>
            
    <Header />

    <About />

    <Services />

    <Speciality />

    <WidgetBlock top="large" dataSpacing="laaa" anchorName="appointment">
        <WidgetRow classes="row-fixed"
        >
            <WidgetRowColumn classes="col-sm-2"></WidgetRowColumn>
            <WidgetRowColumn classes="col-sm-8">
                <WidgetContainer containerContentId="5d15efcc7" dataBgPosition="top">
                    <WidgetRow
                        styles={{
                              backgroundImage: `url(${HomeAppointment})`,
                              backgroundPosition: 'left top',
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'contain'
                            }}
                        dataBgImage="/src/assets/images/home-appointment.png"
                    >
                        <WidgetRowColumn classes="col-sm-12">
                            <WidgetSpacer data_widget_id="wid_1561718845_n31gwv7vj" top="medium" dataSpacing="maaa" />
                            <WidgetText dataSpacing="aaaa">
                                <h2
                                    style={{ textAlign: 'center' }}
                                    className="moto-text_system_7"
                                >
                                    Prendre un rendez-vous
                                </h2>
                            </WidgetText>
                            <WidgetImage data_widget_id="wid_1561718856_ssr56aj7l" align="center" top="small" bottom="small">
                                <span className="moto-widget-image-link">
                                    <img
                                        data-src="/src/assets/images/home-divider.png"
                                        className="moto-widget-image-picture lazyloaded"
                                        data-id="145"
                                        title=""
                                        alt=""
                                        src={HomeDivider}
                                    />
                                </span>
                            </WidgetImage>
                            <WidgetRow top="small"
                                dataSpacing="saaa"
                            >
                                <WidgetRowColumn classes="col-sm-1"></WidgetRowColumn>
                                <WidgetRowColumn classes="col-sm-10" styles={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {/* Calendly Integration */}
                                        <InlineWidget 
                                            url="https://calendly.com/doctorrdv/rendez-vous" 
                                            pageSettings={{ 
                                                hideEventTypeDetails: true,
                                                hideLandingPageDetails: true }}
                                            styles={{width: '80%', height: '300px'}} />
                                </WidgetRowColumn>
                                <WidgetRowColumn classes="col-sm-1"></WidgetRowColumn>
                            </WidgetRow>
                            <WidgetSpacer data_widget_id="wid_1561718885_jzbzckawy" top="medium" dataSpacing="maaa" />
                        </WidgetRowColumn>
                    </WidgetRow>
                </WidgetContainer>
            </WidgetRowColumn>
            <WidgetRowColumn classes="col-sm-2"></WidgetRowColumn>
        </WidgetRow>
    </WidgetBlock>

    <WidgetBlock top="large" dataSpacing="laaa" anchorName="f.a.q">
        <WidgetRow classes="row-fixed moto-justify-content_center">
            <WidgetRowColumn classes="col-sm-6">
                <WidgetText top="small" dataSpacing="saaa">
                    <h2 className="moto-text_system_6">
                        Foire Aux Questions
                    </h2>
                </WidgetText>
                <WidgetImage data_widget_id="wid_1561719650_79ec1344b" align="left">
                    <span className="moto-widget-image-link">
                        <img
                            data-src="/src/assets/images/home-divider.png"
                            className="moto-widget-image-picture lazyloaded"
                            data-id="145"
                            title=""
                            alt=""
                            src={HomeDivider}
                        />
                    </span>
                </WidgetImage> 
                <WidgetAccordion id="wid_1561719664_s9z0bs1hd">
                    <WidgetAccordionItem 
                        id="wid_1561719675_f9zaq83fc" 
                        dataParentId="wid_1561719664_s9z0bs1hd" 
                        headerText={`Puis-je faire appel à mon médecin ou à tout autre médecin de mon choix ?`}
                        contentText={
                            `Borem ipsum dolor sit amet, conse ctetur
                            adipper isicing elit, sed do eiusmod
                            tempor incididunt ae ut labore et dolore
                            magnae. It is a long established fact
                            that a reader will be distracted by the
                            readable content.`
                        }
                        classes="moto-widget-accordion__item_open"
                        displayContent="block"
                        widgetTextId="wid_1561719703_gxd8e87ed"
                    />
                    <WidgetAccordionItem 
                        id="wid_1561719954_5303m7etw" 
                        dataParentId="wid_1561719664_s9z0bs1hd" 
                        headerText={`Puis-je faire appel à mon médecin ou à tout autre médecin de mon choix ?`}
                        contentText={
                            `Borem ipsum dolor sit amet, conse ctetur
                            adipper isicing elit, sed do eiusmod
                            tempor incididunt ae ut labore et dolore
                            magnae. It is a long established fact
                            that a reader will be distracted by the
                            readable content.`
                        }
                        widgetTextId="wid_1561719954_j83k74i1z"
                    />
                    <WidgetAccordionItem 
                        id="wid_1561719973_3vkyy77sg" 
                        dataParentId="wid_1561719664_s9z0bs1hd" 
                        headerText={`Comment mes frais médicaux sont-ils payés ?`}
                        contentText={
                            `Borem ipsum dolor sit amet, conse ctetur
                            adipper isicing elit, sed do eiusmod
                            tempor incididunt ae ut labore et dolore
                            magnae. It is a long established fact
                            that a reader will be distracted by the
                            readable content.`
                        }
                        widgetTextId="wid_1561719973_ymnpav4a9"
                    />
                </WidgetAccordion>
                <WidgetSpacer data_widget_id="wid_1561720088_wxk0cs32n" top="large" dataSpacing="laaa" visibleOn="tablet" spacerHeight="0px" />                 
            </WidgetRowColumn>

            <WidgetRowColumn classes="col-sm-6" 
                styles={{ 
                    backgroundImage: `url(${HomeDoctor})`,
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
                dataBgPosition="top"
            >
                <WidgetSpacer data_widget_id="wid_1561720125_yjaipbwlr" spacerHeight="400px" />
            </WidgetRowColumn>
        </WidgetRow>
    </WidgetBlock>

    <WidgetBlock anchorName="contact">
        <WidgetRow classes="row-fixed moto-justify-content_center">
            <WidgetRowColumn classes="col-sm-12">
                <WidgetContainer containerContentId="5d15f74914" dataBgPosition="top">
                    <WidgetRow styles={{
                        backgroundImage: `url(${HomeAppointmentBg1})`,
                        backgroundPosition: 'bottom',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                    }}
                    dataBgPosition="bottom"
                    dataBgImage="/src/assets/images/home-appointment-bg1.png"
                    >
                        <WidgetRowColumn classes="col-sm-12">
                            <WidgetRow bottom="medium" dataSpacing="aama">
                                <WidgetRowColumn classes="col-sm-6">
                                    <WidgetText top="medium" bottom="small" dataSpacing="masa">
                                        <h3 className="moto-text_204">
                                            Horaires d'Ouverture
                                        </h3>
                                    </WidgetText>

                                    <WidgetRow dataGridType="xs">
                                        <WidgetRowColumn classes="col-xs-6">
                                            <WidgetText top="small" dataSpacing="saaa">
                                                <p className="moto-text_system_13">
                                                    <span className="moto-color5_5"><strong>Lundi – Vendredi</strong></span>
                                                </p>
                                            </WidgetText>
                                        </WidgetRowColumn>

                                        <WidgetRowColumn classes="col-xs-6">
                                            <WidgetText top="small" dataSpacing="saaa">
                                                <p className="moto-text_system_13"
                                                    style={{ textAlign: 'right' }}
                                                >
                                                <span className="moto-color5_5">
                                                    <strong>08h:00 – 18h:00</strong>
                                                </span>
                                                </p>
                                            </WidgetText>
                                        </WidgetRowColumn>
                                    </WidgetRow>

                                    <WidgetDivider dataWidgetId="wid_1561720926_dk7ev48bq" />

                                    <WidgetRow dataGridType="xs">
                                        <WidgetRowColumn classes="col-xs-6">
                                            <WidgetText top="small" dataSpacing="saaa">
                                                <p className="moto-text_system_13">
                                                    <span className="moto-color5_5"><strong>Samedi</strong></span>
                                                </p>
                                            </WidgetText>
                                        </WidgetRowColumn>

                                        <WidgetRowColumn classes="col-xs-6">
                                            <WidgetText top="small" dataSpacing="saaa">
                                                <p className="moto-text_system_13"
                                                    style={{ textAlign: 'right' }}
                                                >
                                                <span className="moto-color5_5">
                                                    <strong>08h:00 – 17h:00</strong>
                                                </span>
                                                </p>
                                            </WidgetText>
                                        </WidgetRowColumn>
                                    </WidgetRow>

                                    <WidgetDivider dataWidgetId="wid_1561720972_pzeoncghf" />

                                    <WidgetRow dataGridType="xs">
                                        <WidgetRowColumn classes="col-xs-6">
                                            <WidgetText top="small" dataSpacing="saaa">
                                                <p className="moto-text_system_13">
                                                    <span className="moto-color5_5"><strong>Dimanche</strong></span>
                                                </p>
                                            </WidgetText>
                                        </WidgetRowColumn>

                                        <WidgetRowColumn classes="col-xs-6">
                                            <WidgetText top="small" dataSpacing="saaa">
                                                <p className="moto-text_system_13"
                                                    style={{ textAlign: 'right' }}
                                                >
                                                <span className="moto-color5_5">
                                                    <strong>08h:00 – 15h:00</strong>
                                                </span>
                                                </p>
                                            </WidgetText>
                                        </WidgetRowColumn>
                                    </WidgetRow>
                                    
                                </WidgetRowColumn>

                                <WidgetRowColumn classes="col-sm-6">
                                    <WidgetText top="medium" bottom="small" dataSpacing="masa">
                                        <h3 className="moto-text_204">
                                            Horaires des médecins
                                        </h3>
                                    </WidgetText>
                                    <WidgetText top="small" bottom="small" dataSpacing="sasa">
                                        <p className="moto-text_normal">
                                            <span className="moto-color5_5">
                                                Votre plan de traitement est conçu pour des progrès constants, chaque phase étant mise en œuvre.
                                                Borem ipsum dolor sit amet, conse ctetur adipper isicing.
                                            </span>
                                        </p>
                                    </WidgetText>
                                    <WidgetButton dataWidgetId="wid_1561721041_mpgf1eacd">
                                        <a
                                            href="#"
                                            data-action="popup"
                                            data-popup-id="7"
                                            className="moto-widget-button-link moto-size-medium moto-link"
                                        >
                                            <span className="fa moto-widget-theme-icon"></span>
                                            <span className="moto-widget-button-label">CALENDRIER</span>
                                        </a>
                                    </WidgetButton>
                                </WidgetRowColumn>

                                {/* <WidgetRowColumn classes="col-sm-4">
                                    <WidgetText top="medium" bottom="small" dataSpacing="masa">
                                        <h3 className="moto-text_204">
                                            En Cas d'Urgence
                                        </h3>
                                    </WidgetText>
                                    <WidgetText top="small" dataSpacing="saaa">
                                        <p className="moto-text_216">
                                            <span className="moto-color1_3">
                                                <span className="fa fa-fw"></span>
                                            </span>&nbsp;
                                            <a
                                                href="tel:0340132213"
                                                data-action="call"
                                                className="moto-link"
                                                >
                                                (+261) 34 01 322 13
                                            </a>
                                        </p>
                                    </WidgetText>
                                    <WidgetText top="small" dataSpacing="saaa">
                                        <p className="moto-text_normal">
                                            <span className="moto-color5_5">
                                                Votre plan de traitement est conçu pour des progrès constants, chaque phase étant mise en œuvre.
                                                Borem ipsum dolor sit amet, conse ctetur adipper isicing.
                                            </span>
                                        </p>
                                    </WidgetText>
                                </WidgetRowColumn> */}
                            </WidgetRow>
                        </WidgetRowColumn>
                    </WidgetRow>
                </WidgetContainer>
            </WidgetRowColumn>
        </WidgetRow>
    </WidgetBlock>

    <WidgetBlock extraClass="moto-bg-color3_3">
        <WidgetRow>

        </WidgetRow>
    </WidgetBlock>

    <BackToTopButton />
    <WidgetCallback phone1="+261 34 40 589 40" phone2="+261 34 41 589 41" phone3="+261 34 42 589 42" />
    

    {/* <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'absolute', top: 0, left: 0, zIndex: 10, background: 'red' }}>     */}
        {/* <WidgetCallback teamMemberName="Dr Hervé" role="Médecin Généraliste Diplômé" phone="+261 34 01 322 13" />
        <WidgetCallback teamMemberName="Dr Karen" role="Médecin Généraliste " phone="+261 34 01 322 13" /> */}
    {/* </div> */}

    </MainLayout>;
    
  </>
    
};

export default Home;
