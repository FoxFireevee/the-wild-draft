exports.seed = function (knex) {
    return knex('hair-length').insert([
        {
            label: 'Bald',
            description: 'This characters hair length is bald.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Buzz',
            description: 'This characters hair length is buzzed.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Ear Length',
            description: 'This character has ear length hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Chin Length',
            description: 'This character has chin length hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Shoulder Length',
            description: 'This character has shoulder length hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Elbow Length',
            description: 'This character has elbow length hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Waist Length',
            description: 'This character has waist length hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Knee Length',
            description: 'This character has knee length hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Ankle Length',
            description: 'This character has ankle length hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Train Length',
            description: 'This character has train length hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mega Train Length',
            description: 'This character has mega train length hair.',
            image_url: null,
            rarity: 'common'
        }
    ])
}