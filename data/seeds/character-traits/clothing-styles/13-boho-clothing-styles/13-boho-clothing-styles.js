exports.seed = function (knex) {
    return knex('boho-clothing-styles').insert([
        {masculine: {
            hats:
            gloves:
            scarves:
            shirts:
            pants:
            shorts:
            skirts:
            dresses:
            socks:
            shoes:
        }},
        {feminine: {
            hats:
            gloves:
            scarves:
            shirts:
            pants:
            shorts:
            skirts:
            dresses:
            socks:
            shoes:
        }},
        {neutral: {
            hats:
            gloves:
            scarves:
            shirts:
            pants:
            shorts:
            skirts:
            dresses:
            socks:
            shoes:
        }}
    ])
}