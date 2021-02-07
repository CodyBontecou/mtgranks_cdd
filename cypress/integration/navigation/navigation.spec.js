context('Navigation', () => {
  it('Navigation to index/set/:set___en loads expected data', () => {
    cy.visit('http://localhost:3000/set/kaldheim/')
    cy.window()
      .its('$nuxt')
      .then((nuxt) => {
        console.log(nuxt.$store.getters.cards.length)
      })
  })

  it('Navigation to index/set/:set/:card?___en loads expected data with card focussed', () => {})
})
