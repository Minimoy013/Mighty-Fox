import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
    <Head>
        <title>
            {pageTitle && `${pageTitle} || Web - Design - Formations`}
        </title>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="Créé par Mighty Fox" />
        <meta name="robots" content="noindex, follow" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {font && <link href={font} rel="stylesheet" />}
        <link rel="icon" href="/favicon.ico" />

        {/* <!-- Google tag (gtag.js) --> */}
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-141195271-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-141195271-1');
</script>
 
    </Head>
)

export default SEO;