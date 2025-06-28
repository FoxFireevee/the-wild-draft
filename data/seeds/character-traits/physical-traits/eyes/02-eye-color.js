exports.seed = function (knex) {
    return knex('eye-color').insert([
        {
            label: 'Eye Color',
            description: 'This is the characters eye color.',
            colorNumber: null,
            eyeColor: null
        }
    ])
}