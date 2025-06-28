exports.seed = function (knex) {
    return knex('teeth-types').insert([
        {
            label: 'Straight and Even',
            description: 'This character has teeth that are straight and even. Perfectly aligned teeth with no gaps or imperfections.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Gapped',
            description: 'This character has teeth that are gapped. Noticeable spaces between some or all teeth.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Snaggle Tooth',
            description: 'This character has teeth has a snaggle tooth. One or more teeth stick out at an odd angle.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Overbite',
            description: 'This character has teeth has an overbite. Upper front teeth extend beyond the upper teeth.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Underbite',
            description: 'This character has teeth has an underbite. Lower teeth extend beyond the upper teeth.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Shark Like',
            description: 'This character has teeth that are shark like. Rows of sharp triangular teeth often layered.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Blunt/Flat',
            description: 'This character has teeth that are blunt/flat. Teeth are rounded or flat with no sharp points.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Needle Like',
            description: 'This character has teeth that are needle like. Thin and sharp teeth similar to a deep sea fish.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Jagged',
            description: 'This character has teeth that are jagged. Teeth are uneven, chipped or naturally serrated.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fused Teeth',
            description: 'This character has teeth that are fused. Two or more teeth are grown together into a larger tooth.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rodent Style',
            description: 'This character has teeth that are rodent like. Prominent and oversides front teeth made for gnawing.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Spiked',
            description: 'This character has teeth that are spiked. Teeth that resemble spikes or small horns.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Crystal',
            description: 'This character has teeth that are crystal. Semi translucent or glowing gem like teeth.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Metallic',
            description: 'This character has teeth that are metallic. Shiny teeth made of metal like gold or iron.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Venomous Fangs',
            description: 'This character has teeth that are like venomous fangs. Hollow or grooved teeth capable of delivering venom.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mismatched',
            description: 'This character has teeth that are mismatched. Each tooth looks different from size, shape or material.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Maw Full of Eyes',
            description: 'This character has teeth that are like a maw full of eyes. A disturbing mutation where some or all of the teeth are replaced by eyes.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Toothless/Gumming',
            description: 'This character has teeth that are toothless/gumming. No teeth at all, just soft gums.',
            image_url: null,
            rarity: 'common'
        }
    ])
}