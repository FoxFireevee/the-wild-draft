exports.seed = function (knex) {
    return knex('age').insert([
        {
            label: 'Egg',
            description: 'This character is in the egg stage of their life cycle.',
            image_url: null,
            rarity: 'egg'
        },
        {
            label: 'Infant',
            description: 'This character is in the infant stage of thier life cycle.',
            image_url: null,
            rarity: 'very rare'
        },
        {
            label: 'Toddler',
            description: 'This character is in the toddler stage of their life cycle.',
            image_url: null,
            rarity: 'rare'
        },
        {
            label: 'Child',
            description: 'This character is in the child stage of their life cycle.',
            image_url: null,
            rarity: 'rare'
        },
        {
            label: 'PreTeen',
            description: 'This character is in the preteen stage of their life cycle.',
            image_url: null,
            rarity: 'uncommon'
        },
        {
            label: 'Teen',
            description: 'This character is in the teen stage of their life cycle.',
            image_url: null,
            rarity: 'uncommon'
        },
        {
            label: 'Young Adult',
            description: 'This character is in the young adult stage of their life cycle.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Adult',
            description: 'This character is in the adult stage of their life cycle.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mature Adult',
            description: 'This character is in the mature adult stage of their life cycle.',
            image_url: null,
            rarity: 'uncommon'
        },
        {
            label: 'Elder',
            description: 'This character is in the elder stage of their life cycle.',
            image_url: null,
            rarity: 'rare'
        },
        {
            label: 'Timeless',
            description: 'This character is timeless and cannot die of age.',
            image_url: null,
            rarity: 'common'
        }
    ])
}