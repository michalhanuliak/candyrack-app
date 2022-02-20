import React, { useState } from 'react';

import {
  OfferAddButton,
  OfferDescription,
  OfferDiscountedPrice,
  OfferFullPrice,
  OfferImage,
  OfferInfo,
  OfferPrice,
  OfferTitle,
  OfferWrapper,
} from '../../styles/components/ProductOffer.style';

import defaultOfferImage from '../../images/default-offer-img.svg';
import { IProductOfferComponent } from '../../interfaces/ProductOffer.interface';
import { OfferActions } from '../../enums';

const ProductOffer = ({
  id,
  image,
  title,
  fullPrice,
  discountedPrice,
  description,
  currency,
  handleOfferActions,
}: IProductOfferComponent) => {
  const [offerImage, setOfferImage] = useState(image);
  const [isSelected, setIsSelected] = useState(false);

  const handleImageError = () => {
    setOfferImage(defaultOfferImage);
  };

  const offerAction = () => {
    setIsSelected(!isSelected);
    handleOfferActions(isSelected ? OfferActions.REMOVE : OfferActions.ADD, id);
  };

  return (
    <OfferWrapper>
      <OfferImage src={offerImage} alt={title} onError={handleImageError} />

      <OfferInfo>
        <OfferTitle>{title}</OfferTitle>

        <OfferPrice>
          <OfferFullPrice crossed={!!discountedPrice}>
            {fullPrice} {currency}
          </OfferFullPrice>

          {discountedPrice && (
            <OfferDiscountedPrice>
              {discountedPrice} {currency}
            </OfferDiscountedPrice>
          )}
        </OfferPrice>

        <OfferDescription>{description}</OfferDescription>
      </OfferInfo>

      <OfferAddButton
        onClick={offerAction}
        selected={!!isSelected}
        data-cy="offerActionButton"
        value={id}
      >
        {isSelected ? 'REMOVE' : '+ ADD'}
      </OfferAddButton>
    </OfferWrapper>
  );
};

export default ProductOffer;
