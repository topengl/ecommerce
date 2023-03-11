/*The _app file is called during each page initialization. 
Within the _app file you can fully control the page initialization process 
by implementing custom logic 
to make your pages consistent across your web property. */
import { Layout } from '../components';
import '@/styles/globals.css';
import {StateContext } from '../context/StateContext';
 import { Toaster } from 'react-hot-toast'; // is a module that helps providing pop ups on a website

function MyApp({ Component, pageProps }) 
{
  return(
    //to have the state values from context/StateContext.js available, we wrap Layout in StateContext
    <StateContext>
      <Layout>
        <Toaster />
        {/* How to we make that Component appear inside our Layout in React? -> Through a prop children */}
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

  export default MyApp