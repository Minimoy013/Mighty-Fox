import React from 'react';
import { useState } from 'react';
import ImageLightBox from '../common/popup-modal/image-lightbox';

const gallery_items = [
    { img: '/assets/images/gallery/affiche-bourse-aux-monnaies.jpg', category: 'Print' },
    { img: '/assets/images/gallery/logo-marignane-numismate.jpg', category: 'Logo' },
    { img: '/assets/images/gallery/site-internet-suadeo.fr.jpg', category: 'Site Internet' },
    { img: '/assets/images/gallery/salon-big-data-suadeo.jpg', category: 'Print' },
    { img: '/assets/images/gallery/Recherche_UI-UX.jpg', category: 'UX / UI' },
    { img: '/assets/images/gallery/vaiarello-loic-okaluda-aurignac-boite-3d-2.jpg', category: 'Illustration' },
    { img: '/assets/images/gallery/site-internet-ouverturehabitat.com.jpg', category: 'Site Internet' },
    { img: '/assets/images/gallery/vaiarello-loic-autumn-mokup.jpg', category: 'Illustration' },
    { img: '/assets/images/gallery/Recherche_UI-UX_dashboard.jpg', category: 'UX / UI' }

]

const uniqueItems = gallery_items.filter( (arr, index, self) =>
    index === self.findIndex( ( i ) => ( i.img === arr.img && i.State === arr.State ) )
)

const uniq_categories = ['Tout voir', ...new Set( gallery_items.map( item => item.category ) ) ]

const GalleryArea = () => {
    const [items, setItems] = useState(uniqueItems);
    // category
    const [category, setCategory] = useState('Tout voir');
    // photoIndex
    const [photoIndex, setPhotoIndex] = useState(null);
    // image open state
    const [open, setOpen] = useState(false);
    // images
    const images = items.map(item => item.img)
    // handleCategory
    const handleCategory = (category) => {
        setCategory(category)
        if (category === 'Tout voir') {
            setItems(uniqueItems)
        } else {
            setItems(gallery_items.filter(item => item.category === category))
        }
    }
    // handleImagePopup
    const handleImagePopup = (index) => {
        setPhotoIndex(index)
        setOpen(true)
    }

    return (
        <>
            <div className="edu-gallery-area edu-section-gap">
                <div className="container">
                    <div className="isotope-wrapper">
                        <div className="isotop-button button-transparent isotop-filter">
                            {uniq_categories.map((c, i) => (
                                <button key={i} onClick={() => handleCategory(c)}
                                className={`${category === c ? 'is-checked' : ''}`}>
                                    <span className="filter-text">{c}</span>
                                </button>
                            ))}
                        </div>
                        <div className="isotope-list gallery-grid-wrap">
                            <div id="animated-thumbnials" className="edublink-react-gallery-grid">
                                <div className="row g-5">
                                    {items.map((item, i) => (
                                        <div key={i} className="col-lg-4 col-md-6" style={{ cursor: 'pointer' }}>
                                            <div onClick={()=> handleImagePopup(i)} className="edu-popup-image edu-gallery-grid w-100">
                                                <div className="thumbnail">
                                                    <img className='w-100' src={item.img} alt="Gallery Image" />
                                                </div>
                                                <div className="zoom-icon">
                                                    <i className="icon-69"></i>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* image light box start */}
            <ImageLightBox images={images} open={open} setOpen={setOpen}
                photoIndex={photoIndex} setPhotoIndex={setPhotoIndex} />
            {/* image light box end */}
        </>
    )
}

export default GalleryArea;