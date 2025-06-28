exports.seed = function (knex) {
    return knex('extra-facial-features').insert([
        {
            label: 'Horns',
            description: 'This character has a horns for a special facial feature.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Ridges',
            description: 'This character has a ridges for a special facial feature.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Facial Tentacles',
            description: 'This character has a facial tentacles for a special facial feature.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mechanical Implants',
            description: 'This character has a mechanical implants for a special facial feature.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Third Eye',
            description: 'This character has a third eye for a special facial feature.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Glowing Veins',
            description: 'This character has a glowing veins for a special facial feature.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Scaled Patches',
            description: 'This character has a scaled patches for a special facial feature.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Moss Growing On Skin',
            description: 'This character has a moss growing on skin for a special facial feature.',
            image_url: null,
            rarity: 'common'
        }
    ])
}