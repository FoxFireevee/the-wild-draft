exports.seed = function (knex) {
    return knex('cute-pants').insert([
        {
            label: 'Candy Chinos',
            description: 'This character has candy chinos kind of pants. Heart shaped stitching on the back pocket and has candy themed cuffs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'candies'
        },
        {
            label: 'Animal Patch Cargos',
            description: 'This character has animal patch cargos kind of pants. Cargo pants with animals ears sewn onto the thigh pockets',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Fruit Joggers',
            description: 'This character has fruit joggers kind of pants. Fruit themed jogger pants.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Playdate Slacks',
            description: 'This character has playdate slacks kind of pants. Dress slacks with tiny colorful buttons and a whimsical inner lining print.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Candy Jeans',
            description: 'This character has candy jeans kind of pants. Candy patterns and themes on the pants.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'candies'
        },
        {
            label: 'Frill Hem Skinnies',
            description: 'This character has frill hemm skinnies kind of pants. Skinny pants with lace trimmed hems and pearn button detailing.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Candy Flairs',
            description: 'This character has candy flairs kind of pants. Soft flared pants with ombre candy related colors and ruffle accents on the hips.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Heart Pocket Capris',
            description: 'This character has heart pocket capris kind of pants. Embroidered hearts on each back pocket with scalloped seams.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Candy Corduroys',
            description: 'This character has candy corduroys kind of pants. Soft and plushie texture with embroidered sweets down the legs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Petal Pants',
            description: 'This character has petal pants. Petal patterned trousers with flowers creeping up the legs and flower shaped buttons.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Bubble Pop Trousers',
            description: 'This character has bubble pop trousers kind of pants. Loose fit pants in with puffed quilting along the sides and soft a elastic waist.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Comfy Pastel Harem Pants',
            description: 'This character has comfy pastel harem kind of pants. Drop crotch style with faded rainbow streaks and cinched cuffs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Animal Parade Pants',
            description: 'This character has animal parade pants. Cute animal designs wrapping around one leg.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        },
        {
            label: 'Overall Bottoms',
            description: 'This character has overall bottoms kind of pants. Suspender straps either both are strapped up, one is down, or both are down.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Candystripe Culottes',
            description: 'This character has candystripe culottes kind of pants. Flowy culottes in a vertical color stripes wwith a wise waistband bow.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'candies'
        }
    ])
}