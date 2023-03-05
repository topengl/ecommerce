import React from 'react'
import Link from 'next/link'

import {urlFor} from '../lib/client'

// accept the footerBanner property here imported from the index.js
// with ":" we destructure the properties form footerBanner, so we do not need to use footerBanner.discount, footerBanner.largeText1, etc.. inside the html tags
const FooterBanner = ({footerBanner : {discount, largeText1, largeText2, saleTime, buttonText, image, product, desc, smallText, midText} }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          {/* the p tag is going to render the discount coming from sanity banner elements*/}
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h2>{largeText2}</h2>
          <p>{ saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          {/* dynamic link for the product */}
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>
        <img src={urlFor(image)} className="footer-banner-image"/>
      </div>
    </div>
  )
}

export default FooterBanner