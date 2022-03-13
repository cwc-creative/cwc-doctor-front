import React from 'react'
import { InlineWidget } from 'react-calendly'

import HomeAppointment from '../../assets/images/home-appointment.png';
import HomeDivider from '../../assets/images/home-divider.png';

import WidgetBlock from '../widget-block/WidgetBlock'
import WidgetContainer from '../widget-container/WidgetContainer'
import WidgetImage from '../widget-image/WidgetImage'
import WidgetRow from '../widget-row/WidgetRow'
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn'
import WidgetSpacer from '../widget-spacer/WidgetSpacer'
import WidgetText from '../widget-text/WidgetText'

const Appointment = () => {
  return (
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
  )
}

export default Appointment