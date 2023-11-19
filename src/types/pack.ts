export type Pack = {
    _id:         string;
    name:        string;
    pets:        Pets;
    foods:       Foods;
    description: string;
}

export type Foods = {
    tier_1_foods: Entity[];
    tier_2_foods: Entity[];
    tier_3_foods: Entity[];
    tier_4_foods: Entity[];
    tier_5_foods: Entity[];
    tier_6_foods: Entity[];
}

export type Pets = {
    tier_1_pets: Entity[];
    tier_2_pets: Entity[];
    tier_3_pets: Entity[];
    tier_4_pets: Entity[];
    tier_5_pets: Entity[];
    tier_6_pets: Entity[];
}

export type Entity = {
    name: string;
    url:  string;
}
