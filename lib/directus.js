import { createDirectus, rest } from '@directus/sdk';
const apiUrl = process.env.NEXT_PUBLIC_ENDPOINT;
const directus = createDirectus(apiUrl).with(rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  }));

export default directus;