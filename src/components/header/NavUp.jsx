import React from 'react';
import WidgetRow from '../widget-row/WidgetRow';
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn';
import WidgetSocialLinksExtended from '../widget-social-links-extended/WidgetSocialLinksExtended';
import WidgetText from '../widget-text/WidgetText';

const NavUp = () => {
  return <WidgetRow
            classes="row-fixed moto-bg-color3_3" bottom="small"
            dataSpacing="aasa"
          >
                <WidgetRowColumn classes="col-sm-12">
                  <WidgetRow
                    classes="moto-justify-content_center"
                  >
                        <WidgetRowColumn classes="col-sm-9">
                          <WidgetRow
                            classes="row-gutter-0 moto-justify-content_center"
                          >
                                <WidgetRowColumn classes="col-sm-4">
                                  <WidgetText
                                    top="small"
                                    bottom="auto"
                                    right="auto"
                                    left="auto"
                                    dataSpacing="saaa"
                                  >                                
                                      <p className="moto-text_system_10">
                                        <span className="moto-color1_3"
                                          ><span className="fa fa-fw"
                                            ></span
                                          ></span
                                        >&nbsp;
                                        <a
                                          href="tel:123456789"
                                          data-action="call"
                                          className="moto-link"
                                          >+261 34 01 322 13</a>
                                      </p>
                                  </WidgetText>
                                </WidgetRowColumn>

                                <WidgetRowColumn classes="col-sm-4">
                                  <WidgetText
                                    top="small"
                                    dataSpacing="saaa"
                                  >
                                      <p className="moto-text_system_10">
                                        <span className="moto-color1_3">
                                          <span className="fa fa-fw"></span>
                                        </span>
                                        Mangarivotra, Mahajanga
                                      </p>
                                  </WidgetText>
                                </WidgetRowColumn>

                                <WidgetRowColumn classes="col-sm-4">

                                  <WidgetText
                                    top="small"
                                    bottom="auto"
                                    right="auto"
                                    left="auto"
                                    dataSpacing="saaa"
                                  >
                                      <p className="moto-text_system_10">
                                        <span className="moto-color1_3">
                                          <span className="fa fa-fw"></span>
                                        </span>
                                        Service d'urgence 24h/24 et 7j/7
                                      </p>
                                  </WidgetText>
                                </WidgetRowColumn>
                             
                          </WidgetRow>
                        </WidgetRowColumn>

                        <WidgetRowColumn classes="col-sm-3">

                          <WidgetSocialLinksExtended
                            id="wid_1561714311_b714e7w1o"
                            dataWidgetId="wid_1561714311_b714e7w1o"
                            align="right"
                            top="small" />

                        </WidgetRowColumn>
                      
                  </WidgetRow>
                </WidgetRowColumn>
             
            
          </WidgetRow>;
};

export default NavUp;
