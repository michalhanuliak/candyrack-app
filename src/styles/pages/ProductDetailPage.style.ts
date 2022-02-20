import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const PageHeader = styled.header`
  ${tw`
    bg-yellow-300	
  `};
`;

export const PageTitle = styled.h1`
  ${tw`
    m-0
    p-6
  `};
`;

export const PageContent = styled.section`
  ${tw`
    justify-center
    items-center
    flex
    my-8
  `};
`;
