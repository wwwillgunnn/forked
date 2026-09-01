import { config } from '@repo/eslint-config';

export default [
	...config,
	{
		// shadcn-svelte-generated components keep literal hrefs by default;
		// navigation resolution is handled at the app layer instead.
		files: ['src/lib/components/ui/**/*.svelte'],
		rules: {
			'svelte/no-navigation-without-resolve': 'off'
		}
	}
];