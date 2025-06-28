exports.seed = function (knex) {
    return knex('mouth-shape-type').insert([
        {
            label: 'Full',
            description: 'This character has a full type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Thin',
            description: 'This character has a thin type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Heart Shaped',
            description: 'This character has a heart shaped type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Crooked Smile',
            description: 'This character has a crooked smile type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Wide Mouth',
            description: 'This character has a wide mouth type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Small Mouth',
            description: 'This character has a small mouth type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fanged',
            description: 'This character has a fanged type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tusked',
            description: 'This character has a tusked type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Beaked',
            description: 'This character has a beaked type of lip.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Plump',
            description: 'This character has a plump type of lip.',
            image_url: null,
            rarity: 'common'
        }
    ])
}