import React, { createContext, useState } from 'react';

import GenericModal from './GenericModal';
import ProductLine from '../products/ProductLine';
import ProductOfferList from '../products/ProductOfferList';

import ICheckoutModal from '../../interfaces/CheckoutModal.interface';

export const CheckoutModalContext = createContext({} as any);

const CheckoutModal = ({ isOpen, handleModal, product }: ICheckoutModal) => {
  const [selectedOffers, setSelectedOffers] = useState(new Set<number>());

  const { name, image, price, currency } = product;

  const handleSubmit = () => {
    handleModal();
    setSelectedOffers(new Set());
    // eslint-disable-next-line no-alert
    alert(
      !selectedOffers.size
        ? 'No offers were selected'
        : `Selected offer IDs ( ${Array.from(selectedOffers).join(', ')} )`
    );
  };

  return (
    <GenericModal
      title={"Wait, don't miss our deals, today only!"}
      isOpen={isOpen}
      onClose={handleModal}
      onSubmit={handleSubmit}
      data-cy="checkoutModal"
    >
      <ProductLine
        image={image}
        name={name}
        price={price}
        currency={currency}
      />

      <ProductOfferList setSelectedOffers={setSelectedOffers} />
    </GenericModal>
  );
};

export default CheckoutModal;
