exports.seed = function (knex) {
    return knex('chinese-zodiaks').insert([
        {
            label: 'Rat',
            description: 'This characters chinese zodiak is a rat. Small, quick, with sharp eyes and twitchy whiskers. Clever, adaptable, resourceful, and charming.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Ox',
            description: 'This characters chinese zodiak is an ox. Strong, sturdy, with wide shoulders and determined eyes. Reliable, patient, hardworking, and grounded.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tiger',
            description: 'This characters chinese zodiak is a tiger. Striped, muscular, with piercing eyes and powerful limbs. Brave, confident, competitive, and unpredictable.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rabbit',
            description: 'This characters chinese zodiak is a rabbit. Soft furred, alert ears, and gentle expression. Kind, elegant, cautious, and peaceful.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Dragon',
            description: 'This characters chinese zodiak is a dragon. Long, serpentine body with horns, scales, and fire or cloud like breath. Ambitious, charismastic, powerful, and noble.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Snake',
            description: 'This characters chinese zodiak is a snake. Sleek, coiled body, narrow eyes, often still and watchful. Wise, mysterious, strategic, and graceful.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Horse',
            description: 'This characters chinese zodiak is a horse. Long mane, strong legs, and bright expressive eyes. Energetic, free spirited, active, and impatient.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Goat',
            description: 'This characters chinese zodiak is a goat. Curly horns, soft wool, and gentle demeanor. Gentle, artistic, compassionate, and introverted.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Monkey',
            description: 'This characters chinese zodiak is a monkey. Agile frame, clever eyes, and constantly in motion. Witty, curious, mischievous, and inventive.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rooster',
            description: 'This characters chinese zodiak is a rooster. Bright plumage, proud stance, and sharp break. Observant, punctual, confident, and talkative.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Dog',
            description: 'This characters chinese zodiak is a dog. Loyal eyes, alert ears, and always watching over others. Loyal, honest, cautious, and protective.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Pig',
            description: 'This characters chinese zodiak is a pig. Round body, soft features, and snout to the ground. Generous, calm, indulgent, and sincere.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Cat',
            description: 'This characters chinese zodiak is a cat. Sleek, nimble, expressive tail, and sharp eyes. Independent, intuitive, misunderstood, and graceful.',
            image_url: null,
            rarity: 'common'
        }
    ])
}