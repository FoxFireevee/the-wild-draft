exports.seed = function (knex) {
    return knex('sub-classes').insert([
        {
            label: 'Alchemist',
            description: 'This characters subclass type is alchemist. Specializing in potions and transmutations. Alchemists create elixers with powerful effects like healing allies, harming foes, or bending the laws of nature.',
            title: 'Artificer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Armorer',
            description: 'This characters subclass type is armorer. Weilding magically enhanced armor. Armorers become living weapons customizing their suit for offense or defense, and merging with its functions.',
            title: 'Artificer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Artillerist',
            description: 'This characters subclass type is artillerist. Experts in explosive arcane power. Artillerists craft magical cannons and use them to unleash barrages of force, flame, or frost across the battlefield.',
            title: 'Artificer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Battle Smith',
            description: 'This characters subclass type is battle smith. Protectors and tacticians. Battle smiths forge arcane weapons and command steel defenders to fight alongside them in perfect coordination.',
            title: 'Artificer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Path of the Berserker',
            description: 'This characters subclass type is path of the berserker. Frenzied and relentless. Berserkers enter a furious rage that pushes them beyond normal limits, sacrificing their well being for raw aggression.',
            title: 'Barbarian',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Path of the Totem Warrior',
            description: 'This characters subclass type is path of the totem warrior. Spiritual and fierce. Totem warriors channel animal spirits like the bear, wolf, or eagle to gain supernatural abilites and a deeper connection with nature.',
            title: 'Barbarian',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Path of the Ancestral Guardian',
            description: 'This characters subclass type is path of the ancestral guardian. Guided by ancestral spirits. These barbarians defend their allies with spectral guardians that intercept blows and distract enemies.',
            title: 'Barbarian',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Path of the Storm Herald',
            description: 'This characters subclass type is path of the storm herald. Infused with the power of elemental storms. Storm heralds radiate destructive energy with each rage, unleashing fire, lightning, or frost.',
            title: 'Barbarian',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Path of the Zealot',
            description: 'This characters subclass type is path of the zealot. Blessed by divine power. Zealots rage in the name of gods or cosmic forces, dealing holy wrath and defying death through sacred fury.',
            title: 'Barbarian',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Path of Wild Magic',
            description: 'This characters subclass type is path of wild magic. Chaotic and unpredictable. Wild magic barbarians surge with magical energy when they rage, causing random arcane effects that can help or hinder.',
            title: 'Barbarian',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'College of Lore',
            description: 'This characters subclass type is college of lore. Lore bards collect ancient knowledge and cultural stories, using wordsd as both weapons and shields. They are jacks of all trades, expanding their magic with additional spells.',
            title: 'Bard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'College of Valor',
            description: 'This characters subclass type is college of valor. Brave and inspiring. Valor bards lead their allies into battle with courage, empowering them with heroic tales and combat prowess.',
            title: 'Bard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'College of Glamour',
            description: 'This characters subclass type is college of glamour. Enchanted by the feywild. Glamour bards captivate with supernatural beauty and presence, charming crowds and dazzling foes with otherworldly grace.',
            title: 'Bard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'College of Swords',
            description: 'This characters subclass type is college of swords. Blending blade and performance. Swords bards are dueling entertainers who weave acrobatics, swordplay, and spellwork into an elegant combat style.',
            title: 'Bard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'College of Whispers',
            description: 'This characters subclass type is college of whispers. Mysterious and unsettling. Whisper bards use secret knowledge and psychic blades to manipulate, blackmail, and terrify their enemies from the shadows.',
            title: 'Bard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'College of Creation',
            description: 'This characters subclass type is college of creation. Creation bards understand the fabric of reality through music, crafting matter, and motion with song. They can create items and animate objects with magical harmonics.',
            title: 'Bard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'College of Spirits',
            description: 'This characters subclass type is college of spirits. Spirit bards commune with the tales of the dead, channeling spirits to tell powerful stories that manifest as magical effects be it blessings, visions, or wrath.',
            title: 'Bard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Life Domain',
            description: 'This characters subclass type is life domain. Devoted to vitality, healing, and protection. Life clerics embody the nurturing aspects of the divine. Often serving gods of health or fertility. Their healing spells are especially potent.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Light Domain',
            description: 'This characters subclass type is light domain. Wielding the power of sunlight and fire. Light clerics blind their enemies with radiant flames and cleanse darkness wherever it spreads. They are champions against shadow and deception.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'War Domain',
            description: 'This characters subclass type is war domain. Followers of gods of battle, conquest, or honor. War clerics bolster their allies and lead charges into combat. They are both fierce warriors and divine tacticians.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Temptest Domain',
            description: 'This characters subclass type is temptest domain. Storm touched and thunder born. Temptest clerics channel the wrath of the skies, using lightning, thunder, and wind to smite foes with unrelenting fury.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Trickery Domain',
            description: 'This characters subclass type is trickery domain. Worshippers of deities of michief, illusion, or shadows. Trickery clerics use deception and guile to outwit enemies. They are masters of stealth and subterfuge.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Death Domain',
            description: 'This characters subclass type is death domain. Often aligned with deities of death or the undead. Death clerics wield necrotic energy and drain the life from their foes. They are grim agents of entropy and balance or corruption.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Forge Domain',
            description: 'This characters subclass type is forge domain. Clerics of creation and craft. Forge clerics serve gods of fire and metalwork. They can bless armor and weapons, creating powerful magical gear from raw materials.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Grave Domain',
            description: 'This characters subclass type is grave domain. Keepers of the natural cycle of life and death. Grave clerics prevent undeath and ease the transition between realms. They protect souls and punish those who disturb eternal rest.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Twilight Domain',
            description: 'This characters subclass type is twilight domain. Guardians of the dusk. Twilight clerics protect the vulnerable in the space between light and darkness. They shield allies with divine twilight and comfort against fear.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Peace Domain',
            description: 'This characters subclass type is peace domain. Dedicated to unity and harmony. Peace clerics strengthen bonds between people and prevent conflict. They protect their companions through spiritual connections and soothing magic.',
            title: 'Cleric',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Circle of the Land',
            description: 'This characters subclass type is circle of the land. These druids are deeply connected to a specific environment like a forest, desert, tundra, etc. and their magic reflects the terrain they call home. Masters of elemental forces, they gain expanded spell lists tied to their chosen land.',
            title: 'Druid',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Circle of the Moon',
            description: 'This characters subclass type is circle of the moon. Shapeshifters supreme. Moon druids excel in their ability to transform into powerful beasts. They can change more frequently and into stronger creatures than other druids, making them deadly in close combat.',
            title: 'Druid',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Circle of Dreams',
            description: 'This characters subclass type is circle of dreams. Embodying the dreamlike serenity of the feywild. These druids focus on healing, peace, and protecting others through magic that feels otherworldly and gentle. They can teleport allies and ward off harm.',
            title: 'Druid',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Circle of the Shepherd',
            description: 'This characters subclass type is circle of the shepherd. Protectors of the animal world. Shepherd druids call upon spirit totems to aid their allies. They bolster beasts and fey, summon swarms, and keep communications with nature spirits open.',
            title: 'Druid',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Circle of Spores',
            description: 'This characters subclass type is circle of spores. Fouond in shadowy forests and damp caves. Spores druids embrace decay and fungi. They manipulate spores to harm enemies, create undead fungal servants, and weaponize decomposition itself.',
            title: 'Druid',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Circle of Stars',
            description: 'This characters subclass type is circle of stars. Drawing their magic from the night sky. These druids read consetllations to guids their magic. They can transform into starry avatars, maipulate fate, and harness the power of cosmic forces.',
            title: 'Druid',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Circle of Wildfire',
            description: 'This characters subclass type is circle of wildfire. These druids understand that fire brings both destruction and renewal. They summon wildfire spirits and wield flame based spells to burn away corruption and make room for rebirth.',
            title: 'Druid',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Champion',
            description: 'This characters subclass type is champion. Straightforward and powerful. Champions focus on raw athleticism and brute force. With increased critical hit chances and physical might. They shine in clean, effective combat.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Battle Master',
            description: 'This characters subclass type is battle master. Strategists and duelists who use maneuvers to control the fight. Battle masters learn special techniques that let them parry, trip, disarm, and command others mid battle.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Eldritch Knight',
            description: 'This characters subclass type is eldritch knight. Warriors who blend martial prowess with arcane magic. They use spells to enchance their attacks or defend themselves. Often teleporting or hurling magical blasts alongside swordplay.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Arcane Archer',
            description: 'This characters subclass type is arcane archer. Archers infused with magical precision. They fire enchanted arrows that curve around corners, banish foes, or explode with elemental force. Masters of the arcane bow.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Cavalier',
            description: 'This characters subclass type is cavalier. Mounted combatants and protectors who specialize in battlefield control. They defend allies, challenge foes to duels, and are near unstoppable while riding into battle.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Samurai',
            description: 'This characters subclass type is samurai. Relentless warriors with refined discipline. Samurais draw on inner resolve to push beyond normal limits. Making multiple attacks while staying calm under pressure.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Echo Knight',
            description: 'This characters subclass type is echo knight. Masters of time and shadow. Echo knights summon semi transparent echoes of themselves to attack, scout, or swap places. Fighting like they are in two places at once.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Psi Warrior',
            description: 'This characters subclass type is psi warrior. Psychic powered fighters who bolster their bodies and blades with telekinetic force. They push enemies, form shields from thought, and unleash mental strikes.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Rune Knight',
            description: 'This characters subclass type is rune knight. Fighters who harness giant forced runes. These magical carvings grant them elemental abilities, strength boosts, and the ability to grow in size like a colossus.',
            title: 'Fighter',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of the Open Hand',
            description: 'This characters subclass type is the way of the open hand. The quintessential martial artist. These monks use flurries of blows, push, and trip enemies, and shut down their ability to retaliate. Think kung fu masters and peaceful fighters who hit like a freight train.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of Shadow',
            description: 'This characters subclass type is the way of shadow. Ninjas in all but name. These monks thrive in darkness, teleporting between shadows, turning invisible in dim light, and striking unseen. Masters of stealth, subtlety, and silent takedowns.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of the Four Elements',
            description: 'This characters subclass type is the way of the four elements. Benders of nature itself. These monks wield elemental ki to unleash fire, water, air, or earth through martial arts. Throw fireballs, raise walls of stone, or fly on currents of air.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of the Long Death',
            description: 'This characters subclass type is the way of the long death. Masters of fear and morality. They steal the life force of creatures they defeat, survive mortal wounds through sheer control of their own death, and radiate an errie calm.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of the Sun Soul',
            description: 'This characters subclass type is the way of the sun soul. Radiant warriors who punch with light. Sun soul monks fire radiant energy bolts from their hands, lighting up the battlefield like a living beacon of divine flame.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of the Drunken Master',
            description: 'This characters subclass type is the way of the drunken master. Unpredictable, slippery, and hilariously effective. Inspired by drunken boxing, these monks stumble through battle with chaos and grace dodging, redirecting, and flowing unpredictably.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of the Kensei',
            description: 'This characters subclass type is the way of the kensei. Weapon focused monks who treat blades like extensions of their body. They blend weapons and unarmed strikes with martical grace, shooting arrows and swinging swords in a meditative rhythm.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of Mercy',
            description: 'This characters subclass type is the way of mercy. Masked healers and bringers of pain. These monks can heal or harm with the same strike, channeling ki into wounds or causing them. Mysterious ritualistic and theatrical.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Way of the Astral Self',
            description: 'This characters subclass type is the way of the astral self. They manifest spiritual arms, faces, and forms of their true inner self. Astral monks become living avatars, glowing with energy, striking from afar, and gazing into souls.',
            title: 'Monk',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Oath of Devotion',
            description: 'This characters subclass type is the oath of devotion. The classic knight in shining armor. Devoted to justice, virtue, and honor. These paladins wield radiant power to blind evil and protect the innocent. Think noble crusaders and paragons of goodness.',
            title: 'Paladin',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Oath of the Ancients',
            description: 'This characters subclass type is the oath of the ancients. Paladins of nature and light, protectors of life and joy. They resist magical darkness, channel fae like magic and embody the eternal struggle against decay. Their magic feels druidic, almost elven in flavor.',
            title: 'Paladin',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Oath of Vengeance',
            description: 'This characters subclass type is the oath of vengeance. Relentless hunters of evil. These paladins stop at nothing to punish the guilty. Swift, cold, and brutal. They teleport across battlefields and strike with supernatural precision. Think anti heroes, fallen angels, or lone crusaders.',
            title: 'Paladin',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Oath of the Crown',
            description: 'This characters subclass type is the oath of the Crown. Sworn to law, order, and civilization. Crown paladins act as guardians of leadership and society. They draw enemies attention, command the battlefield, and serve the greater good of their kingdom or cause.',
            title: 'Paladin',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Oath of Conquest',
            description: 'This characters subclass type is the oath of conquest. Fear is their weapon. These paladins dominate and crush their foes under an iron will. Perfect for tyrants, warlords, or those who believe in strength above all. Think lawful evil crusaders in spiked armor.',
            title: 'Paladin',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Oath of Redemption',
            description: 'This characters subclass type is the oath of redemption. Peaceful protectors who only raise a blade as a last resort. They absorb damage for others, calm aggressors, and seek to rehabilitate rather than destroy. Gentle warriors who carry immense inner strength.',
            title: 'Paladin',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Oath of Glory',
            description: 'This characters subclass type is the oath of glory. Champions of heroism and honor, inspired by greek demigods and olympic feats. They leap accross battlefields, shine with divine brilliance, and inspire greatness in others.',
            title: 'Paladin',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Oath of the Watchers',
            description: 'This characters subclass type is the oath of the watchers. Guardians against extraplanar threats. These paladins stand vigilant against fiends, fey, and creatures from beyond the stars.',
            title: 'Paladin',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Hunter',
            description: 'This characters subclass type is hunter. The classic archer or swordsman. Masters of battlefield control and survivability. They choose specific combat tactics to decimate foes. Whether through powerful strikes, multi attacks, or area control.',
            title: 'Ranger',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Beast Master',
            description: 'This characters subclass type is beast master. A loyal animal companion fights beside them. Whether it is a wolf, panther, hawk, or even something more exotic, the bond is strong. The ranger and their beast operate as a team, sharing instincts and fury.',
            title: 'Ranger',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Gloom Stalker',
            description: 'This characters subclass type is gloom stalker. Masters of the dark. These rangers are silent predators who vanish in shadows, strike before combat begins, and terrify those who live in the dark. Perfect for underdark explorers and assassins of the night.',
            title: 'Ranger',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Horizon Walker',
            description: 'This characters subclass type is horizon walker. Defenders of the multiverse. Horizon walkers detect planar rifts and teleport across the battlefield with force damage in hand. They are sci fi flavored with a mystic twist protecting the boundaries between worlds.',
            title: 'Ranger',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Monster Slayer',
            description: 'This characters subclass type is monster slayer. Experts at studying and bringing down the unnatural. These rangers are surgical and relentless in taking down big threats like vampires, liches, demons, or that weird thing that keeps eating villagers.',
            title: 'Ranger',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fay Wanderer',
            description: 'This characters subclass type is fay wanderer. Enchanted by the whimsy or terror of the feywild. They charm enemies, shimmer with mystical energy, and exude otherworldly charisma. Tricksters with swords who fight with beauty and bewilderment.',
            title: 'Ranger',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Swarmkeeper',
            description: 'This characters subclass type is swarmkeeper. Guided by a magical swarm of bees, spirits, spores, or motes of light. The swarm aids in attacks, movement, and protection, giving them a deeply strange but powerful edge. It is nature magic on overdrive.',
            title: 'Ranger',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Thief',
            description: 'This characters subclass type is thief. The classic pickpocket, burglar, and trap disarmer. Thieves climb faster, act quicker, and use magical items with uncanny talent. Great for dungeon crawlers and treasure hunters.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Assassin',
            description: 'This characters subclass type is assassin. Silent and deadly. Masters of disguise and infiltration. Assassins strike first and hardest, dealing massive damage to surprised or unaware foes. Perfect for players who love tactical ambushes.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Arcane Trickster',
            description: 'This characters subclass type is arcane trickster. Sneaky with a spark of magic. These rogues use illusion and enchantment spells to confuse, mislead, and vanish. Think sleight of hand meets spellcasting mischief.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Mastermind',
            description: 'This characters subclass type is mastermind. A manipulator and schemer. Masters of language, lies, and leadership. They can mimic speech, direct allies, and operate as spies, diplimats, or shadowy puppeteers.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Swashbuckler',
            description: 'This characters subclass type is swashbuckler. Flair, charm, and blade. These rogues duel with elegance, dash into danger, and dazzle foes with style.Think pirate captains, masked vigilantes, and smooth talking swordsmen.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Inquisitive',
            description: 'This characters subclass type is inquisitive. Human lie detectors and sherlockian sleuths. Inquisitives read body language, find hidden enemies, and make cunning, informed strikes. Ideal for detectives and truth seekers.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Scout',
            description: 'This characters subclass type is scout. The wilderness rogue. Faster than most, harder to surprise, and adept at survival. Great for hit and run tactics and tracking. A fusion of ranger and rogue energy.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Phantom',
            description: 'This characters subclass type is phantom. Touched by death. These rogues collect echoes of the dead, use ghostly abilites, and channel the voices of the departed. Eerie, elegant, and excellent for macabre roleplay.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Soulknife',
            description: 'This characters subclass type is soulknife. Rogues with psionic blades. They strike silently with mind weapons and can read thoughts or teleport short distances. Sci fi meets stealth. Slick, silent, and psychic.',
            title: 'Rogue',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Draconic Bloodline',
            description: 'This characters subclass type is draconic bloodline. You descend from dragons and your magic is infused with draconic might. Gain scales for defense, enhanced spells of your dragons element like fire or ice, and even wings later on. Great for elemental theming and raw power.',
            title: 'Sorcerer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Wild Magic',
            description: 'This characters subclass type is wild magic. Magic surges unpredicatbly from within you. Every spell could trigger a wild magic surge anything from fireballing yourself into turning blue. Risky, choatic, and tons of fun. Embrace the chaos.',
            title: 'Sorcerer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Storm Sorcery',
            description: 'This characters subclass type is storm sorcery. Your power was born in a tempest. You can fly through the air, command thunder and lightning, and even ride storms into battle. Perfect for tempestuous personalities and elemental flavor.',
            title: 'Sorcerer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Shadow Magic',
            description: 'This characters subclass type is shadow magic. You have touched the shadowfell or death itself. You see in darkness even magical, summon hounds of shadow, and defy death. Mysterious, grim, and perfect for spooky or cursed backstories.',
            title: 'Sorcerer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Divine Soul',
            description: 'This characters subclass type is divine soul. A divine force chose you as its vessel. Blend sorcerer and cleric spell lists. You can heal, bless, or smite with divine grace. Ideal for celestial bloodlines, prophets, or reluctant holy heroes.',
            title: 'Sorcerer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Aberrant Mind',
            description: 'This characters subclass type is aberrant mind. Your mind has been touched by alien power. You get psionic powers, telepathy, and tentacle like spells. Creepy, cosmic, and full of psychic flavor. Great for lovecraftian or eldritch characters.',
            title: 'Sorcerer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Clockwork Soul',
            description: 'This characters subclass type is clockwork soul. Your magic flows from a realm of order and perfection. You can stabilize chaos, shield allies, and create balance in battle. Great for magical constructs, timekeepers, or characters tied to mechanus or cosmic order.',
            title: 'Sorcerer',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Archfey',
            description: 'This characters subclass type is archfey. You made a deal with a whimsical and dangerous fey being. Masters of charm, illusion, and teleportation. Your magic dances with mischief. They enchant, confuse, or dissapear in a puff of glittering leaves.',
            title: 'Warlock',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fiend',
            description: 'This characters subclass type is fiend. You are bound to a demon or devil. Burning with infernal energy, you hurl fire and leech power from fallen foes. You are dangerously effective, with flames at your fingertips and temptation in your heart.',
            title: 'Warlock',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Great Old One',
            description: 'This characters subclass type is great old one. Your patron is something vast, alien, and unknowable. You can read minds, whisper into souls, and summon madness. Inspired by lovecraftian horror, this pact is perfect for creepy prophetic characters.',
            title: 'Warlock',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Celestial',
            description: 'This characters subclass type is celestial. A radiant bieng, perhaps an angel or solar, has chosen you. You wield healing light and radiant fire, walking a line between mercy and divine vengeance.',
            title: 'Warlock',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Hexblade',
            description: 'This characters subclass type is hexblade. You bonded with a sentient weapon or force from the shadowfell. Martial and magical, you can swing a cursed blade with charisma and strike with devastating hexes. Ideal for edgy anti heroes or haunted knights.',
            title: 'Warlock',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Undying',
            description: 'This characters subclass type is undying. Your patron grants eternal life or undeath. You refuse to die, shrug off wounds, and command the dead. Perfect for lich bound warlocks or those who walk the line between life and decay.',
            title: 'Warlock',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Fathomless',
            description: 'This characters subclass type is fathomless. You are tied to a being from the oceans depths. You conjure tentacles, call storms, and echo the power of the deep. Slippery, spooky, and soaked in seafoam and secrets.',
            title: 'Warlock',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Genie',
            description: 'This characters subclass type is genie. A noble genie has made you their chosen one. You gain a vessel like a lamp, elemental magic based on their type like air, earth, fire, or water, and wish like flair. Stylish, powerful, and full of possibilities.',
            title: 'Warlock',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'School of Abjuration',
            description: 'This characters subclass type is school of abjuration. Magic of protection and wards. Shields your allies, banish threats, and absorb damage with arcane barriers. The go to for magical bodyguards and arcane defenders.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'School of Conjuration',
            description: 'This characters subclass type is school of conjuration. Summon creatures and objects from thin air. Teleport, conjure tools, or call powerful allies to your side. You are a magical multitool with endless creativity.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'School of Divination',
            description: 'This characters subclass type is school of divination. See the unseen and know the unknown. Manipulate fate itself with portent dice, and always be a few steps ahead. Perfect for masterminds, prophets, or visionaries.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'School of Enchantment',
            description: 'This characters subclass type is school of enchantment. Charm and influence others. Turn enemies into friends, dull minds with soothing words, or take control. Charisma is not needed when you can rewire thoughts.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'School of Evocation',
            description: 'This characters subclass type is school of evocation. Harness raw elemental power. You are the blaster. Fireballs, lightning bolts, and frost. Shape your spells to spare allies and scorch everything else.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'School of Illusion',
            description: 'This characters subclass type is school of illusion. Bend perception to your will. Creates images, sounds, or even phantasms so real they can harm. A favorite for tricksters, spies, and reality benders.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'School of Necromancy',
            description: 'This characters subclass type is school of necromancy. Command death and undeath. Drain life, raise skeletons, and harness the power of decay. Morbid and effective.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'School of Transmutation',
            description: 'This characters subclass type is school of transmutation. Transform matter and magic. Turn lead to gold, flesh to stone, or boost your stats with your philosophers stone. You are part alchemist and part magical hacker.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Bladesinging',
            description: 'This characters subclass type is bladesinging. Elven tradition of blending swordplay and spellwork. Sing through combat with grace. Casting while slashing, dodging, and dazzling foes. A duelist with style and spells.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'War Magic',
            description: 'This characters subclass type is war magic. Balance offense and defense in arcane warfare. Designed for battlefield resilience, these wizards bolster ac and strike with magical retaliation. Think of it as wizard tactics mode.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Chronurgy Magic',
            description: 'This characters subclass type is chronurgy magic. Bend time itself. Pause, rewind, or accelerate actions. Lock enemies in temporal stasis. An excellent choice for control focused wizards who think several turns ahead.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        },
        {
            label: 'Graviturgy Magic',
            description: 'This characters subclass type is graviturgy magic. Manipulate the weight and motion of matter. Pull enemies, pin them down, or reduce their mass to send them flying. Subtle but immensely powerful battlefield control.',
            title: 'Wizard',
            image_url: null,
            rarity: 'common'
        }
    ])
}
