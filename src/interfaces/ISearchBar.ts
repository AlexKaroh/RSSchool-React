import CardProps from './ICard';

export default interface ISearchBarProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  response: string;
  setArr: React.Dispatch<React.SetStateAction<Array<CardProps>>>;
  setResponse: (response: string) => void;
}
