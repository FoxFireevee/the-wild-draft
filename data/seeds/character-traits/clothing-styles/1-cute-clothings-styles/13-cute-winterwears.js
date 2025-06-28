exports.seed = function (knex) {
    return knex('cute-winterwears').insert([
        {
            label: 'Animal Pom Pom Puff Parka',
            description: 'This character has an animal pom pom puff parka. A knee length puffy animal themed parka with oversized pom pom toggles and a fuzzy faux fur lined hood with animal ears.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Layered Dessert Coat',
            description: 'This character has a layered dessert coat. Wool coat with dual layers, pastel plaid inner lining, and tiny dessert themed buttons.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'desserts'
        },
        {
            label: 'Blizzard Bomber',
            description: 'This character has a blizzard bomber. Cute bomber jacket with little snowflake embroidery and plush cuffs that resembles mittens.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null 
        },
        {
            label: 'Fruit Beanie Hoodie Combo',
            description: 'This character has a fruit beanie hoodie combo. Attached hoodie with a stitched in soft beanie look and fruit designs complete with faux earmuff flaps.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Snow Scout Poncho',
            description: 'This character has a snow scout poncho. Thick poncho style outerwear with blanket stitched edges and a cozy scarf sewn right in.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Candy Coat',
            description: 'This character has a marshmallow coat. Ultra puffy coat shaped like candy segments with heart zipper.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Animal Ribbon Padded Cape',
            description: 'This character has an animal ribbon padded cape. A padded cape that drapes over the shoulders and ties at the neck with a velvet ribbon displaying an animal on the back with flower designs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: ['animals', 'flowers']
        },
        {
            label: 'Fluff Trim Toggle Coat',
            description: 'This character has a fluff trim toggle coat. Toggle coat with a plush trim on the sleeves and hood plus tiny star shaped buttons.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Fruit Cardigan',
            description: 'This character has a fruit cardigan. Long oversized cardigan with a soft pattern of snowflakes and fruits.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Icicle Fringe Cloak',
            description: 'This character has an icicle fringe cloak. Knee length cloak with dangling icicle shaped fringe and a faux crystal clasp at the collar.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'crystals'
        },
        {
            label: 'Snuggle Animal Hoodie Robe',
            description: 'This character has a snuggle animal hoodie robe. Oversized hoodie with animal ears style robe with inner sherpa lining and cozy thumbhole sleeves resembling animal paws.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        },
        {
            label: 'Pillow Puff Suit',
            description: 'This character has a pillow puff suit. One piece padded suit that looks like its made of squishy throw pillows, completed with built in scarf collar.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Patchwork Peacoat',
            description: 'This character has a patchwork peacoat. A line peacoat made of pastel patchwork squares and shiny mismatched buttons.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Snow Day Onesie',
            description: 'This character has a snow day onesie. Footed fleece onesie with a full zip front and pocket pouches like look like paw prints.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        },
        {
            label: 'Fuzzy Lined Overcoat',
            description: 'This character has a fuzzy lined overcoat. Straight cut overcoat with a fuzzy inner lining and button flaps that resemble critters.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        }
    ])
}