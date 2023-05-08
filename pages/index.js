import React from 'react'

import {client} from '../lib/client';
import {FooterBanner, HeroBanner, Product} from '../components';

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner = {bannerData.length && bannerData[0] } /> {/* if bannerData Array exists, we gonna pass the first element of bannerData */}
      {/* console.log(bannerData) */}

      <div className="products-heading">
        <h2>Products</h2>
        <p>Flexible Photowoltaics for the balcony.</p>
      </div>

      <div className="products-container">
        {products?.map((product)=><Product key={product._id} product ={product}/>)}
      </div>

      {/* FooterBanner is a JSX element. The JSX element is here given the property footerBanner. The property gets returned bannerData[0], if bannerData exists. J*/}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />

    </>
  )
}

// to fetch data from an API or CMS we use getServerSideProps
export const getServerSideProps = async() => {
  //we have to form a sanity query
  // * fetch all
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // return an object, that use the props where we pass the products and bannerData
  return {
    props: {products, bannerData}
  }
}

export default Home