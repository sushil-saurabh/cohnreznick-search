import { CardViewSwitcher } from '@sitecore-search/ui';
import SearchContentGrid from './SearchContentType/SearchContentGridView/searchContentGrid.component';
import SearchContentList from './SearchContentType/SearchContentListView/searchContentList.component';
import { type ISearchContentComponent } from './searchContent.type';

const SearchContentComponent = ({ gridType, fields }: ISearchContentComponent): JSX.Element => {
  return gridType === CardViewSwitcher.CARD_VIEW_LIST ? (
    <SearchContentList fields={fields} />
  ) : (
    <SearchContentGrid fields={fields} />
  );
};
export default SearchContentComponent;
