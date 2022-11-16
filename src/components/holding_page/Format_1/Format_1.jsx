import React from "react";
import '../holding_page.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin as linkedIn, faTwitter as Twitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright as copyright } from '@fortawesome/free-solid-svg-icons';

export const Holding_page_1 = ({site_info}) =>{
    const d = new Date();
    return (
        <main className="holding-page" style={{backgroundImage:`url(${site_info.backgroundImg})`}}>
            <div className="holding-page__cover"></div>
            <div className="holding-page__content">
                <img className="holding-page__logo" src={site_info.logo} alt="" />
                <div className="holding-page__text">

                    <p className="holding-page__greeting">{site_info.greeting}</p>
                    {site_info.location_info && (
                        <p className="holding-page__location-info">{site_info.location_info}</p>
                    )}
                    <>{site_info.message.map((parargraph, index)=>(
                        <p className="holding-page__paragraph" key={index}>{parargraph}</p>
                    ))}
                    </>
                </div>
               {site_info.ctas &&
                (
                    <div className="holding-page__ctas">
                        {site_info.ctas.map((link, index)=>(
                            <a href={link.link} className={`holding-page__cta holding-page__cta__${index %2 ===0 ? 'primary': 'secondary'}`}>{link.cta}</a>
                        ))}
                    </div>
               )}
                <div className="holding-page__footer">
                    <div className="holding-page__contact">
                        <p className="holding-page__paragraph_dark">Follow us on social media.</p>
                        <div className="holding-page__contact-icons">
                            <a href={site_info.linkedIn} >
                            <FontAwesomeIcon icon={linkedIn}  className='holding-page__icons'/>
                            </a>
                            <a href={site_info.twitter} >
                            <FontAwesomeIcon icon={Twitter} className='holding-page__icons'/>
                            </a>
                        </div>
                    </div>
                    <div className="holding-page__copyright">
                        <FontAwesomeIcon icon={copyright} className="holding-page__copyright-icon" />&nbsp;{d.getFullYear()}
                        &nbsp;
                        <p>{`${site_info.copyright}`}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}