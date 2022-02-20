import { Dispatch, SetStateAction } from 'react';

interface IProductOfferList {
  setSelectedOffers: Dispatch<SetStateAction<Set<number>>>;
}

export default IProductOfferList;
