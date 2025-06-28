exports.seed = function(knex) {
    return knex('nail-lengths').insert([
        {
            label: 'Stubs',
            description: 'This characters finger nail length is stubby.',
            image_url: null,
            rarity: 'common'
        }, 
        {
            label: 'Short',
            description: 'This characters finger nail length is short.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Average',
            description: 'This characters finger nail length is average.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Semi Long',
            description: 'This characters finger nail length is semi long.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Long',
            description: 'This characters finger nail length is long.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Super Long',
            description: 'This characters finger nail length is super long.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Long Claws',
            description: 'This characters finger nail length is long claws.',
            image_url: null,
            rarity: 'common'
        }
    ])
}