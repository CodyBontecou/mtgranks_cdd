context('Navigation', () => {
  it('Navigation to index/set/:set___en loads expected data', () => {
    cy.visit('http://localhost:3000/set/kaldheim/')
    let cards
    cy.window()
      .then((win) => (cards = win.store.getters.cards))
      .then(() => {
        expect(cards.length).to.equal(285)
      })
  })

  it('Navigation to index/set/:set/:card?___en loads expected data with card focussed', () => {
    cy.visit('http://localhost:3000/set/kaldheim/ascendant-spirit')
    let card
    cy.window()
      .then((win) => (card = win.store.getters.card))
      .then(() => {
        expect(card.name).to.equal('Ascendant Spirit')
      })
  })
})
