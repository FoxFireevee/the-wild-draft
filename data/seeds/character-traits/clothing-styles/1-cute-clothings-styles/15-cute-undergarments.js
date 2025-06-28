exports.seed = function (knex) {
    return knex('cute-undergarnments').insert([
        {
            label: 'Fruit Slice Boxer Briefs',
            description: 'This character has fruit slice boxer briefs. Snug fitting briefs with sliced fruit.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Candy Stripe Boxers',
            description: 'This character has candy stripe boxers. Loose fit boxers with vertical striping, finished with a tiny candy wrapped button on the waistband.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'candies'
        },
        {
            label: 'Mushroom Sprout Undershorts',
            description: 'This character has mushroom sprout undershorts. Soft forest green shorts with tiny mushroom patterns sprouting along the hemline.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'mushrooms'
        },
        {
            label: 'Dessert Briefs',
            description: 'This character has dessert briefs. Dessert themed briefs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'desserts'
        },
        {
            label: 'Animal Sleepy Shorts',
            description: 'This character has animal sleepy shorts. Comfy shorts printed with tiny sleepy animal faces.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Fruit Cream Bloomers',
            description: 'This character has fruit cream bloomers. Bloomers in layered colors and a whipped cream looking ruffle trim.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'fruits'
        },
        {
            label: 'Dessert Bralette Set',
            description: 'This character has a dessert bralette set. Delicate bralette and panty set patterned with desserts and satin bows.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Floral Petal Panties',
            description: 'This character has floral petal panties. Lightweight panties with petal shapes layered over one another like a flower bloom.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Dessert Fluff Undies',
            description: 'This character has dessert fluff undies. Super soft undies with dessert patterns.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts' 
        },
        {
            label: 'Mushroom Trim Shorts',
            description: 'This character has mushroom trim shorts. Sleep shorts with a mushroom cap print and a fuzzy mushroom shaped buttons on the hips.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'mushrooms'
        },
        {
            label: 'Fruit Gingham Set',
            description: 'This character has a fruit gingham set. Breathable cotton set in gentle gingham with tiny fruit illustrations and a drawstring tie.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'fruits'
        },
        {
            label: 'Mushroom Cap Sleep Shorts',
            description: 'This character has mushroom cap sleep shorts. Rounded cut shorts patterned with a mushroom theme.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'mushrooms'
        },
        {
            label: 'Dessert Tray Underset',
            description: 'This character has dessert tray underset. Top and bottom set in soft jersey material with patterned images of desserts.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'desserts'
        },
        {
            label: 'Animal Print Modal Undies',
            description: 'This character has animal print modal undies. Comfy modal shorts with faint animal prints and fuzzy edged seams.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        },
        {
            label: 'Flower Wrap Shorts',
            description: 'This character has flower wrap shorts. Wrap style undershorts with wide flower graphics and leafy trim accents.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'flowers'
        },
    ])
}