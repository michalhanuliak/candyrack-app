import IProductLine from './ProductLine.interface';

interface ICheckoutModal {
  isOpen: boolean;
  handleModal: () => void;
  product: IProductLine;
}

export default ICheckoutModal;
