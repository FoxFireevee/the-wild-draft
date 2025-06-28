exports.seed = function (knex) {
    return knex('posture-types').insert([
        {
                label: 'Upright',
            description: 'This character has an upright type of posture. Neutral, healthy posture with evenly distributed weight.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rigid',
            description: 'This character has a rigid type of posture. Stiff and straight, often military or tense in nature.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Relaxed',
            description: 'This character has a relaxed type of posture. Loose and casual, shoulders slightly slumped, easygoing vibe.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Slouched',
            description: 'This character has a slouched type of posture. Drooped shoulders, head down, gives tired or insecure appearance.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Stooped',
            description: 'This character has a stooped type of posture. Upper back hunched forward, often associated with age or injury.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Confident',
            description: 'This character has a confident type of posture. Chest out, shoulders back, assertive and proud stance.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Arched Back',
            description: 'This character has an arched back type of posture. Curved lower back, sometimes seen in posing or dancers.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Swayback',
            description: 'This character has a swayback type of posture. Hips pushed forward, upper body leans backward slightly.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tense',
            description: 'This character has a tense type of posture. Tight muscles, clenched fists, often on edge or ready for action.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Limp',
            description: 'This character has a limp type of posture. Lack of tension in limbs, often due to weakness or carelessness.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Graceful',
            description: 'This character has a graceful type of posture. Fluid, smooth, ballet like posture with elegance in movement.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Predatory',
            description: 'This character has a predatory type of posture. Low, prowling stance like a hunter or stalker.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Animalistic',
            description: 'This character has an animalistic type of posture. Hunched, grounded, and primal. Fitting for wild or beast like character.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Lopsided',
            description: 'This character has a lopsided type of posture. One shoulder higher or uneven weight distribution, maybe due to injury or personality quirk.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Swaggering',
            description: 'This character has a swaggering type of posture. Leaned back slightly, hips or shoulders swinging with confidence.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Timid',
            description: 'This character has a timid type of posture. Drawn inward, closed body language, and head slightly lowered.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Balanced',
            description: 'This character has a balanced type of posture. Poised and centered, like a monk or a fighter.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Reclined',
            description: 'This character has a reclined type of posture. More of a resting posture, leaning back or lounging often.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Alert',
            description: 'This character has a alert type of posture. Back straight, eyes wide, stance ready for action or surprise.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Floating/Postureless',
            description: 'This character has a floating/postureless type of posture. Relaxed and effortless, floating and defying gravity.',
            image_url: null,
            rarity: 'common'
        },
    ])
}