export default {
  title: 'Header',
}

export const Header = () => '<Header />'
export const HeaderWithSet = () => ({
  data() {
    return {
      set: {
        name: 'Zendikar Rising',
        code: 'ZNR',
        icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
        cardCount: '220',
      },
    }
  },
  template: '<Header :set="set"/>',
})

export const HeaderWithSetAndCard = () => ({
  data() {
    return {
      card: {
        object: 'card',
        id: '882f8dcf-b361-4dc9-8329-e7d1f807acd6',
        oracle_id: 'b5dbb212-0399-475b-a831-921f7c76cdc4',
        multiverse_ids: [452860],
        mtgo_id: 69593,
        arena_id: 68571,
        tcgplayer_id: 176912,
        cardmarket_id: 364284,
        name: 'Maniacal Rage',
        lang: 'en',
        released_at: '2018-10-05',
        uri:
          'https://api.scryfall.com/cards/882f8dcf-b361-4dc9-8329-e7d1f807acd6',
        scryfall_uri:
          'https://scryfall.com/card/grn/110/maniacal-rage?utm_source=api',
        layout: 'normal',
        highres_image: true,
        image_uris: {
          small:
            'https://c1.scryfall.com/file/scryfall-cards/small/front/8/8/882f8dcf-b361-4dc9-8329-e7d1f807acd6.jpg?1572893221',
          normal:
            'https://c1.scryfall.com/file/scryfall-cards/normal/front/8/8/882f8dcf-b361-4dc9-8329-e7d1f807acd6.jpg?1572893221',
          large:
            'https://c1.scryfall.com/file/scryfall-cards/large/front/8/8/882f8dcf-b361-4dc9-8329-e7d1f807acd6.jpg?1572893221',
          png:
            'https://c1.scryfall.com/file/scryfall-cards/png/front/8/8/882f8dcf-b361-4dc9-8329-e7d1f807acd6.png?1572893221',
          art_crop:
            'https://c1.scryfall.com/file/scryfall-cards/art_crop/front/8/8/882f8dcf-b361-4dc9-8329-e7d1f807acd6.jpg?1572893221',
          border_crop:
            'https://c1.scryfall.com/file/scryfall-cards/border_crop/front/8/8/882f8dcf-b361-4dc9-8329-e7d1f807acd6.jpg?1572893221',
        },
        mana_cost: '{1}{R}',
        cmc: 2.0,
        type_line: 'Enchantment — Aura',
        oracle_text:
          "Enchant creature\nEnchanted creature gets +2/+2 and can't block.",
        colors: ['R'],
        color_identity: ['R'],
        keywords: ['Enchant'],
        legalities: {
          standard: 'not_legal',
          future: 'not_legal',
          historic: 'legal',
          pioneer: 'legal',
          modern: 'legal',
          legacy: 'legal',
          pauper: 'legal',
          vintage: 'legal',
          penny: 'legal',
          commander: 'legal',
          brawl: 'not_legal',
          duel: 'legal',
          oldschool: 'not_legal',
        },
        games: ['arena', 'paper', 'mtgo'],
        reserved: false,
        foil: true,
        nonfoil: true,
        oversized: false,
        promo: false,
        reprint: true,
        variation: false,
        set: 'grn',
        set_name: 'Guilds of Ravnica',
        set_type: 'expansion',
        set_uri:
          'https://api.scryfall.com/sets/597c6d4a-8212-4903-a6af-12c4ae9e13f0',
        set_search_uri:
          'https://api.scryfall.com/cards/search?order=set\u0026q=e%3Agrn\u0026unique=prints',
        scryfall_set_uri: 'https://scryfall.com/sets/grn?utm_source=api',
        rulings_uri:
          'https://api.scryfall.com/cards/882f8dcf-b361-4dc9-8329-e7d1f807acd6/rulings',
        prints_search_uri:
          'https://api.scryfall.com/cards/search?order=released\u0026q=oracleid%3Ab5dbb212-0399-475b-a831-921f7c76cdc4\u0026unique=prints',
        collector_number: '110',
        digital: false,
        rarity: 'common',
        flavor_text:
          '"They tell us the wilds are ours, then they brick them over. They can lie to our faces but not to our fists."\n—Ghut Rak, Gruul guildmage',
        card_back_id: '0aeebaf5-8c7d-4636-9e82-8c27447861f7',
        artist: 'Heonhwa Choe',
        artist_ids: ['ce415f9e-8a20-4d64-bcba-2b1b7e94012e'],
        illustration_id: '6de94a08-f68b-4f0d-b69f-4ad85e82acf8',
        border_color: 'black',
        frame: '2015',
        full_art: false,
        textless: false,
        booster: true,
        story_spotlight: false,
        edhrec_rank: 12321,
        prices: {
          usd: '0.02',
          usd_foil: '0.11',
          eur: '0.02',
          eur_foil: '0.05',
          tix: '0.02',
        },
        related_uris: {
          gatherer:
            'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=452860',
          tcgplayer_decks:
            'https://decks.tcgplayer.com/magic/deck/search?contains=Maniacal+Rage\u0026page=1\u0026utm_campaign=affiliate\u0026utm_medium=api\u0026utm_source=scryfall',
          edhrec: 'https://edhrec.com/route/?cc=Maniacal+Rage',
          mtgtop8:
            'https://mtgtop8.com/search?MD_check=1\u0026SB_check=1\u0026cards=Maniacal+Rage',
        },
        purchase_uris: {
          tcgplayer:
            'https://shop.tcgplayer.com/product/productsearch?id=176912\u0026utm_campaign=affiliate\u0026utm_medium=api\u0026utm_source=scryfall',
          cardmarket:
            'https://www.cardmarket.com/en/Magic/Products/Singles/Guilds-of-Ravnica/Maniacal-Rage?referrer=scryfall\u0026utm_campaign=card_prices\u0026utm_medium=text\u0026utm_source=scryfall',
          cardhoarder:
            'https://www.cardhoarder.com/cards/69593?affiliate_id=scryfall\u0026ref=card-profile\u0026utm_campaign=affiliate\u0026utm_medium=card\u0026utm_source=scryfall',
        },
      },
      set: {
        name: 'Zendikar Rising',
        code: 'ZNR',
        icon: 'https://c2.scryfall.com/file/scryfall-symbols/sets/znr.svg',
        cardCount: '220',
      },
    }
  },
  template: '<Header :card="card" :set="set"/>',
})

export const HeaderWhite = () => ({
  data() {
    return {}
  },
  template: '<Header page="home" />',
})
