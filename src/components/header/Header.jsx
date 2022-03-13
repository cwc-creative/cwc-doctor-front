import React from 'react';
import WidgetBlock from '../widget-block/WidgetBlock';
import WidgetContainer from '../widget-container/WidgetContainer';
import WidgetRow from '../widget-row/WidgetRow';
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn';
import WidgetSpacer from '../widget-spacer/WidgetSpacer';
import NavDown from './NavDown';
import NavUp from './NavUp';

import HomeHeaderBg1 from '../../assets/images/cwc-doctor-home-header-bg1.png';
import WidgetText from '../widget-text/WidgetText';

const Header = () => {
  return <WidgetBlock>

                <NavUp />

                <WidgetSpacer data_widget_id="wid_1561714957_exi5iztmo" />
                <NavDown />
                <WidgetSpacer data_widget_id="wid_1561714961_z71i16pht" />

                <WidgetContainer containerContentId="5d15e1441" dataBgPosition="top">


                    <WidgetRow 
                        classes="row-fixed" 
                        top="auto" bottom="auto"
                        dataSpacing="aaaa"
                        styles={{ 
                            backgroundImage: `url(${HomeHeaderBg1})`,
                            backgroundPosition: 'left bottom',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain'
                        }}
                        dataBgPosition="left bottom"
                        dataBgImage="/src/assets/images/cwc-doctor-home-header-bg1.png"
                    >
                        <WidgetRowColumn classes="col-sm-12">

                            <WidgetSpacer data_widget_id="wid_1561715235_r42quivjf" top="small" bottom="small" dataSpacing="sasa" visibleOn="tablet" />

                            <WidgetRow dataGridType="xs" right="large" left="large" dataSpacing="alal">
                                <WidgetRowColumn classes="col-xs-7">
                                    <WidgetText bottom="small" dataSpacing="aasa">
                                        <p className="moto-text_system_12">
                                            BIENVENUE DANS NOTRE CENTRE DE SOINS MÉDICAUX
                                        </p>
                                        <p className="moto-text_system_12">&nbsp;</p>
                                        <h1 className="moto-text_system_5">
                                            Prenez soin de votre santé
                                        </h1>
                                    </WidgetText>
                                </WidgetRowColumn>
                                <WidgetRowColumn classes="col-xs-5" />
                            </WidgetRow>

                            <WidgetRow dataGridType="xs" right="large" left="large" dataSpacing="alal">
                                <WidgetRowColumn classes="col-xs-7">
                                    <WidgetText>
                                        <p className="moto-text_system_9">
                                            Vous pouvez facilement nous
                                            joindre 24h/24 et 7j/7.<br />
                                            {/* <ul>
                                                <li><a href="tel:+261344058940">034 40 589 40</a></li>
                                                <li><a href="tel:+261344158941">034 41 589 41</a></li>
                                                <li><a href="tel:+261344258942">034 42 589 42</a></li>
                                            </ul> */}
                                        </p>
                                    </WidgetText>
                                    {/* <WidgetButton dataWidgetId="wid_1561715188_oqimtrg36" preset="2" top="medium">
                                        <a
                                            href="/#services"
                                            data-action="page"
                                            className="moto-widget-button-link moto-size-large moto-link"
                                        >
                                            <span className="fa moto-widget-theme-icon"></span>
                                            <span className="moto-widget-button-label">
                                                NOS SERVICES
                                            </span>
                                        </a>
                                    </WidgetButton> */}
                                </WidgetRowColumn>
                                <WidgetRowColumn classes="col-xs-5" />
                            </WidgetRow>            
                          
                            <WidgetSpacer data_widget_id="wid_1561715265_fggu126p9" top="large" bottom="large" dataSpacing="lala" visibleOn="tablet" />

                        </WidgetRowColumn>

                    </WidgetRow>
                  

                </WidgetContainer>
            </WidgetBlock>;
};

export default Header;
