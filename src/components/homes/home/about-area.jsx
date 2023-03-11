import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const tabs = {
    title:[
        {
            active:true,target:'about-value',title:'Valeurs'
        },
        {
            target:'about-mission',title:'Mission'
        },
        {
            target:'about-vision',title:'Vision'
        }
    ],
    content:[
        {
            show:true,
            id:'about-value',
            desc:"Quels que soient votre taille, votre secteur, votre implantation, votre métier, votre budget. Nous mettrons tout en oeuvre pour obtenir des résultats pour vous. Nous sommes curieux, travailleurs et résilients ! Nous donnerons tout et nous ne vous laisserons jamais sans réponses.",
            feature_list: [
                'Curieux',
                'Travailleurs',
                'Résilients'
            ]
        },
        {
            id:'about-mission',
            desc:"Concevoir une stratégie adaptée et efficace, pour vous aider à transformer vos prospects en clients convaincus.",
            feature_list:[
                'Attirer',
                'Convertir',
                'Engager',
                'Fidéliser'
            ]
        },
        {
            id:'about-vision',
            desc:"Donner une place de choix à l’intelligence collective et à la créativité. Rester agile pour avancer sereinement et produire vite. Se tenir en veille pour catcher les tendances et les innovations, le monde et ses besoins.",
            feature_list: [
                'Idées',
                'Efficacité',
                'Réalité'
            ]
        }
    ]
}

const AboutArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="edu-about-area about-style-3">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6" data-sal-delay="50" data-sal="slide-up" data-sal-duration="800">
                        <div className="about-content">
                            <div className="section-title section-left">
                                <span className="pre-title">à propos de nous</span>
                                <h2 className="title">Notre savoir faire au <span className="color-primary">Service</span> de votre Entreprise</h2>
                                <span className="shape-line">
                                    <i className="icon-19"></i>
                                </span>
                            </div>
                            <ul className="nav nav-tabs" role="tablist"> 
                                {
                                    tabs.title.map((t,i) => (
                                        <li key={i} className="nav-item" role="presentation">
                                            <button className={`nav-link ${t.active?'active':''}`} data-bs-toggle="tab" data-bs-target={`#${t.target}`} type="button" role="tab" tabIndex={'-1'} aria-selected={t.active?"true":'false'}> {t.title}</button>
                                        </li>
                                    ))
                                } 
                            </ul>
                            <div className="tab-content"> 
                                {tabs.content.map((item,i) => { const {desc,feature_list,id,show} = item; 
                                    return (
                                        <div key={id} className={`tab-pane fade ${show?"show active":""}`} id={id} role="tabpanel">
                                            <p>{desc}</p>
                                            <ul className="features-list"> {feature_list.map((l,i) => <li key={i}>{l}</li>)} </ul>
                                        </div> 
                                    )})
                                } 
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="main-img-1" data-sal-delay="100" data-sal="slide-up" data-sal-duration="800" src="/assets/images/about/about-04.webp" alt="About Image" />
                            <img className="main-img-2" data-sal-delay="100" data-sal="slide-left" data-sal-duration="800" src="/assets/images/about/about-05.webp" alt="About Image" />
                            <ul className="shape-group">
                                <motion.li className="shape-1 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-13.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-2 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseDirection(30).x,
                                        y: mouseDirection(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-39.png" alt="Shape" />
                                </motion.li>
                                <motion.li className="shape-3 scene" data-sal-delay="500" data-sal="fade" data-sal-duration="200"
                                    animate={ {
                                        x: mouseReverse(30).x,
                                        y: mouseReverse(30).y
                                    } }
                                >
                                    <img src="/assets/images/about/shape-07.png" alt="Shape" />
                                </motion.li>
                                <li className="shape-4" data-sal-delay="500" data-sal="fade" data-sal-duration="200">
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group">
                <li className="shape-5">
                    <img className="rotateit" src="/assets/images/about/shape-13.png" alt="Shape" />
                </li>
                <li className="shape-6">
                    <span></span>
                </li>
            </ul>
        </div>
    )
}

export default AboutArea;