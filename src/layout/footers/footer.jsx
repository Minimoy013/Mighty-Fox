import Link from "next/link";
import FooterSocial from "./component/footer-social";

const footer_contents = {
    logoLight: '/assets/images/logo/logo-dark.png',
    logoDark: '/assets/images/logo/logo-white.png',
    desc: 'Agence web spécialiste en Web Marketing, de la création de site internet et en design graphique.',
    add: '26 rue Boris Vian, 13730 SAINT VICTORET',
    call: '+33 6 09 34 62 38',
    email: 'info@mighty-fox.com',
    widgets: [
        {
            col: '3',
            class: 'explore-widget',
            widget_title: 'Formation en Ligne',
            footer_links: [
                { link: '/#', title: 'Cours' },
                { link: '/#', title: 'Formateurs' }
            ]
        },
        {
            col: '2',
            class: 'quick-link-widget',
            widget_title: 'Liens',
            footer_links: [
                { link: 'contact-us', title: 'Contactez-Nous' },
                { link: 'blog-standard', title: 'Blog' },
                { link: 'faq', title: "FAQ" },
                { link: '/mentions-legales', title: "Mentions Légales" }
            ]
        }
    ]

}

const { logoDark, logoLight, desc, add, call, email, widgets } = footer_contents;

const Footer = ({ style_2, dark_bg,home_4 }) => {
    return (
        <footer className={`edu-footer ${style_2 ? style_2 : dark_bg ? 'footer-dark bg-image footer-style-3' : "footer-lighten bg-image footer-style-1"}`}>
            <div className={`footer-top ${style_2 ? "footer-top-2" : ""}`}>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <div className="edu-footer-widget">
                                <div className="logo">
                                    <Link href={'/'}>
                                        <a>
                                            {!dark_bg && <>
                                                {!style_2 && <img className="logo-light" src={logoLight} alt="Logo Mighty Fox" />}
                                                <img className="logo-dark" src={logoDark} alt="Logo Mighty Fox" />
                                            </>}
                                        </a>
                                    </Link>

                                    <Link href={'/'}>
                                        <a>
                                            {dark_bg && <img className="logo-light" src={home_4?'/assets/images/logo/logo-white.png' :'/assets/images/logo/logo-light-2.png'} alt="Logo Mighty Fox" />}
                                        </a>
                                    </Link>
                                </div>

                                <p className="description">{desc}</p>
                                <div className="widget-information">
                                    <ul className="information-list">
                                        <li><span>Add:</span>{add}</li>
                                        <li><span>Call:</span><a href="tel:+33609346238">{call}</a></li>
                                        <li><span>Email:</span><a href="mailto:info@ighty-fox.com" rel="noreferrer" target="_blank">{email}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {widgets.map((w, i) => (
                            <div key={i} className={`col-lg-${w.col} col-sm-6`}>
                                <div className={`edu-footer-widget ${w.class}`}>
                                    <h4 className="widget-title">{w.widget_title}</h4>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            {w.footer_links.map((l, i) => <li key={i}><Link href={`/${l.link}`}><a>{l.title}</a></Link></li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-4 col-md-6">
                            <div className="edu-footer-widget">
                                <h4 className="widget-title">Contacts</h4>
                                <div className="inner">
                                    <p className="description">Entrez votre adresse email address recevoir les nouvelles formations gratuites</p>
                                    <div className="input-group footer-subscription-form">
                                        <input type="email" className="form-control" placeholder="Votre email" />
                                        <button className={`edu-btn ${dark_bg && !home_4?'btn-secondary':''} btn-medium`} type="button">Souscrire <i className="icon-4"></i></button>
                                    </div>
                                    <ul className="social-share icon-transparent">
                                        <FooterSocial/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <p>© Copyright 2016-{new Date().getFullYear()}. Designed By <a href="https://mighty-fox.com" rel="noreferrer" target="_blank">Mighty Fox</a>. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;