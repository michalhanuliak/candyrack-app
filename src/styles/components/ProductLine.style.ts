import styled from 'styled-components';
import tw from 'twin.macro';

export const ProductWrapper = styled.div`
  ${tw`
  items-center
  flex
  py-4
  px-6
  bg-gray-100
  `}
`;

export const ProductImage = styled.img`
  ${tw`
    h-32
  `}
`;

export const ProductTitle = styled.h2`
  ${tw`
    ml-4
    text-base
  `}
`;

export const ProductPrice = styled.span`
  ${tw`
    ml-auto
  `}
`;
