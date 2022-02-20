import { ReactNode } from 'react';

interface IGenericModal {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  children: ReactNode;
}

export default IGenericModal;
