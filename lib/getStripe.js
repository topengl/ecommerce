// we import the loadStripe ES Module // an ES Module An ES Module is a JavaScript module format introduced in ECMAScript 6 (ES6), also known as ES2015. ES Modules allow developers to organize their JavaScript code into reusable, modular components that can be shared across different files and even across different projects.
import { loadStripe } from '@stripe/stripe-js';

// loadStripe is a function provided by Stripe, a popular payment processing platform. It is a JavaScript method that allows you to load the Stripe API asynchronously, which means it doesn't block the loading of other elements on your web page.
// When you use loadStripe, you are essentially telling your web application to load the Stripe library in the background, while the rest of your application continues to load. Once the Stripe library has loaded, you can use it to create and manage payment transactions on your website.
// Once the Stripe library has been loaded, you can use the stripe object to create payment forms, handle payment events, and manage your customer's payment data.

let stripePromise;

const getStripe = () => {
    if(!stripePromise) {
        stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
}

export default getStripe; // "export default" is a syntax used in JavaScript to export a single default value from a module. When a module has a default export, it means that when the module is imported, the default value is the one that is imported by default.