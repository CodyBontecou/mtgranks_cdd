context('SideDrawer', () => {
  it('Navigation to index/set/:set/:card?___en opens drawer', () => {
    cy.visit('http://localhost:3000/set/kaldheim/ascendant-spirit')

    let card
    cy.window()
      .then((win) => (card = win.store.getters.card))
      .then(() =>
        cy.get('img').should('have.attr', 'src', card.image_uris.border_crop)
      )
  })

  it('Cards are flippable', () => {
    cy.visit(
      'http://localhost:3000/set/kaldheim/esika-god-of-the-tree-the-prismatic-bridge'
    )

    let card
    cy.window()
      .then((win) => (card = win.store.getters.card))
      .then(() => {
        cy.get('img').should(
          'have.attr',
          'src',
          card.card_faces[0].image_uris.border_crop
        )
      })
      .then(() => {
        cy.get('#flip-card').click()
        cy.get('img').should(
          'have.attr',
          'src',
          card.card_faces[1].image_uris.border_crop
        )
      })
  })

  it('Generated TCGPlayer link has mtgranks reference', () => {
    cy.visit('http://localhost:3000/set/kaldheim/ascendant-spirit')

    cy.get('#buy-card')
      .should('have.attr', 'href')
      .should(
        'eq',
        'https://shop.tcgplayer.com/product/productsearch?id=230490&utm_campaign=affiliate&utm_medium=api&utm_source=mtgranks'
      )
  })

  it('Copy URL button copies the URL to the users clipboard', () => {
    cy.visit('http://localhost:3000/set/kaldheim/ascendant-spirit')

    cy.get('#copy-url').click()
    cy.task('getClipboard').should(
      'eq',
      'https://mtgranks.com/set/kaldheim/ascendant-spirit'
    )
  })

  it('Displays the appropriate rating and rating description')
  it('Generates and displays unique comment box for Disqus')
})
