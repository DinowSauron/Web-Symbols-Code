import Head from 'next/head'

export function Seo(){

    return (
        <div>
            <Head>
                {/*Open Graph*/}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Web Symbols Code"/>
                <meta property="og:image" content="WSCwhite.png"/>
                <meta property="og:image:width" content="350"/>
                <meta property="og:image:height" content="350"/>
                <meta property="og:description" content="Find the most used symbols easily with web symbols, find the symbol, copy your code, favorite your symbol, create personalized folders, everything to make your work easier!"/>

                {/* <meta property="og:url" content=""/> */}
            </Head>
        </div>
    );
}

