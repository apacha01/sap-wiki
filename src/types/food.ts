export type Food = {
    _id:       string;
    name:      string;
    shop_tier: ShopTier;
    sources:   Source[];
    effect:    string;
    perk:      boolean;
    sprites:   Sprites;
}

export type ShopTier = {
    shop_tier: number;
    url:       string;
}

export type Source = {
    source: string;
    url:    string;
}

export type Sprites = {
    standard: string;
    classic:  string;
}
