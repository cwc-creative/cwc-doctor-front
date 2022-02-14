import React from 'react';
import WidgetButton from '../widget-button/WidgetButton';
import WidgetImage from '../widget-image/WidgetImage';
import home_logo from '../../assets/images/home-logo.png';
import WidgetRowColumn from '../widget-row__column/WidgetRowColumn';
import WidgetMenu from '../widget-menu/WidgetMenu';
import WidgetMenuList from '../widget-menu-list/WidgetMenuList';
import WidgetMenuItem from '../widget-menu-item/WidgetMenuItem';
import WidgetMenuLink from '../widget-menu-link/WidgetMenuLink';
import WidgetMenuSubList from '../widget-menu-sublist/WidgetMenuSubList';
import WidgetRow from '../widget-row/WidgetRow';

const NavDown = () => {
  return <WidgetRow
            classes="row-fixed moto-justify-content_center" bottom="small"
            dataSpacing="aasa"
        >

                <WidgetRowColumn classes="col-sm-3">
                    {/* WidgetRow starts */}
                    <WidgetRow
                        classes="row-gutter-0 moto-justify-content_center" top="small"
                        dataGridType="xs"
                        dataSpacing="saaa"
                    >
                            {/* WidgetRowColumn starts */}
                            <WidgetRowColumn classes="col-xs-3">
                                {/* WidgetImage starts */}
                                    <WidgetImage data_widget_id="wid_1561714555_2pd7ecfqf">
                                        <a
                                        href="/"
                                        data-action="page"
                                        className="moto-widget-image-link moto-link"
                                        >
                                        <img
                                            data-src="/src/assets/images/home-logo.png"
                                            className="moto-widget-image-picture lazyloaded"
                                            data-id="154"
                                            title=""
                                            alt=""
                                            src={home_logo}
                                        />
                                        </a>
                                    </WidgetImage>
                                {/* WidgetImage ends */}
                            </WidgetRowColumn>
                            {/* WidgetRowColumn ends */}

                            {/* WidgetRowColumn starts */}
                            <WidgetRowColumn classes="col-xs-9">
                            
                            {/* WidgetText starts */}
                            <div
                                className="moto-widget moto-widget-text moto-preset-default moto-spacing-top-auto moto-spacing-right-auto moto-spacing-bottom-auto moto-spacing-left-small"
                                data-widget="text"
                                data-preset="default"
                                data-spacing="aaas"
                                data-visible-on="mobile-v"
                                data-animation=""
                            >
                                <div
                                className="moto-widget-text-content moto-widget-text-editable"
                                >
                                <p className="moto-text_system_1">
                                    <a
                                    target="_self"
                                    data-action="page"
                                    data-id="1"
                                    className="moto-link"
                                    href="/"
                                    >CLINIQUE <span className="moto-color3_3"
                                        >MA'JANGA</span
                                    ></a
                                    >
                                </p>
                                <p className="moto-text_system_2">
                                    <a
                                    target="_self"
                                    href="/"
                                    data-action="page"
                                    data-id="1"
                                    className="moto-link"
                                    ></a
                                    >
                                </p>
                                </div>
                            </div>
                            {/* WidgetText ends */}
                            </WidgetRowColumn>
                            {/* WidgetRowColumn ends */}
                    </WidgetRow>
                    {/* WidgetRow ends */}

                </WidgetRowColumn>
                <WidgetRowColumn classes="col-sm-9">
                    <WidgetRow
                    classes="moto-justify-content_center"
                >
                        <WidgetRowColumn classes="col-sm-9">
                            <WidgetMenu data_widget_id="wid_1561714664_ah4lcqvdo">
                                <a
                                href="/"
                                className="moto-widget-menu-toggle-btn"
                                ><i
                                    className="moto-widget-menu-toggle-btn-icon fa fa-bars"
                                ></i
                                ></a>
                                <WidgetMenuList>

                                    <WidgetMenuItem>
                                        <WidgetMenuLink href="#about" linkLevel={1} linkText="A PROPOS" />
                                    </WidgetMenuItem>

                                    <WidgetMenuItem>
                                        <WidgetMenuLink href="#pricing" linkLevel={1} linkText="TARIFS" />
                                    </WidgetMenuItem>

                                    <WidgetMenuItem>
                                        <WidgetMenuLink href="#contacts" linkLevel={1} linkText="CONTACTS" />
                                    </WidgetMenuItem>

                                    <WidgetMenuItem hasSubmenu={true}>
                                        <WidgetMenuLink href="#" linkLevel={1} linkText="MENU" linkSubmenu={true} />
                                        <WidgetMenuSubList>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#about" linkLevel={2} linkText="A propos" />
                                            </WidgetMenuItem>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#benefits" linkLevel={2} linkText="Bénéfices" />
                                            </WidgetMenuItem>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#team" linkLevel={2} linkText="Equipe" />
                                            </WidgetMenuItem>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#services" linkLevel={2} linkText="Services" />
                                            </WidgetMenuItem>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#Sponsors" linkLevel={2} linkText="Sponsors" />
                                            </WidgetMenuItem>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#appointment" linkLevel={2} linkText="Rendez-vous" />
                                            </WidgetMenuItem>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#pricing" linkLevel={2} linkText="Tarifs" />
                                            </WidgetMenuItem>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#f.a.q" linkLevel={2} linkText="FAQs" />
                                            </WidgetMenuItem>
                                            <WidgetMenuItem>
                                                <WidgetMenuLink href="#contacts" linkLevel={2} linkText="Contacts" />
                                            </WidgetMenuItem>
                                        </WidgetMenuSubList>
                                    </WidgetMenuItem>

                                </WidgetMenuList>
                            </WidgetMenu>
                        </WidgetRowColumn>

                        <WidgetRowColumn classes="col-sm-3">
                        <WidgetButton
                            dataWidgetId="wid_1561714918_ea1jc3pb7"
                        >
                            <a
                            href="#contact"
                            data-action="popup"
                            data-popup-id="7"
                            className="moto-widget-button-link moto-size-medium moto-link"
                            ><span
                                className="fa moto-widget-theme-icon"
                            ></span>
                            <span className="moto-widget-button-label"
                                >NOUS CONTACTER</span
                            ></a
                            >
                        </WidgetButton>
                        </WidgetRowColumn>
                </WidgetRow>
                </WidgetRowColumn>
        </WidgetRow>;
};

export default NavDown;
