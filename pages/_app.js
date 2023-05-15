/*The _app file is called during each page initialization. 
Within the _app file you can fully control the page initialization process 
by implementing custom logic 
to make your pages consistent across your web property. */
import { Layout } from '../components';
import '@/styles/globals.css';
import {StateContext } from '../context/StateContext';
import { Toaster } from 'react-hot-toast'; // is a module that helps providing pop ups on a website
import CookieConsent from 'react-cookie-consent';

function MyApp({ Component, pageProps }) 
{
  return(
    //to have the state values from context/StateContext.js available, we wrap Layout in StateContext
    <StateContext>
      <Layout>
        <Toaster />
        {/* How to we make that Component appear inside our Layout in React? -> Through a prop children */}
        <Component {...pageProps} />
        <CookieConsent
          location="bottom"
          buttonText="ok"
          cookieName="myAwesomeCookieName2"
          style={ { background: "var(--background-all-2)",
                    color: "var(--color-all)" }}
          buttonStyle={{  color: "var(--color-all)", 
                          fontSize: "13px",
                          background: "var(--bright-red)"}}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          <span style={{ fontSize: "10px" }}> ... </span>
      </CookieConsent>
      </Layout>
    </StateContext>
  )
}

  export default MyApp