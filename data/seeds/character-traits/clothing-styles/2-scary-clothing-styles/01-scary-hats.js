exports.seed = function (knex) {
    return knex('scary-hats').insert([
        {
            label: '',
            description: 'This character has .',
            image_url: null,
            rarity: 'common',
            genderTag: '',
            resourceTag: 
        },
    ])
}