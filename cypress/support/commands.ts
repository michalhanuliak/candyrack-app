// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import CheckoutModal from './pageObjects/checkoutModal.po';

Cypress.Commands.add('clickAllOffers', (select = true) => {
  const checkoutModal = new CheckoutModal();

  checkoutModal
    .getOfferList()
    .children()
    .each((offer) => {
      cy.wrap(offer)
        .find('[data-cy="offerActionButton"]')
        .click()
        .should(select ? 'contain.text' : 'contain.not.text', 'REMOVE');
    });
});
