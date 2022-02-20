import React, { useEffect, useMemo, useState } from 'react';

import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';

import ProductOffer from './ProductOffer';

import {
  OfferList,
  LoaderWrapper,
} from '../../styles/components/ProductOfferList.style';

import { IProductOfferResponse } from '../../interfaces/ProductOffer.interface';
import IProductOfferList from '../../interfaces/ProductOfferList.interface';
import { OfferActions } from '../../enums';

const ProductOfferList = ({ setSelectedOffers }: IProductOfferList) => {
  const [isLoading, setIsLoading] = useState(false);
  const [offers, setOffers] = useState([]);
  const [currency, setCurrency] = useState('CZK');

  const getOffersData = async () => {
    setIsLoading(true);

    const data = await axios
      .get('https://private-803503-digismoothietest.apiary-mock.com/offers')
      .then((res) => res.data);

    setIsLoading(false);
    return data;
  };

  useEffect(() => {
    (async () => {
      const { offers: checkoutOffers, currency: checkoutCurrency } =
        await getOffersData();

      setOffers(checkoutOffers);
      setCurrency(checkoutCurrency);
    })();
  }, []);

  const handleOfferActions = (action: OfferActions, offerId: number) => {
    if (action === OfferActions.ADD) {
      setSelectedOffers((prevState) => new Set(prevState).add(offerId));
    }

    if (action === OfferActions.REMOVE) {
      setSelectedOffers((prevState) => {
        const nextState = new Set(prevState);

        nextState.delete(offerId);

        return nextState;
      });
    }
  };

  const productOffers = useMemo(
    () =>
      offers.map((offer: IProductOfferResponse) => {
        const {
          id,
          image,
          title,
          original_price: fullPrice,
          discounted_price: discountedPrice,
          short_description: shortPrice,
        } = offer;

        return (
          <ProductOffer
            key={id}
            id={id}
            image={image}
            title={title}
            fullPrice={fullPrice}
            discountedPrice={discountedPrice}
            description={shortPrice}
            currency={currency}
            handleOfferActions={handleOfferActions}
          />
        );
      }),
    [offers]
  );

  return isLoading ? (
    <LoaderWrapper>
      <TailSpin ariaLabel="loading-indicator" color="red" />
    </LoaderWrapper>
  ) : (
    <OfferList data-cy="offerList">{productOffers}</OfferList>
  );
};

export default ProductOfferList;
