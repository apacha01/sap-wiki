export type Toy = {
    _id:             string;
    name:            string;
    tier_info:       TierInfo;
    source:          Source;
    ability_trigger: AbilityTrigger;
    abilities:       Abilities;
    sprites:         Sprites;
}

export type Abilities = {
    lv1_ability: string;
    lv2_ability: string;
    lv3_ability: string;
}

export type AbilityTrigger = {
    trigger: string;
    url:     string;
}

export type Source = {
    name: string;
    url:  string;
}

export type Sprites = {
    standard: string;
    classic:  string;
}

export type TierInfo = {
    tier: number;
    url:  string;
}
