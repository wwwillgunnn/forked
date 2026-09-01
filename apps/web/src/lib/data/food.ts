export type FoodCategory = {
	name: string;
	emoji: string;
	places: number;
	city: string;
	gradient: string;
};

export type FoodTab = {
	label: string;
	value: string;
};

export const foodTabs: FoodTab[] = [
	{ label: 'Popular', value: 'popular' },
	{ label: 'Cuisines', value: 'cuisines' },
	{ label: 'Meals', value: 'meals' },
	{ label: 'Drinks', value: 'drinks' },
	{ label: 'Desserts', value: 'desserts' }
];

export const popularFoods: FoodCategory[] = [
	{ name: 'Burgers', emoji: '🍔', places: 248, city: 'Sydney', gradient: 'from-[#f7c948]/70 to-[#e08a3c]/70' },
	{ name: 'Ramen', emoji: '🍜', places: 86, city: 'Sydney', gradient: 'from-[#f3a967]/70 to-[#c8533a]/70' },
	{ name: 'Pizza', emoji: '🍕', places: 192, city: 'Sydney', gradient: 'from-[#f2c75c]/70 to-[#d94336]/60' },
	{ name: 'Croissant', emoji: '🥐', places: 71, city: 'Sydney', gradient: 'from-[#e8c9a0]/80 to-[#c98a4b]/70' },
	{ name: 'Sushi', emoji: '🍣', places: 143, city: 'Sydney', gradient: 'from-[#a8c3a0]/70 to-[#5f8f5a]/60' },
	{ name: 'Coffee', emoji: '☕', places: 421, city: 'Sydney', gradient: 'from-[#d9b48f]/80 to-[#8a5a33]/70' }
];

export const allFoods: string[] = [
	'Burgers',
	'Ramen',
	'Pizza',
	'Pasta',
	'Steak',
	'Sushi',
	'Tacos',
	'Burritos',
	'Banh Mi',
	'Pho',
	'Dumplings',
	'Fried Chicken',
	'Curry',
	'Noodles',
	'Kebab',
	'Sandwiches',
	'Acai',
	'Pancakes',
	'Waffles',
	'Eggs',
	'Croissant',
	'Doughnuts',
	'Ice Cream',
	'Cake',
	'Coffee',
	'Matcha',
	'Bubble Tea',
	'Cocktails'
];