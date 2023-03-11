import React from 'react';
import Link from 'next/link';

// import the urlFor property for images
import {urlFor} from '../lib/client';

// accept a heroBanner prop inside here and use it
const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
        <div>
            <img src={urlFor(heroBanner.image)} alt="Headphones" className="hero-banner-image" />
            <p className="small-text">{heroBanner.smallText}</p>
            <h3>{heroBanner.midText}</h3>
            <h1>{heroBanner.largeText1}</h1>
            
            <div>
                <Link href={`/product/ID${heroBanner.product}`}>
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