const social_share = [
    { link: 'https://www.facebook.com/mightyfox', target: '_blank', icon: 'icon-facebook', color: 'color-fb' },
    { link: 'https://www.linkedin.com/company/mighty-fox-enterprise/', target: '_blank', icon: 'icon-linkedin2', color: 'color-linkd' },
    { link: 'https://www.youtube.com/', target: '_blank', icon: 'icon-youtube', color: 'color-yt' }
]

import React from 'react';

const FooterSocial = () => {
    return (
        <>
            {social_share.map((social, i) => (
                <li key={i}><a href={social.link} target={social.target ? social.target : ''} className={`${social.color}`}>
                <i className={social.icon}></i>
                </a></li>
            ))}
        </>
    )
}

export default FooterSocial;