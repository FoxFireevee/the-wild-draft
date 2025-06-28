exports.seed = function (knex) {
    return knex('cute-skirts').insert([
        {
            label: 'Doodle Kilt',
            description: 'This character has a doodle kilt. Plaid kilt with hang drawn cartoon characters stitched along the hem.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Bowtie Wrap Skirt',
            description: 'This character has a bowtie wrap skirt. Wrap skirt with stitched on miniature bowties and a diagonal pocket lined with satin.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Gamer Pleats',
            description: 'This character has a gamer pleats. Box pleated skirt with a pixel heart embroidery and a tiny joystick charm on the belt loop.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Patchy Panel Skirt',
            description: 'This character has a patchy panel skirt. Asymmetrical and made of various panels of fabrics resembling patchwork from childhood quilts.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Checkerboard Swing Skirt',
            description: 'This character has a checkerboard swing skirt. Flared mini with a checkerpattern and a candy shaped zipper.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'candies'
        },
        {
            label: 'Dessert Tier Skirt',
            description: 'This character has a dessert tier skirt. Triple tiered with a lacey trim and a waistband decorated with a dessert inspired theme.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Flower Ruffle Skirt',
            description: 'This character has a flower ruffle skirt. Flower inspired skirt with cascading side ruffles and subtle glitter in the fabric.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Candy Tulle Skirt',
            description: 'This character has a candy tulle skirt. Sheer overlay tulle skirt with candy prints and a rainbow satin underlayer.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Heart Charm Skater Skirt',
            description: 'This character has a heart charm skater skirt. Stitched skirt with a stitched heart charm dangling from a chain like waistband.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Fruit Layer Skirt',
            description: 'This character has a fruit layer skirt. Puffy layered mesh skirt with a fruit print and lacey detail under each tier.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Candy Cloud Skirt',
            description: 'This character has a candy cloud skirt. Soft white A-line skirt with embroidery of stars, moons, and candies.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'candies'
        },
        {
            label: 'Rainbow Suspender Skirt',
            description: 'This character has a rainbow suspender skirt. Removable rainbow suspender straps and cloud shaped pockets.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Dessert Wrap Skirt',
            description: 'This character has a dessert wrap skirt. Desert themed wrap skirt.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'desserts'
        },
        {
            label: 'Animal Cargo Skirt',
            description: 'This character has an animal cargo skirt. Pockets have animals ears on them.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        },
        {
            label: 'Dreamcore Skirt',
            description: 'This character has a dreamcore skirt. Faded ombre skirt stitched with constellations and a floating feel.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        }
    ])
}