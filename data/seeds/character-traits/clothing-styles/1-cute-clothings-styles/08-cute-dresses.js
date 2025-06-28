exports.seed = function (knex) {
    return knex('cute-dresses').insert([
        {
            label: 'Pastel Overalls Dress',
            description: 'This character has a pastel overalls dress. A soft cotton overall style dress with adjustable straps and cartoon patchwork.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Kawaii Kilt Dress',
            description: 'This character has a kawaii kilt dress. A pleated kilt style dress with suspenders and an enamel pin.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Animal Hoodie Dress',
            description: 'This character has an animal hoodie dress. An oversized hoodie dress with animal ears on the hood and paws on the sleeves.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Plush Apron Dress',
            description: 'This character has a plush apron dress. Soft fleece apron dress with heart pockets.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Sailor Collar Tunic',
            description: 'This character has a sailor collar tunic. A tunic dress with a sailor style collar and decorative anchor buttons.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Dessert Dress',
            description: 'This character has a dessert dress. A dress with puffed sleeves, dessert prints, and a ribbon tied apron layer.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Fruit Picnic Gown',
            description: 'This character has a fruit picnic gown. A vintage style gingham dress with a lace trim and embroidered fruit patterns.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Candy Frill Dress',
            description: 'This character has a candy frill dress. A candy colored layered dress with ruffled hems and cloud like puffed shoulders.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Candy Swing Dress',
            description: 'This character has a candy swing dress. Knee length swing dress coverred in candy prints, finished with a giant bow on the back.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Flower Smock',
            description: 'This character has a flower smock. A sleeveless smock dress with large flower buttons and a tulle underskirt.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Patchwork Tunic',
            description: 'This character has a patchwork tunic. A tunic style dress made from fabric scraps stitches in whimsical patterns',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Candy Bubble Hem Dress',
            description: 'This character has a candy bubble hem dress. A knee length bubble hem dress in candy themed hues with an oversized zipper and hood.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'candies'
        },
        {
            label: 'Soft Utility Dress',
            description: 'This character has a soft utility dress. A cargo style dress with oversized pockets and velcro straps.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Overall Dress',
            description: 'This character has an overall dress. A denim overall dress completed with mini character badges.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Candy Cloudburst Cloak Dress',
            description: 'This character has a candy cloudburst cloak dress. A soft cloak like dress with misty gradient coloring and a braided rope tie themed like candy.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'candies'
        },
    ])
}