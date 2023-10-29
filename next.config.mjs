/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import WithPwa from 'next-pwa';
await import('./src/env.mjs');

const withPWA = WithPwa({
	dest: 'public',
});

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	/**
	 * If you are using `appDir` then you must comment the below `i18n` config out.
	 *
	 * @see https://github.com/vercel/next.js/issues/41980
	 */
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
};

export default withPWA(config);
