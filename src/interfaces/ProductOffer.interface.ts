/* eslint-disable no-unused-vars */
import { OfferActions } from '../enums';

interface IProductOffer {
  id: number;
  image: string;
  title: string;
}

export interface IProductOfferComponent extends IProductOffer {
  fullPrice: number;
  discountedPrice: number;
  description: string;
  currency: string;
  handleOfferActions: (action: OfferActions, offerId: number) => void;
}

export interface IProductOfferResponse extends IProductOffer {
  original_price: number;
  discounted_price: number;
  short_description: string;
}
