import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'cw2mjpry',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skbjAxRYpRSfJ5MO9CDaL490BCUUCKbbN68Z6ibva7WOm27YYD7RbFli7i5PGPNGxEy9FZnfuIPKuPRzMR4HHbFqIY6TA4sPyJZX3aMIweIxqj2jP5a5QjoPW8phYpnP1VO6lyGzVjcbqjysyb82aNowrlohSMYss1obDkhWoRcAbvvnb3kS',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);