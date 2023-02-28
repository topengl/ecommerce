import React from 'react'

import {client} from '../lib/client';
import {FooterBanner, HeroBanner, Product} from '../components';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best selling products.</h2>
        <p>Speakers of many variatons.</p>
      </div>
      <div className="products-container">
        {['product1', 'product2'].map((product)=>product)}
      </div>

      <FooterBanner />

    </>
  )
}

export default Home