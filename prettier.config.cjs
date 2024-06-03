// const styleguide = require('@vercel/style-guide/prettier');

// module.exports = {
//   ...styleguide,
//   plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
// };


import styleguide, { plugins as _plugins } from '@vercel/style-guide/prettier';

export default {
  ...styleguide,
  plugins: [..._plugins, 'prettier-plugin-tailwindcss'],
};
