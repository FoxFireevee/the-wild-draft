exports.seed = function (knex) {
    return knex('classes').insert([
        {
            label: 'Artificer',
            description: 'This characters class type is an artificer. Masters of invention. Artificers infuse mundane items with magical energy, blending technology and arcane science.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Barbarian',
            description: 'This characters class type is a barbarian. Primal warriors driven by fury. Barbarians harness raw physical power and rage to crush their foes and survive even the deadliest wounds.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Bard',
            description: 'This characters class type is a bard. Masters of music, speech, and magic. Bards weave spellcraft through performance, inspiration, and story. They are versatile and deeply creative adventurers.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Cleric',
            description: 'This characters class type is a cleric. Divinely empowered spellcasters. Clerics draw their strength from the gods or cosmic forces they serve. They can wield radiant healing or divine destruction with equal skill.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Druid',
            description: 'This characters class type is a druid. Druids are spellcasters who draw their power from nature itself. Plants, animals, the weather, and even the raw elemental forces. They can shapeshift into animals and call upon natural magic to protect the balance of the world.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fighter',
            description: 'This characters class type is a fighter. Fighting are versatile warriors who rely on physical prowess, precise technique, and grit. They are highly customizable, with access to multiple attacks, fighting styles, and subclasses to suit any combat role.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Monk',
            description: 'This characters class type is a monk. Monks are disciplined warriors who train their bodies and minds into living weapons. They use ki energy to strike swiftly, dodge blows, walk on water, and even slow time. Light on armor but heavy on style, monks are fast, focused, and fierce.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Paladin',
            description: 'This characters class type is a paladin. Paladins are holy knights bound by powerful oaths. They blend martial might with divine magic, healing allies, smiting foes, and standing as bulwarks of righteousness. But not all paladins serve the light. Some serve darker callings too.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Ranger',
            description: 'This characters class type is a ranger. Rangers are versitile warriors and spellcasters, attuned to the natural world and specialized in taking down specific threats. With a beast at their side or magic in their quiver, they thrive in danger.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rogue',
            description: 'This characters class type is a rogue. Rogues specialize in stealth, dexterity, and sudden bursts of damage like a sneak attack. They are masters of manipulation, movement, and misdirection.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Sorcerer',
            description: 'This characters class type is a sorcerer. Sorcerers wield innate arcane magic and are known for their limited but potent spell list, empowered by metamagic. Allowing them to shape and control spells like no one else.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Warlock',
            description: 'This characters class type is a warlock. Warlocks are spellcasters who gain their magic through a pact with an otherworldly patron. With unique invocations and pact boons. They blend eldritch blasts with flavor rich story hooks.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Wizard',
            description: 'This characters class type is a wizard. Wizards are arcane scholars who learn spells through rigorous study. With the largest spell list and powerful rituals. They are unmatched in magical versatility.',
            image_url: null,
            rarity: 'common'
        }
    ])
}