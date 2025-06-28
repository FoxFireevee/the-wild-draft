exports.seed = function (knex) {
    return knex('environment-types').insert([
        {
            label: 'Plains',
            description: 'This characters environment type is from the plains. Nomadic, horseback, cultures, and wind magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Forests',
            description: 'This characters environment type is from the forests. Tree dwelling, camouflage, abilities, and plant magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Jungle',
            description: 'This characters environment type is from the jungle. Dense foliage, humidity resistant, and poison magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Desert',
            description: 'This characters environment type is from the desert. Heat resistant, burrowing, and mirage based magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tundra',
            description: 'This characters environment type is from the tundra. Cold adapted, furred, hibernation abilities, and ice magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mountain and Highlands',
            description: 'This characters environment type is from the mountain and highlands. Altitude resistant and storm magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Cavernous',
            description: 'This characters environment type is from the cavernous. Lives in shallow caves, mineral based diets, nocturnal, and pressure magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Bioluminescent Cave Dwellers',
            description: 'This characters environment type is from the bioluminescent cave dwellers. Glow based communication, fungi symbiosis, and mushroom magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Shadow Adapted Beings',
            description: 'This characters environment type is from the shadow adapted beings. Dark vision, stealth oriented, silent moving, and shadow magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Magnafused Creatures',
            description: 'This characters environment type is from the magnafused creatures. Heat immunity and lava magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Deep Sea Dwellers',
            description: 'This characters environment type is from the deep sea dwellers. Abyssal bioluminescence, pressure resistance bodies, and water magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Coral Reef Creatures',
            description: 'This characters environment type is from the coral reef creatures. Colorful, symbiotic relationships, reef life magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'River and Lake Dwellers',
            description: 'This characters environment type is from the river and lake dwellers. Amphibious, fast swimmers, mud based, camouflage, and mud magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Swamp Creatures',
            description: 'This characters environment type is from the swamp creatures. Poison resistant, shape shifters, and necromatic magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'High Altitude Creatures',
            description: 'This characters environment type is from the high altitude creatures. Gliders, feathered, ice resistant, and weather magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Floating Island Dwellers',
            description: 'This characters environment type is from the floating island dwellers. Aerial cities, lighter than air materials, and gravity magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Stormborn Species',
            description: 'This characters environment type is from the stormborn species. Lightning conductors, thrive in hurricanes, and lightning magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fey Touched',
            description: 'This characters environment type is from the fey touched. Tricksters, illusionists, and animal magic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Void Creatures',
            description: 'This characters environment type is from the void creatures. Cosmic beings, reality warping, and teleportation.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Elemental Hybrids',
            description: 'This characters environment type is from the elemental hybrids. Fire, ice, lightning, and water infused species.',
            image_url: null,
            rarity: 'common'
        }
    ])
}