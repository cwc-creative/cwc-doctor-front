import React from 'react'
import WidgetBlock from './widget-block/WidgetBlock'
import WidgetImage from './widget-image/WidgetImage'
import WidgetRow from './widget-row/WidgetRow'
import WidgetRowColumn from './widget-row__column/WidgetRowColumn'
import WidgetText from './widget-text/WidgetText'

import HomeAbout from '../assets/images/home-about.jpg';
import HomeDivider from '../assets/images/home-divider.png';

const About = () => {
  return (
    <WidgetBlock top="large" dataSpacing="maaa" anchorName="about">
        <WidgetRow
            classes="moto-justify-content_center"
        >
            <WidgetRowColumn classes="col-sm-6">
                <WidgetImage 
                    data_widget_id="wid_1561715532_96bp9ugdj"
                    preset="3"
                    top="medium">
                    <span className="moto-widget-image-link">
                        <img
                            data-src="assets/images/home-about.jpg"
                            className="moto-widget-image-picture lazyloaded"
                            data-id="146"
                            title=""
                            alt=""
                            src={HomeAbout}
                        />
                    </span>
                </WidgetImage>
            </WidgetRowColumn>

            <WidgetRowColumn classes="col-sm-6">
                <WidgetText top="medium" dataSpacing="maaa">
                    <h2 className="moto-text_system_6">Qui Sommes-Nous ?</h2>
                </WidgetText>
                <WidgetImage 
                    data_widget_id="wid_1561715578_7owb6n7gu"
                    top="small"
                    bottom="small"
                    >
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

                <WidgetText top="small" dataSpacing="saaa">
                    <p className="moto-text_normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Quis ipsum ultrices
                        gravida. Risus commodo viverra maecenas accumsan
                        facilisis.
                    </p>
                    <p className="moto-text_normal">&nbsp;</p>
                    <ul>
                        <li className="moto-text_system_13">
                        We provide high-quality services for the whole
                        family.
                        </li>
                        <li className="moto-text_system_13">
                        Risus commodo viverra maecenas
                        </li>
                        <li className="moto-text_system_13">
                        Votre santé, c'est notre priorité
                        </li>
                    </ul>
                </WidgetText>
            </WidgetRowColumn>
        </WidgetRow>
    </WidgetBlock>
  )
}

export default About