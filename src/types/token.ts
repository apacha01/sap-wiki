export type Token = {
    _id:           string;
    name:          string;
    tier_info:     TierInfo;
    sprites:       Sprites;
    abilities:     Abilities;
    summoned_from: SummonedFrom;
    stats:         Stats;
    notes:         string;
}

export type Abilities = {
    lv1_ability: string;
    lv2_ability: string;
    lv3_ability: string;
}

export type Sprites = {
    standard: string;
    classic:  string;
}

export type Stats = {
    lv1_stats: Stat[];
    lv2_stats: Stat[];
    lv3_stats: Stat[];
}

export type Stat = {
    name:      string;
    base_stat: number;
    url:       string;
}

export type SummonedFrom = {
    source: string;
    url:    string;
}

export type TierInfo = {
    tier: number;
    url:  string;
}
