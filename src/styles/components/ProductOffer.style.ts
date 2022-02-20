import styled from 'styled-components';
import tw from 'twin.macro';
import SCREENS from '../../constants/responsive';

interface IProps {
  crossed?: boolean;
  selected?: boolean;
}

export const OfferWrapper = styled.li`
  ${tw`
  items-center
  flex
  list-none
  mb-2
  box-border
  w-full
  p-4
  `}

  @media (min-width: ${SCREENS.md}) {
    ${tw`
      mb-6
      p-8
    `}
  }
`;

export const OfferImage = styled.img`
  ${tw`
    w-12
  `}

  @media (min-width: ${SCREENS.md}) {
    ${tw`
      w-16
    `}
  }
`;

export const OfferInfo = styled.div`
  ${tw`
    ml-4
  `}

  @media (min-width: ${SCREENS.md}) {
    ${tw`
      ml-8
    `}
  }
`;

export const OfferTitle = styled.h3`
  ${tw`
    m-0
    text-base
  `}
`;

export const OfferPrice = styled.div``;

export const OfferFullPrice = styled.span<IProps>`
  ${(props) => props.crossed && tw`line-through`}
`;

export const OfferDiscountedPrice = styled.span`
  ${tw`
    ml-2
  `}
`;

export const OfferDescription = styled.p`
  ${tw`
    mx-1
    text-gray-400
  `}
`;

export const OfferAddButton = styled.button<IProps>`
  ${tw`
    cursor-pointer
    transition-colors
    ml-auto
    border-solid
    border-red-500
    rounded
    p-2
    bg-white
    text-red-500
    font-bold
  `}

  &:hover {
    ${tw`
      text-white
      bg-red-500
  `}
  }

  ${(props) =>
    props.selected &&
    tw`
  text-white
  bg-red-500
`}
`;
