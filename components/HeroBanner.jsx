import React from 'react';
import Link from 'next/link';

// import the urlFor property for images
import {urlFor} from '../lib/client';

// accept a heroBanner prop inside here and use it
const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <img src={urlFor(heroBanner.image)} alt="HeroBanner" className="hero-banner-image" />
          <div className="hero-banner-text-left">
            <p className="small-text">{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
          </div>    
        <div>
          <Link href={`/product/${heroBanner.product}`}>  {/* topin: the link has to be the same as for the product. pros and cons for using aditional banner content, then fetch data from the Product content? */}
          {/*<Link href='/product/flexible_100w_photovoltaic_module'>*/}
              <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;