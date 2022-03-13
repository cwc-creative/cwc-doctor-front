import React from 'react'
import WidgetBlock from '../widget-block/WidgetBlock'
import WidgetImage from '../widget-image/WidgetImage'
import WidgetRow from '../widget-row/WidgetRow'
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn'
import WidgetText from '../widget-text/WidgetText'

import HomeDivider from '../../assets/images/home-divider.png';
import HomeIcon1 from '../../assets/images/home-icon1.png';
import HomeIcon2 from '../../assets/images/home-icon2.png';
import HomeIcon3 from '../../assets/images/home-icon3.png';
import HomeIcon4 from '../../assets/images/home-icon4.png';

import HomeImg1 from '../../assets/images/home-img1.jpg';

const Services = () => {
  return (
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
  )
}

export default Services