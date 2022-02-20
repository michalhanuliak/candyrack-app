import styled from 'styled-components';
import tw from 'twin.macro';

export const OfferList = styled.ul`
  ${tw`
    p-0
  `}
`;

export const LoaderWrapper = styled.div`
  ${tw`
    my-6
  `}

  & > div {
    ${tw`
      justify-center
    `}
  }
`;
