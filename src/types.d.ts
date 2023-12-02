import type { SORT_ALPHA, SORT_TIER } from 'src/constants/sort';

// GENERIC TYPES
export type GenericEntry = {
	name: string;
	url: string;
}

export type Sprites = {
	standard: string;
	classic: string;
}

export type Stat = {
	name: string;
	base_stat: number;
	url: string;
}

export type PossibleTiers = 1 | 2 | 3 | 4 | 5 | 6;


// FILTERS
export type Filters = {
	applyFilters: boolean,
	applySorting: boolean,
	tiers: TierFilter;
	name: string;
	sortAlpha: OrderByAlphaFilter;
	sortTier: OrderByTierFilter;
}

export type TierFilter = PossibleTiers[];

// https://www.typescriptlang.org/docs/handbook/2/keyof-types.html
export type OrderByAlphaFilter = typeof SORT_ALPHA[keyof typeof SORT_ALPHA];

export type OrderByTierFilter = typeof SORT_TIER[keyof typeof SORT_TIER];


// API RESPONSE
export type API = {
	code: number;
	message: string;
	content: Food | Food[] | Pack | Pack[] | Pet | Pet[] | Token | Token[] | Toy | Toy[];
	description: string;
	documentationURL: string;
}

export type Model = Food | Pet | Pack | Token | Toy;

// FOODS
export type Food = {
	_id: string;
	name: string;
	shop_tier: ShopTier;
	sources: Source[];
	effect: string;
	perk: boolean;
	sprites: Sprites;
}

export type ShopTier = {
	shop_tier: PossibleTiers;
	url: string;
}

export type Source = {
	source: string;
	url: string;
}

// PACKS
export type Pack = {
	_id: string;
	name: string;
	sprite: string;
	pets: Pets;
	foods: Foods;
	description: string;
}

export type Foods = {
	tier_1_foods: GenericEntry[];
	tier_2_foods: GenericEntry[];
	tier_3_foods: GenericEntry[];
	tier_4_foods: GenericEntry[];
	tier_5_foods: GenericEntry[];
	tier_6_foods: GenericEntry[];
}

export type Pets = {
	tier_1_pets: GenericEntry[];
	tier_2_pets: GenericEntry[];
	tier_3_pets: GenericEntry[];
	tier_4_pets: GenericEntry[];
	tier_5_pets: GenericEntry[];
	tier_6_pets: GenericEntry[];
}

// PETS
export type Pet = {
	_id: string;
	name: string;
	tier_info: TierInfo;
	sprites: Sprites;
	abilities: Abilities;
	ability_trigger: GenericEntry;
	ability_target: AbilityTarget;
	type: GenericEntry;
	stats: Stat[];
	packs: GenericEntry[];
}

export type Abilities = {
	lv1_ability: string;
	lv2_ability: string;
	lv3_ability: string;
}

export type AbilityTarget = {
	name: string;
	url: string[];
}

export type TierInfo = {
	tier: PossibleTiers;
	url: string;
}

// TOKENS
export type Token = {
	_id: string;
	name: string;
	tier_info: TierInfo;
	sprites: Sprites;
	abilities: Abilities;
	summoned_from: SummonedFrom;
	stats: Stats;
	notes: string;
}

export type Stats = {
	lv1_stats: Stat[];
	lv2_stats: Stat[];
	lv3_stats: Stat[];
}

export type SummonedFrom = {
	source: string;
	url: string;
}

// TOYS
export type Toy = {
	_id: string;
	name: string;
	tier_info: TierInfo;
	source: Source;
	ability_trigger: AbilityTrigger;
	abilities: Abilities;
	sprites: Sprites;
}

export type Abilities = {
	lv1_ability: string;
	lv2_ability: string;
	lv3_ability: string;
}

export type AbilityTrigger = {
	trigger: string;
	url: string;
}

export type Source = {
	name: string;
	url: string;
}
