/* eslint-disable cypress/no-unnecessary-waiting */
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
        .click({force:true})
        .get('.pin-pad > :nth-child(3)')
        .click()
        .get('.pin-pad > :nth-child(3)')
        .click()
        .get('.pin-pad > :nth-child(3)')
        .click()
        .get('.output-text')
        .contains('ERROR')
  });
  it('error 3 times disable pad', () => {
    cy.visit('/')
      .get('.pin-pad > :nth-child(3)')
      .click({force:true})
      .get('.pin-pad > :nth-child(3)')
      .click()
      .get('.pin-pad > :nth-child(3)')
      .click()
      .get('.pin-pad > :nth-child(3)')
      .click()
      .get('.pin-pad > :nth-child(3)')
      .click()
      .get('.output-text')
      .contains('ERROR')
      .wait(3001).then(() => {
        cy.get('.pin-pad > :nth-child(3)')
          .click({force:true})
          .get('.pin-pad > :nth-child(3)')
          .click()
          .get('.pin-pad > :nth-child(3)')
          .click()
          .get('.pin-pad > :nth-child(3)')
          .click()
          .get('.output-text')
          .contains('ERROR')
          .wait(3001).then(() => {
            cy.get('.pin-pad > :nth-child(3)')
            .click({force:true})
              .get('.pin-pad > :nth-child(3)')
              .click()
              .get('.pin-pad > :nth-child(3)')
              .click()
              .get('.pin-pad > :nth-child(3)')
              .click({force: true})
              .get('.output-text')
              .contains('LOCKED')
              .get('.pin-pad > :nth-child(3)')
              .should('have.class','disabled')
              .wait(30001).then( () => {
                cy.get('.pin-pad > :nth-child(3)')
                .should('not.have.class','disabled')
              })
          })
      })
  });
  it('get the pin value, type it and check if OK message is displayed',() => {
    cy.visit('/')
    .get('.actions')
    .contains('Show')
    .get('#showPin')
    .click()
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
