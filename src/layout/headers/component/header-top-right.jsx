import Link from 'next/link';
import React from 'react';

const social_share = [
    { link: 'https://www.facebook.com/mightyfox', target: '_blank', icon: 'icon-facebook' },
    { link: 'https://www.youtube.com/@mighty_fox_com', target: '_blank', icon: 'icon-youtube' },
    { link: 'https://www.linkedin.com/company/mighty-fox-com/', target: '_blank', icon: 'icon-linkedin2' },
]

const HeaderTopRight = () => {
    return (
        <ul className="header-info">
            <li><a href="tel:+33609346238"><i className="icon-phone"></i>Tel: 06 09 34 62 38</a></li>
            <li><a href="mailto:contact@mighty-fox.com" rel="noreferrer" target="_blank"><i className="icon-envelope"></i>Email: contact@mighty-fox.com</a></li>
            <li className="social-icon">
                {social_share.map((social, i) => (
                    <a key={i} href={social.link} target={social.target ? social.target : ''} className={`${social.color}`}>
                        <i className={social.icon}></i>
                    </a>
                ))}
            </li>
        </ul>
    )
}

export default HeaderTopRight;