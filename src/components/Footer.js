import React from 'react'
import tangoFB from '../images/tango-facebook-icon.svg'
import tangoIG from '../images/tango-instagram-icon.svg'
import tangoLI from '../images/tango-linkedin-icon.svg'
import { FooterWrapper } from './styles/FooterStyles'

const Footer = () => (
    <FooterWrapper>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='whiteText'>
                        CONTACT
                    </h1>
                </div>

                <div className='row'>
                    <div className='col-md-4'>
                        <h3>
                            ANDERS LINDEN
                        </h3>

                        <p className='tango-contact'>
                            <a href='mailto:anders@tangobrandallince.se'>
                                anders@tangobrandallince.se
                            </a>
                        </p>

                        <p className='tango-contact'>
                            +46 (0) 706 531 992
                        </p>

                        <span className='social'>
                            <a href='https://www.linkedin.com/in/anders-linden-06893316/' target='_blank' rel='noopener noreferer'>
                                <img src={tangoLI} alt='tango-li'/>
                            </a>
                        </span>
                    </div>

                    <div className='col-md-4'>
                        <h3>
                            MIRELLE ANDREASSON
                        </h3>

                        <p className='tango-contact'>
                            <a href='mailto:mirelle@tangobrandallince.se'>
                                mirelle@tangobrandallince.se
                            </a>
                        </p>

                        <p className='tango-contact'>
                            +46 (0) 708 328 845
                        </p>

                        <span className='social'>
                            <a href='https://www.linkedin.com/in/mirelle-andreasson-15ab9b115/' target='_blank' rel='noopener noreferer'>
                                <img src={tangoLI} alt='tango-li'/>
                            </a>
                        </span>
                    </div>

                    <div className='col-md-4'>
                        <h3>
                            TANGO BRAND ALLIANCE AB
                        </h3>

                        <p className='tango-contact'>
                            Box 160, 101 23 Stockholm
                        </p>

                        <p className='tango-contact'>
                            Visit: Convendum, Vasagatan 16
                        </p>

                        <span className='social'>
                            <a href='https://www.facebook.com/tangobrandalliance/' target='_blank' rel='noopener noreferer'>
                                <img className='facebook' src={tangoFB} alt='tango-fb'/>
                            </a>

                            <a href='https://www.instagram.com/tangobrandalliance/' target='_blank' rel='noopener noreferer'>
                                <img className='instagram' src={tangoIG} alt='tango-ig'/>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </FooterWrapper>
)

export default Footer