import Head from 'next/head'

export function Seo(){

    return (
        <div>
            <h3>hello</h3>
            <Head>
                {/*Open Graph*/}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Web Symbols Code"/>
                <meta data-react-helmet="true" property="og:image" content="img/WSCwhite.png"/>

                <meta property="og:description" content="Find the most used symbols easily with web symbols, find the symbol, copy your code, favorite your symbol, create personalized folders, everything to make your work easier!"/>

                <meta property="og:url" content="https://web-symbols-code.vercel.app/"/>
                <title>Web Symbols Code</title>
            </Head>
        </div>
    );
}

