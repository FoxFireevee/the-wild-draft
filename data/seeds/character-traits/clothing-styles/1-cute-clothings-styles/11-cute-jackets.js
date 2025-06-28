exports.seed = function (knex) {
    return knex('cute-jackets').insert([
        {
            label: 'Bubble Zipper Hoodie',
            description: 'This character has a bubble zipper hoodie. A puffy hoodie with bubble textured quilting, oversized zipper pull, and colorful drawings.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Fruit Patch Windbreaker',
            description: 'This character has a fruit patch windbreaker. Lightweight jacket covered in colorful fruit shaped patches with elastic cuffs and a crinkly finish.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Cartoon Varsity Jacket',
            description: 'This character has a cartoon varsity jacket. A varsity style jacket with cartoon faces embroidered and playful lettering on the back.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Fuzzy Pom Bomber',
            description: 'This character has a fuzzy pom bomber. Soft bomber jacket lined with fuzzy fleece and pom pom toggles hanging from the zipper.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null 
        },
        {
            label: 'Play Caped Jacket',
            description: 'This character has a play caped jacket. Jacket with a built in playful cape layer and stitched on fruit accents.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Candy Bow Coat',
            description: 'This character has a candy bow coat. Longline coat with layered candy colored bows on the front and pearlescent buttons.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Frill Collar Jacket',
            description: 'This character has a frill collar jacket. Short jacket with an oversized frilly collar and printed lining featuring sweet motifs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null 
        },
        {
            label: 'Heart Pocket Cardigan',
            description: 'This character has a heart pocket cardigan. Thick cardigan with fuzzy heart shaped pockets and a scalloped hemline.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Dessert Stitch Hoodie',
            description: 'This character has a dessert stitch hoodie. Zip up hoodie with tiny dessert stitching along the sleeves and pastel piping.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Candy Ruffle Blazer',
            description: 'This character has a candy ruffle blazer. A fitted blazer in candy colors with soft ruffle accents at the cuffs and back split.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Patchy Cloud Jacket',
            description: 'This character has a puffy cloud jacket. Oversized denim jacket with sewn on cloud patches and fluffy shoulder panels.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Puff Sleeve Hoodie',
            description: 'This character has a puff sleeve hoodie. Hoodie with exaggerated puff sleeves and colorful drawcord tips.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Velcro Utility Coat',
            description: 'This character has a velcro utility coat. Utility inspired jacket with colorful velcro pocket covers and adjustable hem toggles.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Garden Bomber',
            description: 'This character has a garden bomber. Light bomber jacket with garden print lining featuring mushrooms, fruits, and flowers.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: ['mushrooms', 'fruits', 'flowers']
        },
        {
            label: 'Moss Trim Cloaklet',
            description: 'This character has a moss trim cloaklet. A short cloak style jacket with moss textured trim and a fuzzy hood with little animal ears.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        }
    ])
}