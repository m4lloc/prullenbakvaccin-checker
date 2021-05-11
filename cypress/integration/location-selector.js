describe('location-selector', () => {

  it('check for available vaccines', () => {
    cy.visit('https://www.prullenbakvaccin.nl/#location-selector')
    cy.get('input[name=location]').type(Cypress.env('location'))
    cy.get('form.location-selector button').click()
    
    cy.get('html').invoke('html').then((text) => {
      cy.writeFile('location-selector.html', text)
    });
  })
})