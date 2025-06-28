exports.seed = function (knex) {
    return knex('nose-types').insert([
        {
            label: 'Button',
            description: 'This character has a button type of nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'Hooked',
            description: 'This character has a hooked type of nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'Flat',
            description: 'This character has a flat type of nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'Wide',
            description: 'This character has a wide type of nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'Pointed',
            description: 'This character has a pointed type of nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'Broken/Crooked',
            description: 'This character has a broken/crooked type of nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'Upturned',
            description: 'This character has an upturned type of nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'Aquiline',
            description: 'This character has an aquiline type of nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'No Nose',
            description: 'This character has no nose.',
            label_url: null,
            rarity: 'common'
        },
        {
            label: 'Beaked',
            description: 'This character has a beaked type of nose.',
            label_url: null,
            rarity: 'common'
        }
    ])
}