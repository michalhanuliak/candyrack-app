import styled from 'styled-components';
import tw from 'twin.macro';

import SCREENS from '../../constants/responsive';

export const ProductWrapper = styled.div`
  ${tw`
    items-center
    flex
    max-w-3xl
    flex-col
  `}

  @media (min-width: ${SCREENS.md}) {
    ${tw`
      flex-row
    `}
  }
`;

export const ProductImage = styled.img`
  ${tw`
    w-10/12
    max-w-sm
  `}
`;

export const ProductInfo = styled.div`
  ${tw`
    ml-0
    p-6
  `}

  @media (min-width: ${SCREENS.md}) {
    ${tw`
      ml-8
    `}
  }
`;

export const ProductName = styled.h2`
  ${tw`
    uppercase
  `}
`;

export const ProductDescription = styled.p`
  ${tw`
    text-justify
  `}
`;

export const PagePriceWrapper = styled.p`
  ${tw`
    text-xl
    text-gray-500
  `};
`;

export const PagePrice = styled.span`
  ${tw`
    text-2xl
    font-semibold
    text-black
  `};
`;

export const ProductBuyButton = styled.button`
  ${tw`
    transition-colors
    border-none
    p-2
    cursor-pointer
    bg-red-600
    text-lg
    text-white
  `}
  &:hover {
    ${tw`bg-red-400`}
  }
`;
