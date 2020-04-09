describe('Pin pad bheavior test', () => {
  it('show and Hide pincode', () => {
    cy.visit('/')
      .get('.actions')
      .contains('Show')
      .get('#showPin')
      .click()
      .get('.actions')
      .contains('Hide');
  });
  it('add number into the pad and shows error', () => {
    cy.get('.pin-pad > :nth-child(3)')
      .click()
      .get('.output-text')
      .contains('7')
      .get('.pin-pad > :nth-child(3)')
      .click()
      .get('.output-text')
      .contains('*7')
      .get('.pin-pad > :nth-child(3)')
      .click()
      .get('.pin-pad > :nth-child(3)')
      .click()
      .get('.output-text')
      .contains('ERROR')
  });
  it('error 3 times disable pad', () => {
    for(let i = 0; i <=3 ; i ++) {
      cy.get('.pin-pad > :nth-child(3)')
        .click()
        .get('.pin-pad > :nth-child(3)')
        .click()
        .get('.pin-pad > :nth-child(3)')
        .click()
        .get('.pin-pad > :nth-child(3)')
        .click()
        .get('.output-text')
        .contains('ERROR')
    }
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('.pin-pad > :nth-child(3)')
      .should('have.class','disabled')
      .wait(30001).then( () => {
        cy.get('.pin-pad > :nth-child(3)')
        .should('not.have.class','disabled')
      })
  });
  it('get the pin value, type it and check if OK message is displayed',() => {
    cy.get('#showPin')
      .get('.actions')
      .contains('Hide')
      .get('.actions > span').invoke('text').then( (text) => {
        const _text = text.trim()
        for(let i = 0; i < _text.length ; i++){
          cy.findByTestId(_text[i]).click()
        }
        cy.get('.output-text')
        .contains('OK')
      }) 
  })
});
