
import React from 'react';
/* Head is the same thing, as head is in html
which is located above the body and gives us metadata for the website */
import Head from  'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>JS Binkaboooo Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
