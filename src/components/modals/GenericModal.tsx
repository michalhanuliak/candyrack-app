import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import {
  ModalBackground,
  ModalWrapper,
  ModalTitle,
  ModalHeader,
  ModalContent,
  ModalClose,
  ModalFooter,
  ModalSubmit,
  ModalBody,
} from '../../styles/components/GenericModal.style';

import IGenericModal from '../../interfaces/GenericModal.interface';

const GenericModal = ({
  title,
  isOpen,
  onClose,
  onSubmit,
  children,
  ...props
}: IGenericModal) =>
  isOpen ? (
    <>
      <ModalBackground />
      <ModalWrapper>
        <ModalContent onClick={(e) => e.preventDefault} {...props}>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>

            <ModalClose onClick={onClose} data-cy="modalCloseButton">
              <FontAwesomeIcon icon={faXmark} />
            </ModalClose>
          </ModalHeader>

          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <ModalSubmit onClick={onSubmit} data-cy="modalSubmitButton">
              Continue
            </ModalSubmit>
          </ModalFooter>
        </ModalContent>
      </ModalWrapper>
    </>
  ) : (
    <></>
  );

export default GenericModal;
