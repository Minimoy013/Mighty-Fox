import React from 'react';

const social_share = [
    { link: 'https://www.facebook.com/mightyfox', target: '_blank', icon: 'icon-facebook',},
    { link: 'https://www.youtube.com/@mighty_fox_com', target: '_blank', icon: 'icon-youtube', },
    { link: 'https://www.linkedin.com/company/mighty-fox-enterprise', target: '_blank', icon: 'icon-linkedin2'},
];

export const SocialShare = () => {
    return (
        <>
            {social_share.map((social, i) => (
                <li key={i}><a href={social.link} target={social.target ? social.target : ''}>
                <i className={social.icon}></i>
                </a></li>
            ))}
        </>
    )
}
