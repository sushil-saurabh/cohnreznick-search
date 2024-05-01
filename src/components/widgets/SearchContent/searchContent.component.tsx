import SearchContentGrid from './SearchContentType/SearchContentGridView/searchContentGrid.component';
import SearchContentList from './SearchContentType/SearchContentListView/searchContentList.component';
import { GRID_TYPE, type ISearchContentComponent } from './searchContent.type';

const SearchContentComponent = ({ gridType, fields }: ISearchContentComponent): JSX.Element => {
  return gridType === GRID_TYPE.LIST ? <SearchContentList fields={fields} /> : <SearchContentGrid fields={fields} />;
};
export default SearchContentComponent;
