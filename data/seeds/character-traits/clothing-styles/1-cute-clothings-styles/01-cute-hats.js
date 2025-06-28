exports.seed = function (knex) {
    return knex('cute-hats').insert([
        {
            label: 'Fruit Snapback',
            description: 'This character has a fruit snapback. A snapback styled hat with a fruit embroidered on the brim.',
            image_url: null,
            rarity:'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Bowtie Beanie',
            description: 'This character has a bowtie beanie. Soft knitted beanie with a tiny fabric bow on the back.',
            image_url: null,
            rarity:'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Cartoon Cap',
            description: 'This character has a cartoon cap. A cap with a sleepy cartoon face stitched on the front.',
            image_url: null,
            rarity:'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Playful Pom Beret',
            description: 'This character has a playful pom beret. Beret with two oversized pom-poms resembling bear ears.',
            image_url: null,
            rarity:'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Flower Bucket Hat',
            description: 'This character has a flower bucket hat. A bucket had with sunflower print and small enamel pins on the band.',
            image_url: null,
            rarity:'common',
            genderTag: 'masculine',
            resourceTag: 'flowers'
        },
        {
            label: 'Candyfloss Bonnet',
            description: 'This character has a candyfloss bonnet. Bonnet tied under the chin with lace trim and heart buttons with a candy theme.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Fruit Bow Beret',
            description: 'This character has a fruit bow beret. Wood beret with an oversized bow and a decorative fruit in the center.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Flower Crown Veil',
            description: 'This character has a flower crown veil. Tiny flower crown paired with a soft transparent mesh veil.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Fruit Clip Hat',
            description: 'This character has a fruit clip hat. A smell tilted hat with stitched fruit and clip on feature.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Fluffball Earmuffs',
            description: 'This character has a fluffball earmuffs. Earmuffs shaped like animal paws.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'animals'
        },
        {
            label: 'Pastel Painters Cap',
            description: 'This character has a pastel painters cap. A cap with facric splotches like watercolor paint.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Woolen Mushroom Beanie',
            description: 'This character has a woolen mushroom beanie. Beanie with a hand stitched mushroom patch.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'mushrooms'
        },
        {
            label: 'Cloud Puff Hat',
            description: 'This character has a cloud puff hat. Soft fleece hat shaped like a floating cloud.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Patchy Sunhat',
            description: 'This character has a patchy sunhat. Straw sunhat covered in multicolored fabric patchwork.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Velcro Visor',
            description: 'This character has a velcro visor. A visor with adjustable animal ear velcro flaps.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        }
    ])
}