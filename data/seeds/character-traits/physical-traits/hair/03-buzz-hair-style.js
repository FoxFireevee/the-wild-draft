exports.seed = function (knex) {
    return knex('buzz-hair-styles').insert([
        {
            label: 'Uniform Buzz',
            description: 'This character has an uniformed buzz hair style. An even buzz all over, clean and basic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fade Buzz',
            description: 'This character has a fade buzz hair style. Tight fade from skin up to slightly longer top.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Side Buzz Design',
            description: 'This character has a side buzz design hair style. Designs or symbols shaved into the sides.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mohawk Buzz',
            description: 'This character has a mohawk buzz hair style. Sides buzzed and a narrow strip left on top.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Buzzed Widows Peak',
            description: 'This character has a buzzed widows peak hair style. Short hairline accentuating windows peak.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Line Up Buzz',
            description: 'This character has a line up buzz hair style. Sharp edges shaped cleanly along the forehead and temples.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fuzzy Buzz',
            description: 'This character has a fuzzy buzz hair style. Slightly longer buzz that is soft and touchable.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Patchy Buzz',
            description: 'This character has a patchy buzz hair style. Imperfect buzz cut, could be from a self buzz cut gone wrong.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Buzzed with a Scar',
            description: 'This character has a buzzed with scar hair style. Buzzed to reveal a notable head scar.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Magic Mark Buzz',
            description: 'This character has a magic mark buzz hair style. Enchanted symbols faintly glow on the scalp.',
            image_url: null,
            rarity: 'common'
        }
    ])
}