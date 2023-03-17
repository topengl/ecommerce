// the api folder is our server.
// api folde is not gonne be renered for frontend
// inside of a next js app we do not have a need for a special a nod and express server
import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    //console.log(req.body);
    try {
      // Create Checkout Sessions from body params.
      // first we need to understand which products the users have selected in the application
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        'payment_method_types[]': 'card',  // has to be an array!!! 'payment_method_types[]': 'card' or payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          {shipping_rate: 'shr_1MmeB4IqMUPKyHZC4GmnvGig'},
          {shipping_rate: 'shr_1MmaIeIqMUPKyHZCAgMnictF'},
        ],
        line_items: req.body.map((item) => {
          const img = item.image[0].asset._ref; // a reference to the image deployed on sanity // it is not a real image right here
          const newImage = img.replace('image-', 'https://cdn.sanity.io/images/bltyehdt/production/').replace('-jpg','.jpg') // we want to replace 'image-' with the URL
          //console.log('IMAGE', newImage);

          return {
            price_data: { //In Stripe, price_data is an object used to define the pricing and product information for a particular product. It is used in combination with the price attribute to define the price of a product.
              currency: 'usd',
              product_data: {
                name:  item.name,
                images: [newImage],
              },
              unit_amount: item.price * 100,
            },
            adjustable_quantity: { // In Stripe, adjustable_quantity is an attribute used to specify whether the quantity of a product can be adjusted by the customer at checkout time. When this attribute is set to true, the customer will be able to adjust the quantity of the product they are purchasing before completing the checkout process.
              enabled:true,
              minimum:1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      };

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}