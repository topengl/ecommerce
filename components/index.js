// export default keyword: The export default keyword is used to export a single default module from a file. We can only use it to export one default export per file, and we can import it using any name we want in other files.
// export keyword from one the one of the same files would be ignored, if we use a different name
export {default as Footer} from './Footer';
export {default as FooterBanner} from './FooterBanner';
export {default as Layout} from './Layout';
export {default as Navbar} from './Navbar';
export {default as Product} from './Product';
export {default as Cart_jsx} from './Cart';