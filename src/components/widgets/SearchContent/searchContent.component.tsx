import Link from 'next/link';
import { ISearchContent } from './searchContent.type';
import SearchContentList from './SearchContentType/SearchContentListView/searchContentList.component';
import SearchContentGrid from './SearchContentType/SearchContentGridView/searchContentGrid.component';

interface ISearchContentComponent {}

const SearchContentComponent = ({}: ISearchContentComponent): JSX.Element => {
  const gridList = true;
  return <>{gridList ? <SearchContentList /> : <SearchContentGrid />}</>;
};
export default SearchContentComponent;
