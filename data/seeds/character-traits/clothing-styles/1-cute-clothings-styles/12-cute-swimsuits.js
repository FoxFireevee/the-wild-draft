exports.seed = function (knex) {
    return knex('cute-swimsuits').insert([
        {
            label: 'Fruit Splash Trunks',
            description: 'This character has fruit splash trunks. Mid thigh swim trunks with a cheerful fruit splash pattern and adjustable rainbow drawstring.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Floatie Board Shorts',
            description: 'This character has floatie board shorts. Loose board shorts featuring tiny floatie icons and velcro pocket flaps shaped like fins.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Candy Stripe Jammer',
            description: 'This character has a candy stripe jammer. Fitted swim jammers with diagonal candy stripes and color blocked waistband.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null 
        },
        {
            label: 'Bubble Dot Swim Shorts',
            description: 'This character has bubble dot swim shorts. Swim shorts with bubbly polka dot pattern and mesh lining shaped like waves.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Tide Ruffle Briefs',
            description: 'This character has tide ruffle briefs. Cute swim briefs with little side ruffles and a tiny shall charm stitched on the hip.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Ruffle Wrap One Piece',
            description: 'This character has a ruffle wrap one piece. A one piece with a faux wrap design and a frilly neckline, finished with a colorful bow in the back.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Candy Halter Kini',
            description: 'This character has a candy halter kini. Two piece halter bikini with ruched fabric and colorful candy bead connectors on the straps.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Sweetie Fruit Swim Dress',
            description: 'This character has a sweetie fruit swim dress. Swimdress with a scalloped skirt edge and heart shaped cutout on the chest with a fruit design.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits' 
        },
        {
            label: 'Fruit Bubble Sleeve Bikini',
            description: 'This character has a fruit bubble sleeve bikini. A two piece with sheer bubble sleeves on the top and little bows on the hips with a fruit design.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits' 
        },
        {
            label: 'Petal Skirt Set',
            description: 'This character has a petal skirt set. High wasited bikini bottom with petal shaped skirt overlay and floral trimmed top.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Play Splash Tankini',
            description: 'This character has a play splash tankini. Tankini top with rainbow panels and solid shorts bottom, great for active swimming.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Dessert Zip Swimsuit',
            description: 'This character has a dessert zip swimsuit. One piece zip up with dessert patterns and foam textured shoulders.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'desserts'
        },
        {
            label: 'Boardy Romper Suit',
            description: 'This character has a boardy romper suit. Swim friendly romper with short legs, overall style straps, and button details.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Animal Surf Set',
            description: 'This character has an animal surf set. Sleeveless rashguard top and trunk with animal ears and patters.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        },
        {
            label: 'Mossy Wrap Set',
            description: 'This character has a mossy wrap set. Wrap swim set with moss toned patterning and a sublte belt mushroom details around the waist.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'mushrooms'
        }
    ])
}