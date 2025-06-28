exports.seed = function(knex) {
    return knex('eye-shape').insert([
        {
            label: 'Almond',
            description: 'This character has an almond eye shape. A classic eye shape, slightly upswept outer corner.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Round',
            description: 'This character has a round eye shape. Eyes that appear large and circular.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Monolid',
            description: 'This character has a monolid eye shape. No visible crease on the eyelid.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Hooded',
            description: 'This character has a hooded eye shape. Crease is hidden under a flap of skin.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Downturned',
            description: 'This character has a downturned eye shape. Outer corners droop slightly downward.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Upturned',
            description: 'This character has an upturned eye shape. Outer corners point upward.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Close Set',
            description: 'This character has a closet set eye shape. Eyes that sit closer together.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Wide Set',
            description: 'This character has a wide set eye shape. Eyes that are farther apart.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Protruding',
            description: 'This character has a protruding eye shape. Eyes that appear to bulge outward.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Deep Set',
            description: 'This character has a deep set eye shape. Eyes that sit deeper in the socket.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Cat Like',
            description: 'This character has a cat like eye shape. Long and narrow.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Serpentine',
            description: 'This character has a serpentine eye shape. Slitted snake like eyes.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Orbital',
            description: 'This character has an orbital eye shape. Perfectly round and glowing or glassy.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Starry',
            description: 'This character has a starry eye shape. Filled with cosmic swirls or sparkles.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Ethereal',
            description: 'This character has an ethereal eye shape. Soft glowing or translucent eyes.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Sharp',
            description: 'This character has a sharp eye shape. Narrow and angular, almost blade like in shape.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Beastial',
            description: 'This character has a beastial eye shape. Rougher primal shapes.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Asymmetrical',
            description: 'This character has an asymmetrical eye shape. Intentionally mismatched or distorted.',
            image_url: null ,
            rarity: 'common'
        }
    ])
}