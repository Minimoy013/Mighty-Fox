import React from 'react';
import { motion } from 'framer-motion';
import { useMouseMoveUI } from '../../../contexts/mouse-move-context';

const CtaArea = () => {
    const { mouseDirection, mouseReverse } = useMouseMoveUI();
    return (
        <div className="home-one-cta-two cta-area-1">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="home-one-cta edu-cta-box bg-image">
                            <div className="inner">
                                <div className="content text-md-end">
                                    <span className="subtitle">Ecrivez-nous :</span>
                                    <h3 className="title">
                                        <a href="mailto:contact@mighty-fox.com">contact@mighty-fox.com</a>
                                    </h3>
                                </div>
                                <div className="sparator">
                                    <span>ou</span>
                                </div>
                                <div className="content">
                                    <span className="subtitle">Téléphonez-Nous :</span>
                                    <h3 className="title">
                                        <a href="tel:+33609346238">+33 609 346 238</a>
                                    </h3>
                                </div>
                            </div>
                            <ul className="shape-group">
                                <motion.li className="shape-01 scene"
                                    animate={ {
                                        x: mouseReverse(50).x,
                                        y: mouseReverse(50).y
                                    } }
                                >
                                    <img src="/assets/images/cta/shape-06.png" alt="shape" />
                                </motion.li>
                                <motion.li className="shape-02 scene"
                                    animate={ {
                                        x: mouseDirection(50).x,
                                        y: mouseDirection(50).y
                                    } }
                                >
                                    <img src="/assets/images/cta/shape-12.png" alt="shape" />
                                </motion.li>
                                <motion.li className="shape-03 scene"
                                    animate={ {
                                        x: mouseDirection(50).x,
                                        y: mouseDirection(50).y
                                    } }
                                >
                                    <img src="/assets/images/cta/shape-04.png" alt="shape" />
                                </motion.li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaArea;