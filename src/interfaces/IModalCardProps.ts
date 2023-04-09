import CardProps from './ICard';

export default interface IModalCardProps {
  modalActive: boolean;
  setModalActive: (type: boolean) => void;
  image?: string;
  name?: string;
  activeCardData?: CardProps[];
}
