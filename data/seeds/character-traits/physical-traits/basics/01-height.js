exports.seed = function (knex) {
    return knex('height').insert([
        {
            label: 'Very Short',
            description: 'This character is very short in comparison to their species average height.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Short',
            description: 'This charcter is short in comparison to their species average height.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Average',
            description: 'This character is the average height of their species.',
            image_url: null, 
            rarity: 'common'
        },
        {
            label: 'Tall',
            description: 'This character is tall in comparison to their species average height.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Very Tall',
           description: 'This character is very tall in comparison to their species height.',
            image_url: null,
            rarity: 'common'
        }
    ])
}