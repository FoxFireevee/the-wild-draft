exports.seed = function (knex) {
    return knex('eyebrow-styles').insert([
        {
            label: 'Thick and Bold',
            description: 'This character has a thick and bold type of eyebrow.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Thin and Arched',
            description: 'This character has a thin and arched type of eyebrow.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Monobrow',
            description: 'This character has a monobrow type of eyebrow.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Shaved or Missing',
            description: 'This character has a shaved or missing type of eyebrow.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tattooed Designs',
            description: 'This character has a tattooed designs type of eyebrow.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Wild Bushy',
            description: 'This character has a wild bushy type of eyebrow.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Split or Scarred',
            description: 'This character has a split or scarred type of eyebrow.',
            image_url: null,
            rarity: 'common'
        }
    ])
}