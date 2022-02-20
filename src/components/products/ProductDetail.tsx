import React, { useState } from 'react';

import CheckoutModal from '../modals/CheckoutModal';

import {
  ProductBuyButton,
  ProductDescription,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductWrapper,
  PagePrice,
  PagePriceWrapper,
} from '../../styles/components/ProductDetail.style';

import productDetail from '../../fixtures/productDetail';

const ProductDetail = () => {
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const { name, description, image, price, currency } = productDetail;

  const handleCheckoutModal = () => {
    setIsCheckoutModalOpen(!isCheckoutModalOpen);
  };

  return (
    <ProductWrapper>
      <ProductImage src={image} alt={name} />

      <ProductInfo>
        <ProductName>{name}</ProductName>

        <ProductDescription>{description}</ProductDescription>

        <PagePriceWrapper>
          Price:{' '}
          <PagePrice>
            {price} {currency}
          </PagePrice>
        </PagePriceWrapper>

        <ProductBuyButton onClick={handleCheckoutModal} data-cy="buyButton">
          I want that NOW!
        </ProductBuyButton>
      </ProductInfo>

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        handleModal={handleCheckoutModal}
        product={productDetail}
      />
    </ProductWrapper>
  );
};

export default ProductDetail;
