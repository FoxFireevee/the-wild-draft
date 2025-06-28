exports.seed = function (knex) {
    return knex('bald-hair-styles').insert([
        {
            label: 'Completely Bald',
            description: 'This character has a bald hair style. Smooth shiny done with no hair anywhere.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Shadow Bald',
            description: 'This character has a shadow bald hair style. Recently shaved with a slight shadow or stubble.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Patterned Bald',
            description: 'This character has a patterned bald hair style. Designs etched into the scalp.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Patchy Bald',
            description: 'This character has a patchy bald hair style. Missing patches of hair.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Veiled Bald',
            description: 'This character has a veiled bald hair style. Has no hair but always wears something on their head.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Implanted Bald',
            description: 'This character has an implanted bald hair style. Has jewelry or cybernetic implants in the scalp.',
            image_url: null,
            rarity: 'common'
        }
    ])
}