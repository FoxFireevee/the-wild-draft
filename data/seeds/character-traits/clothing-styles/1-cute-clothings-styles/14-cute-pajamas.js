exports.seed = function (knex) {
    return knex('cute-pajamas').insert([
        {
            label: 'Fruit Sleep Set',
            description: 'This character has a fruit sleep set. Loose fit tee and shorts covered in playful sleepy fruits.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Animal Button Up PJ Set',
            description: 'This character has an animal button up pj set. Classic button up long sleeve shirt and pants with tiny animals all over.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Snuggly Candy Sleep Hoodie',
            description: 'This character has a snuggly candy sleep hoodie. Oversized hoodie with sleepy candy characters and a built in matching sleep mask.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'candies'
        },
        {
            label: 'Animal Footie Pajamas',
            description: 'This character has animal footie pajamas. Full body zipper onesie with a pattern resembling an animal.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Moonlight Tank and Joggers',
            description: 'This character has moonlight tank and joggers. Soft tank top with a glow in the dark moon print, paired with fleece joggers that has references of their star sign all over.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'star-signs'
        },
        {
            label: 'Frilled Candy Nightgown',
            description: 'This character has a frilled candy nightgown. Knee length cotton nightdown with soft ruffles, animal designs, and tiny decorative bows at the sleeves and collar.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Dessert Camisole Set',
            description: 'This character has a dessert camisole set. Matching camisole and shorts with lace trim and dessert design while layered over a matching night dress.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Plush Candy Pajamas',
            description: 'This character has plush candy pajamas. Fluffy wrap robe with embroidered candies layered over a matching nightdress.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Animal Pocket Pajamas',
            description: 'This character has animal pocket pajamas. Long sleeve top and pants with puffed sleeves and patch pockets with animal ears.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'animals'
        },
        {
            label: 'Cozy Cuffed Onesie',
            description: 'This character has a cozy cuffed onesie. Fleece onesie with button up back flap and heart patterned cuffs around wrists and ankles.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Comfy Candy Tee and Boxers',
            description: 'This character has a comfy candy tee and boxers. Loose oversized tshirt with a sleepy candy character and drawstring boxers with mismatched socks.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'candies'
        },
        {
            label: 'Sumber Romper',
            description: 'This character has a slumber romper. One piece romper with a middle zipper, wide neck, and small animal face stitched over the check pocket.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        },
        {
            label: 'Sleepy Tracksuit',
            description: 'This character has a sleepy tracksuit. Cotton tracksuit with "Power Nap Club" embroidery and wristbands shaped like mini pillows.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Drop Shoulder Pajama Shirt',
            description: 'This character has a drop shoulder pajama shirt. Breathable oversized sleep shirt that falls to mid thigh with printed moons and clouds.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Weighted Sleep Cloak',
            description: 'This character has a weighted sleep cloak. Blanket thick cloak worn like a poncho with a pocket on the inside for hand warming and a hood with built in ears.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        }
    ])
}