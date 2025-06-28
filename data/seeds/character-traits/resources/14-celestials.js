exports.seed = function (knex) {
    return knex('celestials').insert([
        {
            label: 'New Moon',
            description: 'This is a new moon. A shadowed moon, representing mystery, beginnings, and potential.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Waxing Crescent',
            description: 'This is a waxing crescent. A slim curve of light, symbolizing growth and hopes.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'First Quarter',
            description: 'This is a first quarter. Half lit moon, representing decision and momentum.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Waxing Gibbous',
            description: 'This is a waxing gibbous. Almost full, glowing with anticipation and buildup.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Full Moon',
            description: 'This is a full moon. Brilliant and round, embodying fullness, emotion, and power.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Waning Gibbous',
            description: 'This is a waning gibbous. Softly fading, symbol of reflection and generosity.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Last Quarter',
            description: 'This is a last quarter. Half moon again, this time for release and readjustment.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Waning Crescent',
            description: 'This is a waning crescent. A closing sliver, associated with rest and renewal.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Blood Moon',
            description: 'This is a blood moon. A rare red tinted moon, associated with omens and transformation.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Blue Moon',
            description: 'This is a blue moon. A rare second full moon in a month, symbolizing rarity and uniqueness.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Shooting Star',
            description: 'This is a shooting star. A streak of light, linked to wishes, fate, and swift change.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Supernova',
            description: 'This is a supernova. A radiant exploding star, chaotic beauty, and dramatic endings.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Neutron Star',
            description: 'This is a neutron star. Dense and invisible, symbol of hidden strength.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Pulsar',
            description: 'This is a pulsar. Emits rhythmic beams of light, often tied to time and destiny.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Binary Star',
            description: 'This is a binary star. Twin stars orbiting each other, signifying duality and connection.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Red Giant',
            description: 'This is a red giant. A huge old star glowing warmly representing age and wisdom.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'White Dwarf',
            description: 'This is a white dwarf. A tiny but hot remnant, glowing faintly with tenacity.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Nova',
            description: 'This is a nova. A temporary bright flare from a dying star, sudden inspiration.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Falling Star Cluster',
            description: 'This is a falling star cluster. A cluster sparkling mid descent linked to magic and rarity.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Star Halo',
            description: 'This is a star halo. A visual glow or crown around a celestial body, mystical and divine.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mercury',
            description: 'This is the planet mercury. Small, fast moving, associated with speed, thought and change.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Venus',
            description: 'This is the planet venus. Bright and beautiful, the planet of beauty, love and allure.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Earth',
            description: 'This is the planet earth. Lush and alive, symbolic of balance, grounding, and connection.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mars',
            description: 'This is the planet mars. Reddish and fierce, planet of energy, battle, and willpower.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Jupiter',
            description: 'This is the planet jupiter. Largest, majestic, representing wisdom, abundance, and growth.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Saturn',
            description: 'This is the planet saturn. Ringed and dignified, tied to discipline, karma, and cycles.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Uranus',
            description: 'This is the planet uranus. Pale blue and tipped, planet of rebellion, weirdness, and shock.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Neptune',
            description: 'This is the planet neptune. Deep blue and misty, associated with dreams, illusions, water.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Pluto',
            description: 'This is the planet pluto. Tiny but powerful, symbol of death, rebirth, and transformation.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Comet Trail',
            description: 'This is the planet comet trail. A glowing tail of dust and light, symbol of fate in motion.',
            image_url: null,
            rarity: 'common'
        }
    ])
}