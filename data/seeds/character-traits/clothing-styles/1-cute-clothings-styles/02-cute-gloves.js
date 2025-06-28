exports.seed = function (knex) {
    return knex('cute-gloves').insert([
        {
            label: 'Animal Paw Mittens',
            description: 'This character has animal paw mittens. Mittens shaped like animal paws.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Confetti Fingerless Gloves',
            description: 'This character has confetti fingerless gloves. Neon speckled yarn throughout the gloves.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Tiny Animal Grips',
            description: 'This character has tiny animal grips. Gloves resembling an animal.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Doodle Sketch Gloves',
            description: 'This character has doodle sketch gloves. Decorated with childlike crayon print patterns.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Bubble Wrap Gauntlets',
            description: 'This character has bubble wrap gauntlets. Padded with a bubble like design on the wrists.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Heart Lace Gloves',
            description: 'This character has heart lace gloves. Thin lace gloves with pink heart accents along the wrist.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Candy Mitts',
            description: 'This character has candy mitts. Swirled colors on fluffy mittens with pom tails.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Rosy Ribbon Gloves',
            description: 'This character has rosy ribbon gloves. Soft gloves ties with satin ribbons at the wrist.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Blush Animal Claws',
            description: 'This character has blush animal claws. Faux fur finger gloves with retractable claws.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'animals'
        },
        {
            label: 'Candy Gloves',
            description: 'This character has candy gloves. Gloves themed with candy.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Buttonpatch Gloves',
            description: 'This character has buttonpatch gloves. Fleece gloves with mismatched fabric patterns.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Checkerboard Wool Gloves',
            description: 'This character has checkerboard wool gloves. Colorful checkerboard pattern with a solid color cuff.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Star Stitch Gloves',
            description: 'This character has star stitch gloves. Stars stitched onto the gloves.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Chalk Dust Mitts',
            description: 'This character has chalk dust mitts. Cotton mittens with shalky rainbow pastels on the palms.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Fuzzy Cuff Gloves',
            description: 'This character has fuzzy cuff gloves. Plain gloves with oversized cuffs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        }
    ])
}