exports.seed = function (knex) {
    return knex('cute-shoes').insert([
        {
            label: 'Playful Velcro Sneakers',
            description: 'This character has playful velcro sneakers. Chunky sneakers with oversized velcro straps and playful patterns on the sides.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null 
        },
        {
            label: 'Fruit Accent Trainers',
            description: 'This character has fruit accent trainers. Low top trainers featuring fruit shaped rubber accents and light stitch detailings.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Cartoon High Tops',
            description: 'This character has cartoon high tops. Soft canvas high tops with cartoon eyes printed on the toes and puffy tongues.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null 
        },
        {
            label: 'Button Buckle Loafers',
            description: 'This character has button buckle loafers. Glossy loafers with mismatched novelty buttons and wide buckles.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Animal Slip Ons',
            description: 'This character has animal slip ons. Fuzzy slip on shoes with tiny animals ears poking up near the heel tab.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Lace Up Candy Heels',
            description: 'This character has lace up candy heels. Chunky platform heels with wide ribbon laces and a candy themed heel base.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Dessert Bow Flats',
            description: 'This character has dessert bow flats. Round toe ballet flats with a big center bow and subtle dessert embroidery along the sides.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Heart Buckle Mary Janes',
            description: 'This character has heart buckle mary janes. Classic mary janes with heart shaped metal buckles and a shimmer coating.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null 
        },
        {
            label: 'Floral Petal Slippers',
            description: 'This character has floral petal slippers. Soft slipper shoes shaped like blooming flower petals with a cushy insole.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Ruffled Strap Sandals',
            description: 'This character has ruffled strap sandals. Open toe sandals with soft layered ruffle straps and a glittery sole.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Mushroom Garden Boots',
            description: 'This character has mushroom garden boots. Ankle boots with mossy texture and stitched mushroom patterns on the heel.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'mushrooms'
        },
        {
            label: 'Padded Puff Sneakers',
            description: 'This character has padded puff sneakers. Ultra cushioned sneakers with puffy segments and soft suede lining.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Velcro Cloud Walkers',
            description: 'This character has velcro cloud walkers. Foam slip ons with raised cloud shapes and adjustable velcro tabs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Patchwork Clogs',
            description: 'This character has patchwork clogs. Clogs with sewn on patch designs and removable charm loops.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Star Step Slip Shoes',
            description: 'This character has star step slip shoes. Smooth slip on shoes with star imprint soles and reflective piping around the edges.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
    ])
}