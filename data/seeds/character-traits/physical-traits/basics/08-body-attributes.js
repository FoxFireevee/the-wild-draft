exports.seed = function (knex) {
    return  knex('body-attributes').insert([
        {
            label: 'Asymmetrical',
            description: 'This character has an asymmetrical kind of body. One side of the body differs from the other in size, shape, or features.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Symmetrical',
            description: 'This character has a symmetrical kind of body. Balanced, proportionate features, and limbs on both sides.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Elongated',
            description: 'This character has an elongated kind of body. Limbs or torso are unusually long or stretched.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Compact',
            description: 'This character has a compact kind of body. Short and tight frame with minimal spacing between limbs and torso.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Lithe',
            description: 'This character has a lithe kind of body. Slim and flexible, often associated with agility.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Bulky',
            description: 'This character has a bulky kind of body. Large frame that looks powerful or heavy.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Slender',
            description: 'This character has a slender kind of body. Thin and graceful, often with long limbs and narrow shoulders.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Willowy',
            description: 'This character has a willowy kind of body. Thin but soft and flowing in movement.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Sturdy',
            description: 'This character has a sturdy kind of body. Solid and dependable structure. Built for endurance.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Angular',
            description: 'This character has an angular kind of body. Sharp, bony features like elbows, shoulders, and cheekbones may stand out.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rounded',
            description: 'This character has a rounded kind of body. Soft curves and smooth lines all over the body.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Lopsided',
            description: 'This character has a lopsided kind of body. Naturally or magically skewed body balance or shape.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Hourglass',
            description: 'This character has a hourglass kind of body. Classic curvy shape with wide hips and chest with a narrow waist.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Pear Shaped',
            description: 'This character has a pear shaped kind of body. Wider lower half with narrower shoulders and chest.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Inverted Triangle',
            description: 'This character has an inverted triangle kind of body. Broad shoulders with slimmer waist and hips.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rectangle',
            description: 'This character has a rectangle kind of body. Straight lines from shoulders to hips with little curve.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Barrel Chested',
            description: 'This character has a barrel chested kind of body. Large and rounded chest area that stands out.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Hunched',
            description: 'This character has a hunched kind of body. Upper back or neck naturally bent or slouched.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Broad Shouldered',
            description: 'This character has a broad shouldered kind of body. Wide and dominant upper body.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Delicate',
            description: 'This character has a delicate kind of body. Fragile looking frame with small hands, feet, and limbs.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Thin Necked',
            description: 'This character has a thin necked kind of body. Dense and powerful neck.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Flexible',
            description: 'This character has a flexible kind of body. Body naturally bends and stretches beyond the average range.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rigid',
            description: 'This character has a rigid kind of body. Body holds a stuff posture or has limited movement.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Translucent',
            description: 'This character has a translucent kind of body. Skin or body parts are partially see through.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Ethereal',
            description: 'This character has an ethereal kind of body. Light and wispy body that may defy gravity or logic.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Bestial',
            description: 'This character has a bestial kind of body. Slight or strong animalistric influences in the body shape.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: '',
            description: 'This character has a  kind of body.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Shrunken',
            description: 'This character has a shrunken kind of body. Limbs or torso are smaller thaan average or appears sunken in.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Stone Like',
            description: 'This character has a stone like kind of body. Hard and unmoving body with defined shapes like a sculpture or statue.',
            image_url: null,
            rarity: 'common'
        }
    ])
}