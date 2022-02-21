/// <reference types="cypress" />

class CheckoutModal {
  getBuyButton = () => cy.get('[data-cy="buyButton"]');

  getModal = () => cy.get('[data-cy="checkoutModal"]');

  getOfferList = () => cy.get('[data-cy="offerList"]');

  getErrorMessage = () => cy.get('[data-cy="errorMessage"]');

  getInfoMessage = () => cy.get('[data-cy="infoMessage"]');

  getOfferActionButton = () => cy.get('[data-cy="offerActionButton"]');

  getCloseButton = () => cy.get('[data-cy="modalCloseButton"]');

  getSubmitButton = () => cy.get('[data-cy="modalSubmitButton"]');
}

export default CheckoutModal;
