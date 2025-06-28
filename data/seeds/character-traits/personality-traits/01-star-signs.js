exports.seed = function (knex) {
    return knex('star-signs').insert([
        {
            label: 'Aries',
            description: 'This is the star sign aries. Horned ram, bold red or flame motifs. Stands for courage, action, impulsiveness, and fiery energy.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Taurus',
            description: 'This is the star sign taurus. Strong bull, flowers, earth tones, and vines. Stands for stability, sensuality, loyalty, and indulgence.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Gemini',
            description: 'This is the star sign gemini. Dual masks, mirrored shapes, and air symbols. Stands for communication, curiosity, duality, and cleverness.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Cancer',
            description: 'This is the star sign cancer. Crab claws, moon phases, and ocean waves. Stands for emotion, protection, nurturing, and intuition.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Leo',
            description: 'This is the star sign leo. Lions mane, sunbursts, golds and oranges. Stands for pride, confidence, drama, and leadership.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Virgo',
            description: 'This is the star sign virgo. Wheat bundles, clean lines, and pale greens. Stands for precision, service, thoughtfulness, and modesty.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Libra',
            description: 'This is the star sign libra. Balanced scales, symmetrical patterns, soft pinks and blues. Stands for harmony, beauty, justice, and indecision.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Scorpio',
            description: 'This is the star sign scorpio. Scorpion tail, water shadows, and sharp lines. Standing for passion, secrecy, transformation, and intensity.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Sagittarius',
            description: 'This is the star sign sagittarius. Bow and arrow, celestial maps, and wide open skies. Standing for freedom, philosophy, adventure, and blunt honesty.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Capricorn',
            description: 'This is the star sign capricorn. Goat horns and fish tail combo, cliffs, and ancient ruins. Stands for discipline, ambition, endurance, and tradition.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Aquarius',
            description: 'This is the star sign aquarius. Flowing water jugs, circuitry, and lightning. Standing for innovation, rebellion, intellect, and weirdness.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Pisces',
            description: 'This is the star sign pisces. Twin koi or swirling fish, dreamscapes, blues and purples. Imagination, empathy, emotion, and illusion.',
            image_url: null,
            rarity: 'common'
        }
    ])
}