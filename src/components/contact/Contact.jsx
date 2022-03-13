import React from 'react'
import HomeAppointmentBg1 from '../../assets/images/home-appointment-bg1.png'
import WidgetBlock from '../widget-block/WidgetBlock'
import WidgetButton from '../widget-button/WidgetButton'
import WidgetContainer from '../widget-container/WidgetContainer'
import WidgetDivider from '../widget-divider/WidgetDivider'
import WidgetRow from '../widget-row/WidgetRow'
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn'
import WidgetText from '../widget-text/WidgetText'

const Contact = () => {
  return (
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
  )
}

export default Contact