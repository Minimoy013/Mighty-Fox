import React from 'react';

const TeamArea = ({ team }) => {
    return (
        <div className="edu-team-details-area section-gap-equal">
            <div className="container">
                <div className="row row--40">
                    <div className="col-lg-4">
                        <div className="team-details-thumb">
                            <div className="thumbnail">
                                <img src={`/assets/images/team/team-02/${team.img}`} alt="team images" />
                            </div>

                            <ul className="social-share">
                                <li><a href="#"><i className="icon-share-alt"></i></a></li>
                                {team?.social_links?.map((social, i) => (
                                    <li key={i}>
                                        <a href={social.link} target={social.target ? social.target : ''}>
                                            <i className={social.icon}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="team-details-content">
                            <div className="main-info">
                                <span className="subtitle">Team Member</span>
                                <h3 className="title">{team?.name}</h3>
                                <span className="designation">{team?.title}</span>
                                <ul className="team-meta">
                                    <li><i className="icon-25"></i>18 Etudiants</li>
                                    <li>
                                        <div className="rating">
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                            <i className="icon-23"></i>
                                        </div>
                                        <span className="rating-count">(6 Notes)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bio-describe">
                                <h4 className="title">Ses Atouts</h4>
                                <p>Développeur web spécialisé sur le framework Symfony, plus rapide que la vitesse de l'éclair et plus agile que le chat de Schrödinger. Jordane est un excellent communicateur et travaille en étroite collaboration avec ses clients pour comprendre leurs besoins et leurs attentes.</p>
                                <p>Sa force est sa capacité à trouver des solutions créatives et innovantes pour chaque projet. Que vous ayez besoin d'une application web complexe ou d'un simple site vitrine, Jordane sera en mesure de créer une solution qui répondra parfaitement à vos besoins.</p>
                            </div>

                            <div className="contact-info">
                                <h4 className="title">Prenez contact</h4>
                                <ul>
                                    <li><span>Location:</span>Marseille</li>
                                    <li><span>Email:</span><a href="mailto:jordane.francois@mighty-fox.com" target="_blank" rel="noreferrer">jordane.francois@mighty-fox.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamArea;