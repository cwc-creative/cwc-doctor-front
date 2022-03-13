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
import HomeIcon1 from '../assets/images/home-icon1.png';
import HomeIcon2 from '../assets/images/home-icon2.png';
import HomeIcon3 from '../assets/images/home-icon3.png';
import HomeIcon4 from '../assets/images/home-icon4.png';
import HomeImg1 from '../assets/images/home-img1.jpg';
import HomeBg1 from '../assets/images/cwc-doctor-home-bg1.png';
import HomeDivider from '../assets/images/home-divider.png';
import HomeTeamBg from '../assets/images/cwc-doctor-home-team-bg.png';
import HomeTeam1 from '../assets/images/cwc-doctor-home-team1.png';
import HomeTeam2 from '../assets/images/cwc-doctor-home-team2.png';
import HomeTeam3 from '../assets/images/cwc-doctor-home-team3.png';
import BackToTopButton from '../components/back-to-top-button/BackToTopButton';
import WidgetCallback from '../components/widget-callback/WidgetCallback';
import WidgetImage from '../components/widget-image/WidgetImage';
import WidgetText from '../components/widget-text/WidgetText';
import WidgetSocialLinksExtended from '../components/widget-social-links-extended/WidgetSocialLinksExtended';
import WidgetTabs from '../components/widget-tabs/WidgetTabs';
import WidgetButton from '../components/widget-button/WidgetButton';
import WidgetAccordion from '../components/widget-accordion/WidgetAccordion';
import WidgetAccordionItem from '../components/widget-accordion-item/WidgetAccordionItem';
import WidgetDivider from '../components/widget-divider/WidgetDivider';
import About from '../components/About';
import Header from '../components/header/Header';

const Home = () => {
  return <>
    <MainLayout>
            
    
    <Header />
    <About />
    
    <WidgetBlock top="large" bottom="medium" dataSpacing="lama">
        <WidgetRow classes="row-fixed" anchorName="services">
                <WidgetRowColumn classes="col-sm-8">
                    <WidgetText>
                        <h2 className="moto-text_system_6">
                            Nos Services
                        </h2>
                    </WidgetText>
                    <WidgetImage 
                        data_widget_id="wid_1561715773_2r34yom15"
                        top="small">
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
                    <WidgetRow classes="row-fixed">
                            <WidgetRowColumn classes="col-sm-6">
                                <WidgetRow classes="row-gutter-0" top="medium"
                                    dataGridType="xs"
                                    dataSpacing="maaa">
                                    <WidgetRowColumn classes="col-xs-2">
                                        <WidgetImage data_widget_id="wid_1561715800_sfgp4fezc">
                                            <span className="moto-widget-image-link">
                                            <img
                                              data-src="/src/assets/images/home-icon1.png"
                                              className="moto-widget-image-picture lazyloaded"
                                              data-id="150"
                                              title=""
                                              alt=""
                                              src={HomeIcon1}
                                            />
                                          </span>
                                        </WidgetImage>
                                    </WidgetRowColumn>
                                    <WidgetRowColumn classes="col-xs-10">
                                        <WidgetText left="small" dataSpacing="aaas">
                                            <h3 className="moto-text_system_8">
                                              Consultation générale
                                            </h3>
                                            <p className="moto-text_normal">
                                              &nbsp;
                                            </p>
                                            <p className="moto-text_normal">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna.
                                            </p>
                                        </WidgetText>
                                    </WidgetRowColumn>
                                </WidgetRow>
                            </WidgetRowColumn>

                            <WidgetRowColumn classes="col-sm-6">
                                <WidgetRow classes="row-gutter-0" top="medium"
                                    dataGridType="xs"
                                    dataSpacing="maaa"
                                >
                                    <WidgetRowColumn classes="col-xs-2">
                                        <WidgetImage data_widget_id="wid_1561715854_twmzaaja5">
                                            <span className="moto-widget-image-link">
                                                <img
                                                data-src="/src/assets/images/home-icon2.png"
                                                className="moto-widget-image-picture lazyloaded"
                                                data-id="151"
                                                title=""
                                                alt=""
                                                src={HomeIcon2}
                                                />
                                            </span>
                                        </WidgetImage>                                     
                                    </WidgetRowColumn>
                                    <WidgetRowColumn classes="col-xs-10">
                                        <WidgetText left="small" dataSpacing="aaas">
                                            <h3 className="moto-text_system_8">
                                              ECG
                                            </h3>
                                            <p className="moto-text_normal">
                                              &nbsp;
                                            </p>
                                            <p className="moto-text_normal">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna.
                                            </p>
                                        </WidgetText>
                                    </WidgetRowColumn>
                                </WidgetRow>
                            </WidgetRowColumn>
                    </WidgetRow>

                    <WidgetRow>

                            <WidgetRowColumn classes="col-sm-6">
                                <WidgetRow classes="row-gutter-0" top="medium"
                                    dataGridType="xs"
                                    dataSpacing="maaa">

                                        <WidgetRowColumn classes="col-xs-2">
                                            <WidgetImage data_widget_id="wid_1561715876_dqw0f4017">
                                                <span className="moto-widget-image-link">
                                                <img
                                                data-src="/src/assets/images/home-icon3.png"
                                                className="moto-widget-image-picture lazyloaded"
                                                data-id="152"
                                                title=""
                                                alt=""
                                                src={HomeIcon3}
                                                />
                                            </span>
                                            </WidgetImage>
                                        </WidgetRowColumn>

                                        <WidgetRowColumn classes="col-xs-10">
                                        <WidgetText left="small" dataSpacing="aaas">
                                            <h3 className="moto-text_system_8">
                                              Echographie
                                            </h3>
                                            <p className="moto-text_normal">
                                              &nbsp;
                                            </p>
                                            <p className="moto-text_normal">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna.
                                            </p>
                                        </WidgetText>
                                    </WidgetRowColumn>
                                </WidgetRow>
                            </WidgetRowColumn>

                            {/* <WidgetRowColumn classes="col-sm-6">
                                <WidgetRow classes="row-gutter-0" top="medium"
                                    dataGridType="xs"
                                    dataSpacing="maaa"
                                >
                                    <WidgetRowColumn classes="col-xs-2">
                                        <WidgetImage data_widget_id="wid_1561715876_al2qyiutb">
                                            <span className="moto-widget-image-link">
                                                <img
                                                data-src="/src/assets/images/home-icon4.png"
                                                className="moto-widget-image-picture lazyloaded"
                                                data-id="153"
                                                title=""
                                                alt=""
                                                src={HomeIcon4}
                                                />
                                            </span>
                                        </WidgetImage>                                     
                                    </WidgetRowColumn>
                                    <WidgetRowColumn classes="col-xs-10">
                                        <WidgetText left="small" dataSpacing="aaas">
                                            <h3 className="moto-text_system_8">
                                              Théâtre d'Opération
                                            </h3>
                                            <p className="moto-text_normal">
                                              &nbsp;
                                            </p>
                                            <p className="moto-text_normal">
                                              Lorem ipsum dolor sit amet,
                                              consectetur adipiscing elit, sed
                                              do eiusmod tempor incididunt ut
                                              labore et dolore magna.
                                            </p>
                                        </WidgetText>
                                    </WidgetRowColumn>
                                </WidgetRow>
                            </WidgetRowColumn> */}

                    </WidgetRow>

                </WidgetRowColumn>
                <WidgetRowColumn classes="col-sm-4">
                    <WidgetImage data_widget_id="wid_1561716023_g4v2424rm" top="small">
                        <span className="moto-widget-image-link">
                            <img
                              data-src="/src/assets/images/home-img1.jpg"
                              className="moto-widget-image-picture lazyloaded"
                              data-id="163"
                              title=""
                              alt=""
                              src={HomeImg1}
                            />
                          </span>
                    </WidgetImage>
                </WidgetRowColumn>
        </WidgetRow>
    </WidgetBlock>

    <WidgetBlock styles={{ 
            backgroundImage: `url(${HomeBg1})`,
            backgroundPosition: 'bottom',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover' }}
            dataBgImage="cwc-doctor-home-bg1.png"
            dataBgPosition="bottom">

        <WidgetRow classes="row-fixed"
            top="large"
            dataSpacing="laaa"
            anchorName="speciality">
            <WidgetRowColumn classes="col-sm-12">
                <WidgetText dataSpacing="aaaa">
                    <h2
                        className="moto-text_system_6"
                        style={{ textAlign: 'center' }}
                    >
                        Quelle est notre spécialité
                    </h2>
                </WidgetText>
                <WidgetImage data_widget_id="wid_1561974481_d70q9bsf7" align="center" top="small">
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

                <WidgetTabs id="wid_1561974481_eg30e3qsd" />

            </WidgetRowColumn>
        </WidgetRow>
        
        <WidgetRow classes="row-fixed" top="medium"
            dataSpacing="maaa"
            anchorName="team">
            <WidgetRowColumn classes="col-sm-12">
                <WidgetText>
                    <h2
                        className="moto-text_system_6"
                        style={{ textAlign: 'center' }}
                    >
                        Rencontrez Notre Equipe
                    </h2>
                </WidgetText>
                <WidgetImage data_widget_id="wid_1561974481_njeymdxed" align="center" top="small">
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
                <WidgetRow>

                        <WidgetRowColumn classes="col-sm-6" top="medium" left="large" dataSpacing="maaa">
                            <WidgetContainer containerContentId="5d19d6d17" dataBgPosition="top">
                                <WidgetRow
                                    styles={{ backgroundImage: `url(${HomeTeamBg})`,
                                      backgroundPosition: 'left top',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundSize: 'contain' }}
                                    dataBgImage="/src/assets/images/cwc-doctor-home-team-bg.png">
                                        <WidgetRowColumn classes="col-sm-12">
                                            <WidgetRow
                                                dataBgPosition="right bottom"
                                                styles={{ backgroundImage: `url(${HomeTeam2})`,
                                                    backgroundPosition: 'right bottom',
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundSize: 'contain' }}
                                                dataBgImage="/src/assets/images/cwc-doctor-home-team2.png"
                                            >
                                                <WidgetRowColumn classes="col-sm-12">
                                                    <WidgetSpacer data_widget_id="wid_1561974481_xsjc0h2op" top="small" bottom="small" dataSpacing="sasa" />
                                                    <WidgetText right="small" left="small" dataSpacing="asas">
                                                        <h3 className="moto-text_204">
                                                            Dr. Hervé
                                                        </h3>
                                                        <p
                                                            className="moto-text_normal"
                                                        >
                                                            <span className="moto-color5_5"
                                                            >Médecin Généraliste</span>
                                                        </p>
                                                    </WidgetText>
                                                    <WidgetSocialLinksExtended
                                                        id="wid_1561974481_3y9pt0ay4"
                                                        dataWidgetId="wid_1561974481_3y9pt0ay4"
                                                        align="left"
                                                        top="small"
                                                        right="small"
                                                        left="small"
                                                    />
                                                    <WidgetSpacer data_widget_id="wid_1561974481_lo9octhx0" top="large" dataSpacing="laaa" spacerHeight="0px" />
                                                </WidgetRowColumn>
                                            </WidgetRow>
                                        </WidgetRowColumn>
                                </WidgetRow>
                            </WidgetContainer>
                        </WidgetRowColumn>

                        <WidgetRowColumn classes="col-sm-6" top="medium" right="large" dataSpacing="maaa">
                            <WidgetContainer containerContentId="5d19d6d18" dataBgPosition="top">
                                <WidgetRow
                                    styles={{ backgroundImage: `url(${HomeTeamBg})`,
                                      backgroundPosition: 'left top',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundSize: 'contain' }}
                                    dataBgImage="/src/assets/images/cwc-doctor-home-team-bg.png">
                                    <WidgetRowColumn classes="col-sm-12">
                                        <WidgetRow
                                            dataBgPosition="right bottom"
                                            styles={{ backgroundImage: `url(${HomeTeam1})`,
                                            backgroundPosition: 'right bottom',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain' }}
                                            dataBgImage="/src/assets/images/cwc-doctor-home-team1.png">
                                                <WidgetRowColumn classes="col-sm-12">
                                                    <WidgetSpacer data_widget_id="wid_1561974481_n1f26fa5w" top="small" bottom="small" dataSpacing="sasa"  />
                                                    <WidgetText right="small" left="small" dataSpacing="asas">
                                                        <h3 className="moto-text_204">
                                                            Dr. Karen
                                                        </h3>
                                                        <p className="moto-text_normal">
                                                            <span className="moto-color5_5">Médecin certifié</span>
                                                        </p>
                                                    </WidgetText>
                                                    <WidgetSocialLinksExtended id="wid_1561974481_51pfl8ehb" dataWidgetId="wid_1561974481_51pfl8ehb" align="left" top="small" right="small" left="small" />
                                                    <WidgetSpacer data_widget_id="wid_1561974481_a7z56tkr5" top="large" dataSpacing="laaa" spacerHeight="0px" />
                                                </WidgetRowColumn>
                                        </WidgetRow>
                                    </WidgetRowColumn>
                                </WidgetRow>
                            </WidgetContainer>
                        </WidgetRowColumn>                

                </WidgetRow>
                <WidgetRow>
                    <WidgetRowColumn classes="col-sm-6" top="medium" left="large" dataSpacing="maaa">
                            <WidgetContainer containerContentId="5d19d6d19" dataBgPosition="top">
                                <WidgetRow
                                    styles={{ backgroundImage: `url(${HomeTeamBg})`,
                                      backgroundPosition: 'left top',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundSize: 'contain' }}
                                    dataBgImage="/src/assets/images/cwc-doctor-home-team-bg.png">
                                    <WidgetRowColumn classes="col-sm-12">
                                        <WidgetRow
                                            dataBgPosition="right bottom"
                                            styles={{ backgroundImage: `url(${HomeTeam1})`,
                                            backgroundPosition: 'right bottom',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain' }}
                                            dataBgImage="/src/assets/images/cwc-doctor-home-team1.png">
                                                <WidgetRowColumn classes="col-sm-12">
                                                    <WidgetSpacer data_widget_id="wid_1561974481_dqzejk30e" top="small" bottom="small" dataSpacing="sasa"  />
                                                    <WidgetText right="small" left="small" dataSpacing="asas">
                                                        <h3 className="moto-text_204">
                                                            Mme. Sharon Laura
                                                        </h3>
                                                        <p className="moto-text_normal">
                                                            <span className="moto-color5_5">Infirmière</span>
                                                        </p>
                                                    </WidgetText>
                                                    <WidgetSocialLinksExtended id="wid_1561974481_k2413s8vl" dataWidgetId="wid_1561974481_k2413s8vl" align="left" top="small" right="small" left="small" />
                                                    <WidgetSpacer data_widget_id="wid_1561974481_w1978e0fh" top="large" dataSpacing="laaa" spacerHeight="0px" />
                                                </WidgetRowColumn>
                                        </WidgetRow>
                                    </WidgetRowColumn>
                                </WidgetRow>
                            </WidgetContainer>
                    </WidgetRowColumn>
                    <WidgetRowColumn classes="col-sm-6" top="medium" right="large" dataSpacing="maaa">
                            <WidgetContainer containerContentId="5d19d6d19" dataBgPosition="top">
                                <WidgetRow
                                    styles={{ backgroundImage: `url(${HomeTeamBg})`,
                                      backgroundPosition: 'left top',
                                      backgroundRepeat: 'no-repeat',
                                      backgroundSize: 'contain' }}
                                    dataBgImage="/src/assets/images/cwc-doctor-home-team-bg.png">
                                    <WidgetRowColumn classes="col-sm-12">
                                        <WidgetRow
                                            dataBgPosition="right bottom"
                                            styles={{ backgroundImage: `url(${HomeTeam1})`,
                                            backgroundPosition: 'right bottom',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'contain' }}
                                            dataBgImage="/src/assets/images/cwc-doctor-home-team1.png">
                                                <WidgetRowColumn classes="col-sm-12">
                                                    <WidgetSpacer data_widget_id="wid_1561974481_dqzejk30e" top="small" bottom="small" dataSpacing="sasa"  />
                                                    <WidgetText right="small" left="small" dataSpacing="asas">
                                                        <h3 className="moto-text_204">
                                                            Mme. Sharon Laura
                                                        </h3>
                                                        <p className="moto-text_normal">
                                                            <span className="moto-color5_5">Infirmière</span>
                                                        </p>
                                                    </WidgetText>
                                                    <WidgetSocialLinksExtended id="wid_1561974481_k2413s8vl" dataWidgetId="wid_1561974481_k2413s8vl" align="left" top="small" right="small" left="small" />
                                                    <WidgetSpacer data_widget_id="wid_1561974481_w1978e0fh" top="large" dataSpacing="laaa" spacerHeight="0px" />
                                                </WidgetRowColumn>
                                        </WidgetRow>
                                    </WidgetRowColumn>
                                </WidgetRow>
                            </WidgetContainer>
                    </WidgetRowColumn>
                </WidgetRow>
            </WidgetRowColumn>

        </WidgetRow>

        

    </WidgetBlock>

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
