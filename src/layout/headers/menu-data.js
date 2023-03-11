const menu_data = [
    {
        title: 'Accueil',
        link: '/',
        single_menu: true,
 
    },
    {
        title: 'Services',
        link: '#',
        mega_menu: true,
        submenus: [
            {
                title: 'Inner Pages',
                mega_submenu: [
                    { title: 'About Us 1', link: '/about-1' },
                    { title: 'About Us 2', link: '/about-2' },
                    { title: 'About Us 3', link: '/about-3' },
                    { title: 'Instructor 1', link: '/team-1' },
                    { title: 'Instructor 2', link: '/team-2' },
                    { title: 'Instructor 3', link: '/team-3' },
                    { title: 'Instructor Profile', link: '/team-details' },
                    { title: 'Pricing Table', link: '/pricing-table' }
                ]
            },
            {
                title: 'Inner Pages',
                mega_submenu: [
                    { title: 'Gallery Grid', link: '/gallery-grid' },
                    { title: 'Gallery Masonry', link: '/gallery-masonry' },
                    { title: 'Event Grid', link: '/event-grid' },
                    { title: 'Event List', link: '/event-list' },
                    { title: 'Event Details', link: '/event-details' },
                    { title: 'Purchase Guide', link: '/purchase-guide' },
                    { title: "404 Error", link: '/404' },
                    { title: "Coming Soon", link: '/coming-soon' }
                ]
            },
            {
                title: 'Inner Pages',
                mega_submenu: [
                    { title: "Faq's", link: '/faq' },
                    { title: 'Privacy Policy', link: '/privacy-policy' },
                    { title: 'Terms & Condition', link: '/terms-condition' },
                    { title: 'Sign In', link: '/sign-in' },
                    { title: 'Cart', link: '/cart' },
                    { title: 'Wishlist', link: '/wishlist' },
                    { title: 'Checkout', link: '/checkout' }
                ]
            }
        ],
        mobile_pages_menu: [
            { title: 'About Us 1', link: '/about-1' },
            { title: 'About Us 2', link: '/about-2' },
            { title: 'About Us 3', link: '/about-3' },
            { title: 'Instructor 1', link: '/team-1' },
            { title: 'Instructor 2', link: '/team-2' },
            { title: 'Instructor 3', link: '/team-3' },
            { title: 'Instructor Profile', link: '/team-details' },
            { title: "Faq's", link: '/faq' },
            { title: "404 Error", link: '/404' },
            { title: "Coming Soon", link: '/coming-soon' },
            { title: 'Gallery Grid', link: '/gallery-grid' },
            { title: 'Gallery Masonry', link: '/gallery-masonry' },
            { title: 'Event Grid', link: '/event-grid' },
            { title: 'Event List', link: '/event-list' },
            { title: 'Event Details', link: '/event-details' },
            { title: 'Pricing Table', link: '/pricing-table' },
            { title: 'Purchase Guide', link: '/purchase-guide' },
            { title: 'Privacy Policy', link: '/privacy-policy' },
            { title: 'Terms & Condition', link: '/terms-condition' },
            { title: 'Sign In', link: '/sign-in' },
            { title: 'Shop', link: '/shop' },
            { title: 'Product Details', link: '/product-details' },
            { title: 'Cart', link: '/cart' },
            { title: 'Wishlist', link: '/wishlist' },
            { title: 'Checkout', link: '/checkout' }
        ]
    },
    {
        title: 'Formations',
        link: '#',
        mega_menu: false,
        submenus: [
            { title: 'Course Style 1', link: '/course-style-1' },
            { title: 'Course Style 2', link: '/course-style-2' },
            { title: 'Course Style 3', link: '/course-style-3' },
            { title: 'Course Style 4', link: '/course-style-4' },
            { title: 'Course Style 5', link: '/course-style-5' },
            { title: 'Course Details 1', link: '/course-details' },
            { title: 'Course Details 2', link: '/course-details-2' },
            { title: 'Course Details 3', link: '/course-details-3' }
        ]
    },
    {
        title: 'Blog',
        link: '/blog-standard',
        single_menu: true,
 
    },
    {
        title: 'Contact',
        link: 'contact-us',
        single_menu: true,
 
    },
]
 
export default menu_data;