import React from 'react';

import {
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
} from '../../styles/components/ProductLine.style';

import IProductLine from '../../interfaces/ProductLine.interface';

const ProductLine = ({ image, name, price, currency }: IProductLine) => (
  <ProductWrapper>
    <ProductImage src={image} alt={name} />

    <ProductTitle>{name}</ProductTitle>

    <ProductPrice>
      {price} {currency}
    </ProductPrice>
  </ProductWrapper>
);

export default ProductLine;
