import styled from 'styled-components';
import tw from 'twin.macro';

export const ModalBackground = styled.div`
  ${tw`
  z-0
  fixed
  top-0
  right-0
  left-0
  bottom-0
  bg-black
  bg-opacity-20
  `}
`;

export const ModalWrapper = styled.div`
  ${tw`
    absolute
    top-0
    left-0
    justify-center
    items-center
    flex
    w-screen
    min-h-full
  `};
`;

export const ModalContent = styled.div`
  ${tw`
  z-10
  overflow-y-auto
  m-2
  rounded
  drop-shadow
  w-screen
  max-w-4xl
  bg-white
  `};
`;

export const ModalHeader = styled.header`
  ${tw`
    justify-center
    items-center
    flex
    relative
    w-full
    h-20
    border-black
    border-solid
    border-0
    border-b
  `}
`;

export const ModalTitle = styled.h1`
  ${tw`
    p-2
    text-lg
    text-center
  `}
`;

export const ModalClose = styled.button`
  ${tw`
  top-2
  right-2
  absolute
  border-none
  transition-colors
  text-xl
  bg-transparent
  text-gray-400
  `}
  &:hover {
    ${tw`
      cursor-pointer
      text-black
    `}
  }
`;

export const ModalBody = styled.section`
  ${tw`
    w-full
  `}
`;

export const ModalFooter = styled.footer`
  ${tw`
    justify-end
    flex
    w-full
  `}
`;

export const ModalSubmit = styled.button`
  ${tw`
    transition-colors
    cursor-pointer
    m-6
    border-none
    bg-transparent
    font-bold
    text-gray-700
  `}

  &:hover {
    ${tw`text-red-500`}
  }
`;
