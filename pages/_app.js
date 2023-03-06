/*The _app file is called during each page initialization. 
Within the _app file you can fully control the page initialization process 
by implementing custom logic 
to make your pages consistent across your web property. */
import { Layout } from '../components';
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) 
{
  return(
    <Layout>
      {/* How to we make that Component appear inside our Layout in React? -> Through a prop children */}
      <Component {...pageProps} />
    </Layout>
  )
}

  export default MyApp