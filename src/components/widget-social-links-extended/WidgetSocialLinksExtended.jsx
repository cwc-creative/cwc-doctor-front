import React from 'react';

const WidgetSocialLinksExtended = ({children, id, dataWidgetId, align, top, right, bottom, left}) => {
  return <div id={id}
            data-widget-id={dataWidgetId}
            className={`moto-widget moto-widget-social-links-extended moto-preset-default moto-align-${align} moto-align-left_mobile-h moto-spacing-top-${top ? top : 'auto'} moto-spacing-right-${right ? right : 'auto'} moto-spacing-bottom-${bottom ? bottom : 'auto'} moto-spacing-left-${left ? left : 'auto'}`}
            data-widget="social_links_extended"
            data-preset="default">
            <ul
                className="moto-widget-social-links-extended__list"
            >
                <li
                className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-1"
                >
                    <a
                        href="/"
                        className="moto-widget-social-links-extended__link"
                        target="_self"
                    >
                        <span
                        className="moto-widget-social-links-extended__icon fa"
                        ></span
                        >
                    </a>
                </li>
                <li
                className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-2"
                >
                    <a
                        href="/"
                        className="moto-widget-social-links-extended__link"
                        target="_self"
                    >
                        <span
                        className="moto-widget-social-links-extended__icon fa"
                        ></span
                        >
                    </a>
                </li>
                <li
                className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-3"
                >
                    <a
                        href="pinterest"
                        className="moto-widget-social-links-extended__link"
                        target="_self"
                    >
                        <span
                        className="moto-widget-social-links-extended__icon fa"
                        ></span
                        >
                    </a>
                </li>
                <li
                className="moto-widget-social-links-extended__item moto-widget-social-links-extended__item-4"
                >
                    <a
                        href="/"
                        className="moto-widget-social-links-extended__link"
                        target="_self"
                    >
                        <span
                        className="moto-widget-social-links-extended__icon fa"
                        ></span
                        >
                    </a>
                </li>
            </ul>
            <style type="text/css"></style>
        </div>;
};

export default WidgetSocialLinksExtended;
