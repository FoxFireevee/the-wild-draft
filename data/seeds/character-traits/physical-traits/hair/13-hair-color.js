exports.seed = function (knex) {
    return knex('hair-color').insert([
        {
            label: 'Hair Color',
            description: 'This is the character hair color.',
            colorNumber: null,
            hairColors: null
        }
    ])
}