const brand_contents = {
    pre_title: 'Notre Veille',
    title: 'Nos technologies du moment',
    text: 'Nous explorons sans cesse de nouvelles technologies pour déterminer avec vous celles répondant le mieux à vos enjeux.',
    brands: [
        'assets/images/brand/logo-next-js.webp',
        'assets/images/brand/logo-react-js.webp',
        'assets/images/brand/logo-firebase.webp',
        'assets/images/brand/logo-node-js.webp',
        'assets/images/brand/logo-google-analytics.webp',
        'assets/images/brand/logo-amazon-web-services.webp',
        'assets/images/brand/logo-shopify.webp',
        'assets/images/brand/logo-wordpress.webp'
        ]
}

const { pre_title, title, text, brands } = brand_contents;

const BrandArea = () => {
    return (
        <div className="edu-brand-area brand-area-1 gap-top-equal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="brand-section-heading">
                            <div className="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                <span className="pre-title">{pre_title}</span>
                                <h2 className="title">{title}</h2>
                                <span className="shape-line"><i className="icon-19"></i></span>
                                <p>{text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="brand-grid-wrap">
                            {brands.map((b, i) => (
                                <div key={i} className="brand-grid">
                                    <img src={b} alt="Brand Logo" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandArea;