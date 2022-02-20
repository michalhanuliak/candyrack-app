/// <reference types="cypress" />

import CheckoutModal from '../support/pageObjects/checkoutModal.po';

describe('Checkout modal', () => {
  const checkoutModal = new CheckoutModal();

  beforeEach(() => {
    cy.visit('/');
    checkoutModal.getBuyButton().click();
  });

  it('can be open', () => {
    checkoutModal.getModal().should('be.visible');
  });

  it('render all offers', () => {
    cy.request(
      'GET',
      'https://private-803503-digismoothietest.apiary-mock.com/offers'
    ).then((request) => {
      const offerCountToRender = request.body.offers.length;

      checkoutModal
        .getOfferList()
        .children()
        .should('have.length', offerCountToRender);
    });
  });

  it('items can be selected', () => {
    cy.clickAllOffers();
  });

  it('items can be deselected', () => {
    cy.clickAllOffers();
    cy.clickAllOffers(false);
  });

  it('close button will close modal', () => {
    checkoutModal.getCloseButton().click();
    checkoutModal.getModal().should('not.exist');
  });

  it('submit button will close modal', () => {
    cy.on('window:alert', (str) => {
      expect(str).to.be.equal('No offers were selected');
    });

    checkoutModal.getSubmitButton().click();
    checkoutModal.getModal().should('not.exist');
  });

  it('after submit save offers', () => {
    const selectedOffers = [];

    checkoutModal.getOfferActionButton().each((offerButton) => {
      selectedOffers.push(offerButton.val());
    });

    cy.on('window:alert', (str) => {
      expect(str).to.be.eql(
        `Selected offer IDs ( ${Array.from(selectedOffers).join(', ')} )`
      );
    });

    cy.clickAllOffers();

    checkoutModal.getSubmitButton().click();
  });
});
