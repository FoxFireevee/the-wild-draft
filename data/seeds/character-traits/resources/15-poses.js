exports.seed = function (knex) {
    return knex('poses').insert([
        {
            label: 'Neutral/Standing',
            description: 'This characters pose is neutral/standing. Default pose, relaxed but present.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Happy/Friendly',
            description: 'This characters pose is happy/friendly. Smiling, waving, looking welcoming.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Angry/Defensive',
            description: 'This characters pose is angry/defensive.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Sad/Vulnerable',
            description: 'This characters pose is sad/vulnerable. Looking down, hand over heart, teary eyed.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Flirty/Playful',
            description: 'This characters pose is flirty/playful. Smirk, eyebrow raised, suggestive lean.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Scared/Shocked',
            description: 'This characters pose is scared/shocked. Hands up defensively, wide eyes, stepping back.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tired/Worn Out',
            description: 'This characters pose is tired/worn out. Slouched, rubbing eyes, exhuasted expression.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Drunk/Woozy',
            description: 'This characters pose is drunk/woozy. Swaying, flushed face, bottle or mug in hand.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Thinking/Pondering',
            description: 'This characters pose is thinking/pondering. Stroking chin, arms folded, deep in thought.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mischievous/Scheming',
            description: 'This characters pose is mischievous/scheming. Stroking chin, arms folded, deep in thought.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Begging/Pleading',
            description: 'This characters pose is begging/pleading. Hands clasped together, desperate expression.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fearless/Brave',
            description: 'This characters pose is fearless/brave. Chest puffed out, confident stance, determined expression.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Humiliated/Embarrassed',
            description: 'This characters pose is humiliated/embarrassed. Blushing, looking away, rubbing back of neck, maybe arms crossed awkwardly or pulling a prank item off themselves.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Read for Battle',
            description: 'This characters pose is ready for battle. Stance prepared, weapon drawn, intense gaze.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Defeated in Battle',
            description: 'This characters pose is defeated in battle. On one knee, gripping an injury, exhuasted.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Victorious in Battle',
            description: 'This characters pose is victorious in battle. Standing tall, weapon raised, triumphant expression.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Injured but Standing',
            description: 'This characters pose is injured but standing. Holding wound, barely breathing, determined.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Blocking an Attack',
            description: 'This characters pose is blocking an attack. Bracing against a hit, shield raised, gritted teeth.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Attacking/Mid Strike',
            description: 'This characters pose is attacking/mid strike. Mid swing with weapon and aggressive stance.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Casting Magic/Enchanting',
            description: 'This characters pose is casting magic/enchanting. Hand raised, energy forming, glowing eyes.',
            image_url: null,
            rarity: 'common'
        },
    ])
}