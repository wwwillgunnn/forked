import { describe, expect, it } from 'vitest';
import Page from './+page.svelte';
import { page } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';

describe('+page.svelte', () => {
	it('renders the discover hero', async () => {
		await render(Page);

		await expect
			.element(page.getByRole('heading', { name: 'Discover Food' }))
			.toBeInTheDocument();
		await expect.element(page.getByText('Find something worth eating.')).toBeInTheDocument();
	});

	it('renders the craving search input', async () => {
		await render(Page);

		await expect
			.element(page.getByPlaceholder('What are you craving?'))
			.toBeInTheDocument();
	});

	it('renders popular food categories', async () => {
		await render(Page);

		await expect.element(page.getByText('Popular right now')).toBeInTheDocument();
		for (const food of ['Burgers', 'Ramen', 'Pizza', 'Croissant', 'Sushi', 'Coffee']) {
			expect(
				page.getByRole('link', { name: new RegExp(food) }).elements().length
			).toBeGreaterThanOrEqual(1);
		}
	});

	it('renders the all food browse grid', async () => {
		await render(Page);

		await expect.element(page.getByRole('heading', { name: /All food/ })).toBeInTheDocument();
		expect(page.getByRole('link', { name: 'Cocktails' }).elements().length).toBeGreaterThanOrEqual(
			1
		);
	});
});