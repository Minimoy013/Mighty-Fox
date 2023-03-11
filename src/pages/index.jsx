// import HomeMain from '../components/homes/home';
import HomeMain from '../components/homes/home/index.jsx';
import SEO from '../components/seo';
import { Wrapper } from '../layout';

export default function Home() {
    return (
        <Wrapper>
            <SEO pageTitle={'Accueil'} />
            <HomeMain />
        </Wrapper>
    )
}