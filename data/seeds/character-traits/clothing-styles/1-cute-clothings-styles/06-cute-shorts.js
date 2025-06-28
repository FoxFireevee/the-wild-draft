exports.seed = function (knex) {
    return knex('cute-shorts').insert([
        {
            label: 'Animal Cuffed Shorts',
            description: 'This character has animal cuffed shorts. Rolled up cuffs revealing an animal themed fuzzy interior.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Playground Plaid Shorts',
            description: 'This character has playground plaid shorts. High waisted plaid shorts with stitched on crayon patches near the hem.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Bubblecargo Shorts',
            description: 'This character has bubblecargo shorts. Cargo shorts with rounded pocket flaps and puffy seams, almost like little pillows.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Dessert Shorts',
            description: 'This character has dessert shorts. Design inspired after a dessert.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'desserts'
        },
        {
            label: 'Toybox Denim Cutoffs',
            description: 'This character has toybox denim cutoffs. Frayed denum with sewn on patches shaped like toy blocks and stars.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Frilly Puff Shorts',
            description: 'This character has frilly puff shorts. Lace lined hems, heart shaped bottoms, and subtle ruffling on the sides.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Fruit Bow Shorts',
            description: 'This character has fruit bow shorts. Oversize bow on the hips and sparkle stitch detailing on the fruits.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Fruit Ruffled Bloomers',
            description: 'This character has fruit ruffled bloomers. Fruit prints and triple layer ruffles in the trim.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Dessert Shorts',
            description: 'This character has dessert shorts. Pattern designs of desserts and shimmering thread woven throughout.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Candy Shorts',
            description: 'This character has candy shorts. Candy like belt and tiny bows on the back pocket, candy themed.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Cotton Cloud Shorts',
            description: 'This character has cotton cloud shorts. Fluffly looking shorts with soft texture and a swirling stitching.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Rainbow Pocket Shorts',
            description: 'This character has rainbow pocket shorts. Rainbow sippers and stitched cloud shaped pockets.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Kawaii Utility Shorts',
            description: 'This character has kawaii utility shorts. Cargo style with cartoon badge patches and soft velcro straps.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Overall Shorts',
            description: 'This character has overall shorts. Short legs and the option to wear both strap up, one down, or both down.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Blush Bubble Shorts',
            description: 'This character has blush bubble shorts. Puffed out with soft pleating and elastic waistbands for a round shape.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        }
    ])
}