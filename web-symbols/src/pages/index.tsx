import Head from 'next/head'
import React from 'react';
import { Seo } from '../components/Seo';



export default function Home() {
  return (
    <div>
      <Seo/>

      <Head>
        <title>Web Symbols Code</title>
      </Head>


      <h1>hello bicho</h1>
    </div>
  )
}
