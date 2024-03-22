const gameData = [
  {
    name: "What Do You Meme?",
    playerMin: 3,
    playerMax: 10,
    ageMin: 17,
    playTimeMin: 15,
    playTimeMax: 90,
    rating: 5.1,
    category: "Funny Comparison",
    image:
      "https://media.kohlsimg.com/is/image/kohls/4466678?wid=600&hei=600&op_sharpen=1",
    description: "What do you meme description",
  },
  {
    name: "Codenames",
    playerMin: 2,
    playerMax: 8,
    ageMin: 14,
    playTimeMin: 10,
    playTimeMax: 15,
    rating: 7.5,
    category: "Team",
    image:
      "https://store.ncsml.org/wp-content/uploads/2018/07/Codenames-500x500.png",
    description: "Codenames description",
  },

  {
    name: "UNO",
    playerMin: 2,
    playerMax: 10,
    ageMin: 6,
    playTimeMin: 10,
    playTimeMax: 30,
    rating: 5.5,
    category: "Card",
    image: "https://images.kaplanco.com/catalog/jumbo/92865_r_23.jpg",
    description:
      "Players race to empty their hands and catch opposing players with cards left in theirs, which score points. In turns, players attempt to play a card by matching its color, number, or word to the topmost card on the discard pile. If unable to play, players draw a card from the draw pile, and if still unable to play, they pass their turn. Wild and special cards spice things up a bit.",
  },
  {
    name: "The Chameleon",
    playerMin: 3,
    playerMax: 8,
    ageMin: 14,
    playTimeMin: 15,
    playTimeMax: 15,
    rating: 6.6,
    category: "Deception",
    image:
      "https://i5.walmartimages.com/asr/c77c4cc2-57ea-4e2d-b1ac-97ef4a1a4c07.c045f218d56a6c3a9ed11f98c8b7555b.jpeg",
    description:
      "A bluffing deduction game for everyone. Each round involves two missions, depending on whether you’re the Chameleon or not.",
  },
  {
    name: "One Night Ultimate Werewolf",
    playerMin: 3,
    playerMax: 10,
    ageMin: 8,
    playTimeMin: 10,
    playTimeMax: 10,
    rating: 7.1,
    category: "Deception",
    image: "https://i.ebayimg.com/images/g/LDMAAOSwxk9gz5vE/s-l1200.webp",
    description:
      "One Night Ultimate Werewolf is a fast game for 3-10 players in which everyone gets a role: One of the dastardly Werewolves, the tricky Troublemaker, the helpful Seer, or one of a dozen different characters, each with a special ability.",
  },
  {
    name: "Secret Hitler",
    playerMin: 5,
    playerMax: 10,
    ageMin: 13,
    playTimeMin: 45,
    playTimeMax: 45,
    rating: 7.5,
    category: "Deception",
    image:
      "https://i5.walmartimages.com/seo/Secret-Hitler_01f19e4b-f1d0-456e-adaf-cc2c4c2bffd7.5915f3e07ceaa15e1711a9a7739fc350.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    description:
      "Secret Hitler is a dramatic game of political intrigue and betrayal set in 1930s Germany.",
  },
  {
    name: "Bananagrams",
    playerMin: 1,
    playerMax: 8,
    ageMin: 7,
    playTimeMin: 15,
    playTimeMax: 15,
    rating: 6.4,
    category: "Word",
    image:
      "https://s7.orientaltrading.com/is/image/OrientalTrading/32130?$PDP_VIEWER_IMAGE$",
    description:
      "Bananagrams is a fast and fun word game that requires no pencil, paper or board.",
  },
  {
    name: "Jenga",
    playerMin: 1,
    playerMax: 8,
    ageMin: 6,
    playTimeMin: 20,
    playTimeMax: 20,
    rating: 5.6,
    category: "Dexterity",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_2ff3e3eb-c38d-4c5a-a6bc-7b95b96c3fec?wid=488&hei=488&fmt=pjpeg",
    description: "A tower building game.",
  },
  {
    name: "The Settlers of Catan",
    playerMin: 3,
    playerMax: 6,
    ageMin: 10,
    playTimeMin: 60,
    playTimeMax: 75,
    rating: 7.1,
    category: "Strategy",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_4a6c6a4b-4279-4520-9c7d-2e5036b525a4?wid=488&hei=488&fmt=pjpeg",
    description:
      "Embark on a quest to settle the fair isle of Catan! Guide your brave settlers to victory by using clever trading and development.",
  },
  {
    name: "Cards Against Humanity",
    playerMin: 4,
    playerMax: 30,
    ageMin: 17,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 5.8,
    category: "Funny Comparison",
    image:
      "https://www.jbhifi.com.au/cdn/shop/products/380200-Product-0-I_grande.jpg",
    description: "A party game for horrible people.",
  },
  {
    name: "Exploding Kittens",
    playerMin: 2,
    playerMax: 5,
    ageMin: 7,
    playTimeMin: 15,
    playTimeMax: 15,
    rating: 6.1,
    category: "Card",
    image: "https://pics.walgreens.com/prodimg/630451/900.jpg",
    description:
      "Exploding Kittens is a kitty-powered version of Russian Roulette.",
  },
  {
    name: "Telestrations",
    playerMin: 4,
    playerMax: 8,
    ageMin: 12,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 7.4,
    category: "Dexterity",
    image:
      "https://m.media-amazon.com/images/I/81ExwWIaUNL._AC_UF894,1000_QL80_.jpg",
    description:
      "Each player begins by sketching a TELESTRATIONS word dictated by the roll of a die.",
  },
  {
    name: "Scrabble",
    playerMin: 2,
    playerMax: 4,
    ageMin: 10,
    playTimeMin: 90,
    playTimeMax: 90,
    rating: 6.3,
    category: "Word",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_7314dc34-8c58-4f56-8e39-3a0b6224c761?wid=488&hei=488&fmt=pjpeg",
    description:
      "In this classic word game, players use their seven drawn letter-tiles to form words on the gameboard.",
  },
  {
    name: "Catchphrase",
    playerMin: 2,
    playerMax: 4,
    ageMin: 10,
    playTimeMin: 20,
    playTimeMax: 60,
    rating: 6.2,
    category: "Word",
    image: "https://m.media-amazon.com/images/I/81haHstroOL.jpg",
    description:
      "In this game, each player has a common phrase, which the other players try to guess.",
  },
  {
    name: "Cover Your Assets",
    playerMin: 2,
    playerMax: 6,
    ageMin: 8,
    playTimeMin: 15,
    playTimeMax: 45,
    rating: 6.4,
    category: "Card",
    image: "https://i.ebayimg.com/images/g/378AAOSw75xjUWM1/s-l600.jpg",
    description:
      "The stakes are high in this high-energy, competitive, and cut-throat, set-collection card game from Grandpa Beck's Games! ... ",
  },
  {
    name: "Poetry for Neanderthals",
    playerMin: 2,
    playerMax: 12,
    ageMin: 7,
    playTimeMin: 15,
    playTimeMax: 15,
    rating: 6.7,
    category: "Team",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_8618359d-f4cd-459f-96de-d12a9e384d8e?wid=488&hei=488&fmt=pjpeg",
    description:
      "Poetry for Neanderthals is a competitive word-guessing game where you can only give clues by speaking in single syllables. ...",
  },
  {
    name: "Skull King",
    playerMin: 2,
    playerMax: 8,
    ageMin: 8,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 7.5,
    category: "Card",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_28e0e86b-d9b2-4810-8561-559cbac274c7?wid=488&hei=488&fmt=pjpeg",
    description:
      "Skull King is a trick-taking game similar to Oh Hell!, Wizard, Euchre and Spades, with players needing to state how many tricks they think they'll win each round. ...",
  },
  {
    name: "Apples to Apples",
    playerMin: 4,
    playerMax: 10,
    ageMin: 12,
    playTimeMin: 20,
    playTimeMax: 30,
    rating: 5.8,
    category: "Funny Comparison",
    image:
      "https://m.media-amazon.com/images/I/61CkL4MkqnL._AC_UF894,1000_QL80_.jpg",
    description:
      "The party game Apples to Apples consists of two decks of cards: Things and Descriptions. ...",
  },
  {
    name: "Phase 10",
    playerMin: 2,
    playerMax: 6,
    ageMin: 8,
    playTimeMin: 45,
    playTimeMax: 45,
    rating: 5.2,
    category: "Card",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_cd610135-497b-4b6f-b1c1-627a79ff789a?wid=488&hei=488&fmt=pjpeg",
    description:
      "A rummy-type card game where players compete to be the first to finish completing all ten phases. ...",
  },
  {
    name: "Nertz",
    playerMin: 2,
    playerMax: 6,
    ageMin: 7,
    playTimeMin: 60,
    playTimeMax: 60,
    rating: 6.5,
    category: "Card",
    image:
      "https://m.media-amazon.com/images/S/aplus-seller-content-images-us-east-1/ATVPDKIKX0DER/A2L0LODUJGR5H7/176111f8-f031-40f3-996c-40903d59efc6.__CR0,0,2000,2000_PT0_SX300_V1___.jpg",
    description:
      "Nertz, also known widely as Pounce, is a fast paced card game where every player has their own standard deck of cards and engage in a form of multi-player solitaire. ...",
  },
  {
    name: "Dominion",
    playerMin: 2,
    playerMax: 4,
    ageMin: 13,
    playTimeMin: 30,
    playTimeMax: 30,
    rating: 7.6,
    category: "Strategy",
    image:
      "https://m.media-amazon.com/images/I/9152Ik8HZ5L._AC_UF894,1000_QL80_.jpg",
    description:
      "In Dominion, each player starts with an identical, very small deck of cards. ...",
  },
];

module.exports = gameData;
