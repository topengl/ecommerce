import React from "react";
import Head from "next/head"; /* Head is the same thing, as head is in html which is located above the body and gives us metadata for the website */
import Navbar from "./Navbar";
import Footer from "./Footer";



const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>SunPower</title>
      </Head>

      <header>
        {/* The <header> element represents a container for introductory content or a set of navigational links.
            A <header> element typically contains:
            one or more heading elements (<h1> - <h6>)
            logo or icon
            authorship information
            Note: You can have several <header> elements in one HTML document. However, <header> cannot be placed within a <footer>, <address> or another <header> element. */}
        <Navbar />
      </header>

      <main className="main-container">
        {children}

      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
