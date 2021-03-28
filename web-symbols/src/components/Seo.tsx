import Head from 'next/head'

export function Seo(){

    return (
        <div>
            <h3>hello</h3>
            <Head>
                <meta name="google-site-verification" content="Z-UjI3t9GdfNDXgiH3K-rd3B3prJrkZ3TLm0M1e1xVM" />

                {/*Open Graph*/}
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Web Symbols Code"/>
                <meta data-react-helmet="true" property="og:image" content="https://web-symbols-code.vercel.app/img/WSCwhite.png"/>

                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta data-react-helmet="true" property="twitter:image" content="https://web-symbols-code.vercel.app/img/WSCwhite.png"/>

                <meta property="og:description" content="Find the most used symbols easily with web symbols, find the symbol, copy your code, favorite your symbol, create personalized folders, everything to make your work easier!"/>

                <meta property="og:url" content="https://web-symbols-code.vercel.app/"/>
                <title>Web Symbols Code</title>
            </Head>
        </div>
    );
}

