import React from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client'

// accept the footerBanner property here imported from the index.js
// with ":" we destructure the properties form footerBanner, so we do not need to use footerBanner.discount, footerBanner.largeText1, etc.. inside the html tags
const FooterBanner = ({footerBanner : {discount, largeText1, largeText2, saleTime, buttonText, image, product, desc, smallText, midText} }) => {
  return (
    <div className="footer-banner-container">
      <div className="left">
        {/* the p tag is going to render the discount coming from sanity banner elements*/}
        <p>{saleTime}</p>
        <p>{discount}</p>
        <h1>{largeText1}</h1>
        <h2>{largeText2}</h2>
        <div className="buttonBox"> 
          {/* dynamic link for the product */}
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
      </div>
      <div className="right">
        <p>{smallText}</p>
        <h3>{midText}</h3>
        <p>{desc}</p>
        <div className="imageBox">
          <img src={urlFor(image)} className="footer-banner-image"/>
        </div>
      </div>
    </div>
  )
}

export default FooterBanner;