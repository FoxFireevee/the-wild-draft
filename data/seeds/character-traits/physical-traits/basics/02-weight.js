exports.seed = function (knex) {
    return knex('weight').insert([
        {
            label: 'Very Slim',
            description: 'This character is very slim in comparison to their species average weight.',
            image_url: null,
            rarity: 'uncommon'
        },
        {
            label: 'Slim',
            description: 'This character is slim in comparison to their species average weight.',
            image_url: null,
            rarity: 'uncommon'
        },
        {
            label: 'Slender',
            description: 'This character is more slender in comparison to their species average weight.',
            image_url: null,
            rarity: 'uncommon'
        },
        {
            label: 'Average',
            description: 'This character is the average weight of their species.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Chubby',
            description: 'This character is chubbier in comparison to their species average weight.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Chunky',
            description: 'This character is chunkier in comparison to their species average weight.',
            image_url: null,
            rarity: 'uncommon'
        },
        {
            label: 'Big',
            description: 'This character is big in comparison to their species average weight.',
            image_url: null,
            rarity: 'uncommon'
        },
        {
            label: 'Very Big',
            description: 'This character is very big in comparison to their species average weight.',
            image_url: null,
            rarity: 'uncommon'
        }
    ])
}