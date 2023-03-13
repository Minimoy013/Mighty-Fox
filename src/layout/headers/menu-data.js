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
                title: 'Web Marketing',
                mega_submenu: [
                    { title: 'Audit & Conseils', link: '/#' },
                    { title: 'Print & Web Design', link: '/#' },
                    { title: 'Community Management', link: '/#' },
                    { title: 'Référencement SEO / SEO', link: '/#' },
                    { title: 'Web Analytics & Data', link: '/#' },
                    { title: 'Création de contenu', link: '/#' }
                ]
            },
            {
                title: 'Web Développement',
                mega_submenu: [
                    { title: 'Wix', link: '/#' },
                    { title: 'Wordpress', link: '/#' },
                    { title: 'React', link: '/#' },
                    { title: 'Symphony', link: '/#' },
                    { title: 'Shopify', link: '/#' },
                    { title: 'Woocommerce', link: '/#' }
                ]
            },
            {
                title: 'Formations',
                mega_submenu: [
                    { title: "PAO - Suite Adobe", link: '/#' },
                    { title: 'Utilisation des CMS', link: '/#' },
                    { title: 'SEO - SEA', link: '/#' },
                    { title: 'Utilisation des réseaux sociaux', link: '/#' },
                    { title: 'Design 3D - Blender', link: '/#' },
                    { title: 'Suite Burautique Office 365', link: '/#' }
                ]
            }
        ],
        mobile_pages_menu: [
            { title: "Faq's", link: '/faq' },
            { title: 'Privacy Policy', link: '/privacy-policy' },
            { title: 'Terms & Condition', link: '/terms-condition' }
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