import React from 'react'

import HomeDivider from '../../assets/images/home-divider.png';
import HomeTeamBg from '../../assets/images/cwc-doctor-home-team-bg.png';
import HomeTeam1 from '../../assets/images/cwc-doctor-home-team1.png';
import HomeTeam2 from '../../assets/images/cwc-doctor-home-team2.png';
import HomeTeam3 from '../../assets/images/cwc-doctor-home-team3.png';
import WidgetContainer from '../widget-container/WidgetContainer'
import WidgetImage from '../widget-image/WidgetImage'
import WidgetRow from '../widget-row/WidgetRow'
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn'
import WidgetSocialLinksExtended from '../widget-social-links-extended/WidgetSocialLinksExtended'
import WidgetSpacer from '../widget-spacer/WidgetSpacer'
import WidgetText from '../widget-text/WidgetText'

const Team = () => {
  return (
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
  )
}

export default Team