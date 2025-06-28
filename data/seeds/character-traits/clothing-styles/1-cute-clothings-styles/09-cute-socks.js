exports.seed = function (knex) {
    return knex('cute-socks').insert([
        {
            label: 'Fruit Frilled Socks',
            description: 'This character has fruit frilled socks. Ankle high socks with subtle frills and embroidered fruit patterns near the top.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'fruits'
        },
        {
            label: 'Cartoon Crew Socks',
            description: 'This character has cartoon crew socks. Cozy crew socks with stitched sleepy cartoon faces on the toes.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null
        },
        {
            label: 'Pom Pom Striped Socks',
            description: 'This character has pom pom striped socks. Striped socks with a small pom pom on the back of each heel.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null 
        },
        {
            label: 'Patchy Knee Socks',
            description: 'This character has patchy knee socks. Mismatched patterned socks patched together with zigzag seams.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: null 
        },
        {
            label: 'Cozy Critter Socks',
            description: 'This character has cozy critter socks. Thick knit socks with little animal ear flaps sticking out of the cuffs.',
            image_url: null,
            rarity: 'common',
            genderTag: 'masculine',
            resourceTag: 'animals'
        },
        {
            label: 'Dessert Ribbon Socks',
            description: 'This character has dessert ribbon socks. Lacy socks with satin ribbon bows and soft dessert themed patterns.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'desserts'
        },
        {
            label: 'Candy Lace Ankle Socks',
            description: 'This character has candy lace ankle socks. Ankle socks with candy shaped lace trimming the edges.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'candies'
        },
        {
            label: 'Flower Mesh Socks',
            description: 'This character has flower mesh socks. See through mesh socks with soft flower print overlays.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: 'flowers'
        },
        {
            label: 'Heart Cuff Socks',
            description: 'This character has heart cuff socks. Soft cotton socks with heart shaped cuff trim and subtle shimmer thread.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Frill Edge Thigh Highs',
            description: 'This character has frill edge thigh highs. Thigh high socks with frilly edges and soft ombre coloring.',
            image_url: null,
            rarity: 'common',
            genderTag: 'feminine',
            resourceTag: null
        },
        {
            label: 'Colorblock Cozy Socks',
            description: 'This character has colorblock cozy socks. Mid calf socks with blocked color sections and fuzzy texture.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Mushroom Stitch Socks',
            description: 'This character has mushroom stitch socks. Knitted socks with stitched mushroom shapes near the toes.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'mushrooms'
        },
        {
            label: 'Plain Puffy Socks',
            description: 'This character has plain puffy socks. Slightly oversized puffy socks with folded cuffs for comfort.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null
        },
        {
            label: 'Gradient Slouch Socks',
            description: 'This character has gradient slouch socks. Socks that gently fade from one pastel tone to another with a scrunched design.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: null 
        },
        {
            label: 'Animal Paw Socks',
            description: 'This character has animal paw socks. Socks with printed paw pads on the sole and soft fuzz on the cuff.',
            image_url: null,
            rarity: 'common',
            genderTag: 'neutral',
            resourceTag: 'animals'
        }
    ])
}