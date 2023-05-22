import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClientApi = sanityClient({
    // project id, to know which project to connect with
    projectId: 'bltyehdt',
    // dataset to know if we are in production or development
    dataset: 'production',
    // the version we the api has which we use
    apiVersion: '2023-02-27',
    useCdn: true,
    // the token is imported from https://www.sanity.io/manage/personal/project/bltyehdt/api
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

// to be able to use the sanity images
const builder = imageUrlBuilder(sanityClientApi);

// sanity gives access to the sources, where the images are stored
// we get source from the callback function
export const urlForImage = (source) => builder.image(source);
