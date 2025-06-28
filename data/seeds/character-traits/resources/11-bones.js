exports.seed = function (knex) {
    return knex('bones').insert([
        {
            label: 'Skull',
            description: 'This bone is a skull. Rounded and hollow with large eye sockets, a nasal cavity, and a jaw hinge.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mandible',
            description: 'This bone is a mandible. Curved and u shaped with a prominent chin and rounded ends for joints.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Clavicle',
            description: 'This bone is a clavical. Thing s shaped bone that arches gracefully across the top of the chest.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Scapula',
            description: 'This bone is a scapula. Flat, triangular plate like bone with smooth edges and slight ridging.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Humerus',
            description: 'This bone is a humerus. Long straight bone with a round knob on one end and a flat edge on the other.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Radius',
            description: 'This bone is a radius. One of the forearm bones, narrow and slightly curved, and thicker at the wrist end.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Ulna',
            description: 'This bone is an ulna. Longer and straighter than the radius with a hook like notch near the elbow end.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rib',
            description: 'This bone is a rib. Thin, curved bones like wide arcs that taper toward the front and wrap the torso.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Sternum',
            description: 'This bone is a sternum. Flat, elongated plate centered on the chest with slight ridges and notches.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Vertebra',
            description: 'This bone is a vertebra. Small, round bone with a hole in the center and tiny spikes extending outward.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Pelvis',
            description: 'This bone is a pelvis. Broad, rounded bone that sits at the base of the spine.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Sacrum',
            description: 'This bone is a sacrum. Triangular, shield shaped bone that sits at the base of the spine.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Femur',
            description: 'This bone is a femur. Thickest bone in the body, straight with a large ball on one end and notched at the other.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Patella',
            description: 'This bone is a patella. Small, rounded and flat bone shaped like a rounded triangle.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tibia',
            description: 'This bone is a tibia. Thick and straight shinbone with a flatter surface on the top end.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fibula',
            description: 'This bone is a fibula. Long and slender bone that runs alongside the tibia with subtle curves.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Tarsals',
            description: 'This bone is a tarsals. Cluster of small and blocky bones taht form the back of the foot.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Metatarsals',
            description: 'This bone is a metatarsals. Longer bones leading from the tarsals to the toes, slightly curved.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Phalanges',
            description: 'This bone is a phalanges. Short and narrow bones arranged in segments that are slightly curved and tapered.',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Coccyx',
            description: 'This bone is a coccyx. Small curved bone at the very base of the spine, tapering to a point.',
            image_url: null,
            rarity: 'common'
        }
    ])
}