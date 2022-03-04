import React from 'react';
import Head from 'next/head';
// import styles from '../styles/Layout.module.css'
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import { useRouter } from 'next/router';
// import Header from './nav (1)';
import { Footerfix } from '@styles/Event.styled';
export default function Layout({title,keywords,description,children}) {
  const router = useRouter();
  return (
    <>
    <div>
      <Head>
          <title>{title}</title>
          <meta name = 'description' content = {description} />
          <meta name = 'keywords' content = {keywords} />
      </Head>
      <Header />

      {router.pathname === '/' && <Showcase />}
     <div >
        {children}
    </div> 
    <Footerfix>
    <Footer/>
    </Footerfix>
    </div>
    
    </>
  );
}

Layout.defaultProps = {
    title:'Maersk feature request',
    description:'featute request application',
    keywords:'requests'
}

// className={styles.container}