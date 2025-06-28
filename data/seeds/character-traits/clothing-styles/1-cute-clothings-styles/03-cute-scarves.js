exports.seed = function (knex) {
    return knex('cute-scarves').insert([
        {
            label: 'Candy Knit',
            description: 'This character has a candy knit scarf. A chunky knitted scarf themed in candy.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'candies'
        },
        {
            label: 'Animal Scarf',
            description: 'This character has an animal scarf. Themed and textured with an animal and their colors.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Star Trail Neck Wrap',
            description: 'This character has a star trail neck wrap. A scarf with stars and tiny bells all over.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Fuzzy Fringe Wrap',
            description: 'This character has a fuzzy fringe wrap. Thick fleece scarf with exaggerated fringe ends.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Cloud Loop',
            description: 'This character has a cloud loop scarf. Infinity scarf with puffy segments that resemble clouds.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Candy Lace Wrap',
            description: 'This character has a candy lace wrap. A soft lace scarf with rainbow threads.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Fruit Frill',
            description: 'This character has a fruit frill scarf. Fruit embroidered all over the scarf with ruffled edges.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Satin Bow Tie',
            description: 'This character has a satin bow tie scarf. Satin scarf that ties in a big bow under the chin.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Pompom Ruffle',
            description: 'This character has a pompom ruffle scarf. Thing scarf lined with a soft pompom trim.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Floral Mesh Shawl',
            description: 'This character has a floral mesh shawl. Transparent floral print mesh scarf with scalloped edges.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Patchy Warmth',
            description: 'This character has a patchy warmth scarf. Made of fabric patches mixed with pastels.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Checker Snood',
            description: 'This character has a checker snood scarf. Infinity snood with two colors in a checkered pattern.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Quilted Tube',
            description: 'This character has a quilted tube scarf. Short quilted scarf with snap buttons.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Dreamy Drape',
            description: 'This character has a dreamy drape scarf. Loose drape scarf with watercolor fade.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Animal Tail Wrap',
            description: 'This character has an animal tail wrap. Cozy wrap with the animal tail at the end.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        }
    ])
}