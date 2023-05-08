import React from 'react';
import Link from 'next/link'; // we gonna use that to link to the product details page

import {urlFor} from '../lib/client'; // we gonna use that to get the urla for the image inside our sanity dashboard

// destructure some things from inside of our product with ":""
// like that we are ready to return some jsx
const Product = ({ product: {image, name, slug, price} }) => 
{
  return (
  <div>
    <Link href={`/product/${slug.current}`}> {/* the square brackets in the file name [] make the file name dynamic dynamic -> next js is going to dynamically render the name */}
      <div className="product-card">
        <img
          className="product-image"
          width={250}
          height={250}
          src={urlFor(image && image[0])}
        />
        <p className="produdct-name">{name}</p>
        <p className="produdct-price">${price}</p>
      </div>
    </Link>
  </div>
  )
}

export default Product