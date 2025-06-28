exports.seed = function (knex) {
    return knex('jawlines').insert([
        {
            label: 'Strong/Chiseled',
            description: 'This character has a strong/chiseled type of jawline.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Soft/Rounded',
            description: 'This character has a soft/rounded type of jawline.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Pointed/Elfin',
            description: 'This character has a pointed/elfin type of jawline.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Double Chin',
            description: 'This character has a double chin type of jawline.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Square',
            description: 'This character has a square type of jawline.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Weak Chin',
            description: 'This character has a weak chin type of jawline.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Long Jaw',
            description: 'This character has a long jaw type of jawline.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Bearded/Fuzzed',
            description: 'This character has a bearded/fuzzed type of jawline.',
            image_url: null,
            rarity: 'common'
        }
    ])
}