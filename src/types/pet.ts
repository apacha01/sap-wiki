export type Pet = {
    _id:             string;
    name:            string;
    tier_info:       TierInfo;
    sprites:         Sprites;
    abilities:       Abilities;
    ability_trigger: AbilityTrigger;
    ability_target:  AbilityTarget;
    type:            AbilityTrigger;
    stats:           Stat[];
    packs:           AbilityTrigger[];
}

export type Abilities = {
    lv1_ability: string;
    lv2_ability: string;
    lv3_ability: string;
}

export type AbilityTarget = {
    name: string;
    url:  string[];
}

export type AbilityTrigger = {
    name: string;
    url:  string;
}

export type Sprites = {
    standard: string;
    classic:  string;
}

export type Stat = {
    name:      string;
    base_stat: number;
    url:       string;
}

export type TierInfo = {
    tier: number;
    url:  string;
}
