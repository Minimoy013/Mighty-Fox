import React from 'react';
import { Footer, Header } from '../../../layout';
import AboutArea from './about-area';
import AdBanner from './ad-banner';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import CounterArea1 from './counter-area1';
import CoursesArea from './courses-area';
import CtaArea from './cta-area';
import HeroArea from './hero-area';
import TeamArea from './team-area';
import Testimonial from './testimonial';
import TopCategories from './top-categories';
import AboutArea2 from './about-area2';

const index = () => {
    return (
        <div className='sticky-header'>
            <div id="main-wrapper" className="main-wrapper">
                <Header/>
                <HeroArea/>
                <CounterArea1/>
                <TopCategories/>
                <AboutArea/>
                <CtaArea/>
                <BrandArea/>
                <AdBanner/>
                <Footer/>
            </div>
        </div>
    )
}

export default index;