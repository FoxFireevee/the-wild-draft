exports.seed = function (knex) {
    return knex('cute-shirts').insert([
        {
            label: 'Sprinkle Henely',
            description: 'This character has a sprinkle henely shirt. A soft henley shirt with pastel sprinkle dots on the cuffs and collar.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Animal Patch Tee',
            description: 'This character has an animal patch tee shirt. Has an embroidered animal patch on the chest pocket.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Puffed Collar Polo',
            description: 'This character has a puffed collar polo. Polo with a tiny embroidered heart and a puffed edge on the collar.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Candy Button Up',
            description: 'This character has a candy button up shirt. Short sleeved button up with a candy print and colorful buttons.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'candies'
        },
        {
            label: 'Overcast Hoodie Tee',
            description: 'This character has an overcast hoodie tee shirt. Hoodie style t-shirt with pastel cloud graphics and a soft inner lining.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Fruit Blouse',
            description: 'This character has a fruit blouse. Blouse with fruit buttons and a peter pan collar.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Sailor Ribbon Top',
            description: 'This character has a sailor ribbon top. Sailor shirt with a giant white ribbon and an embroidered anchor.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Frilly Puffy Tee',
            description: 'This character has a frilly puffy tee shirt. Puffy sleeves and lacey trim.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Dessert Tank',
            description: 'This character has a dessert tank top. Sleeveless tanktop with dessert prints and a tiny ruffled hem.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Heart Lace Crop',
            description: 'This character has a heart lace crop shirt. Cropped shirt with a lacey heart cutouts and soft mesh sleeves.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Pastel Block Tee',
            description: 'This character has a pastel block tee shirt. Boxy fit t-shirt with soft blocks of pastel colors.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Oversized Fruit Hoodie',
            description: 'This character has an oversized fruit hoodie. Slouchy hoodie with fruid decals.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'fruits'
        },
        {
            label: 'Kawaii Animal Sweatshirt',
            description: 'This character has a kawaii animal sweatshirt. Crewneck sweater with a sleepy animal face and 3D ears sewn onto the shoulders.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        },
        {
            label: 'Buttonless Smock',
            description: 'This character has a buttonless smock. Lightweight smock style shirt with no collar and rollup sleeves.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Bubble Wrap Tee',
            description: 'This character has a bubble wrap tee shirt. Tactile tee with stitched puffy bubble wrap textures.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        }
    ])
}