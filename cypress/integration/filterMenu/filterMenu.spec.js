describe('FilterMenu', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Clicking menu toggles it open and closed', () => {
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=filterOptions]').should('have.class', 'open')

    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=filterOptions]').should('not.exist')
  })

  it('Clicking sets menu toggles set options', () => {
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=Sets]').click()
    cy.get('[data-cy=Sets-column]').should('have.class', 'open')
  })

  it('First set in set list is toggled on default route', () => {
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=Sets]').click()
    cy.get('[data-cy=child-2-option-1] > .flex-shrink-0')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(42, 157, 143)')
  })

  it('Expected set option is toggled on non-default route', () => {
    cy.visit('/set/kaldheim')
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=Sets]').click()
    cy.get('[data-cy=child-2-option-4] > .flex-shrink-0')
      .should('have.css', 'background-color')
      .and('eq', 'rgb(42, 157, 143)')
  })

  it('Clicking set option sets route', () => {
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=Sets]').click()
    cy.get('[data-cy=child-2-option-4] > .flex-shrink-0').click()
    cy.url().should('include', '/set/kaldheim')
  })

  it('Loads expected cards when set is toggled', () => {
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=Sets]').click()
    cy.get('[data-cy=child-2-option-4] > .flex-shrink-0').click()

    cy.wait(1000)

    let cards
    cy.window()
      .then((win) => (cards = win.store.getters.cards))
      .then(() => {
        expect(cards[0].set).to.equal('khm')
      })
  })

  it('Toggles colors on click', () => {
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=Colors]').click()

    // Toggles to hide red column
    cy.get('[data-cy=child-1-option-1] > .flex-shrink-0').click()
    cy.get(':nth-child(1) > .mb-6').should('have.text', 'Green')

    // Re-toggles to show red column
    cy.get('[data-cy=child-1-option-1] > .flex-shrink-0').click()
    cy.get(':nth-child(1) > .mb-6').should('have.text', 'Red')
  })

  it('Allows multiple colors to be toggled', () => {
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=Colors]').click()

    // Toggles to hide red column
    cy.get('[data-cy=child-1-option-1] > .flex-shrink-0').click()
    cy.get(':nth-child(1) > .mb-6').should('have.text', 'Green')

    // Toggles to hide green column
    cy.get('[data-cy=child-1-option-2] > .flex-shrink-0').click()
    cy.get(':nth-child(1) > .mb-6').should('have.text', 'Blue')
  })

  it.skip('Allows multiple sets to be toggled')

  it.skip('Does not allow less than 1 color to be toggled', () => {
    cy.get('[data-cy=filterMenu]').click()
    cy.get('[data-cy=Colors]').click()

    for (let i = 1; i < 8; i++) {
      cy.get(`[data-cy=child-1-option-${i}] > .flex-shrink-0`).click()
      cy.get(':nth-child(1) > .mb-6').should('have.text', 'Multi')
    }
  })
  it('Does not allow less than 1 set to be toggled')
  it('Displays error when attempting to toggle last color option')
  it('Displays error when attempting to toggle last set option')
})
