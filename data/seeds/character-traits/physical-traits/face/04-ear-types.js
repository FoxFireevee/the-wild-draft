exports.seed = function (knex) {
    return knex('ear-types').insert([
        {
            label: 'Pointed',
            description: 'This character has a pointed type of ear.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rounded',
            description: 'This character has a rounded type of ear.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Large Lobes',
            description: 'This character has a large lobes type of ear.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tiny Ears',
            description: 'This character has a tiny ears type of ear.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Drooping',
            description: 'This character has a drooping type of ear.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Winged',
            description: 'This character has a winged type of ear.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Torn/Scarred',
            description: 'This character has a torn/scarred type of ear.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'No Ears',
            description: 'This character has no ears.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Animal Ears',
            description: 'This character has an animal ears type of ear.',
            image_url: null,
            rarity: 'common',
        }, 
    ])
}