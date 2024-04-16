import styles from './searchContent.module.scss';
import { CardViewSwitcher, SortSelect } from '@sitecore-search/ui';
import { GridIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { useSearchResults, useSearchResultsSelectedFilters } from '@sitecore-search/react';
import { HIGHLIGHT_DATA } from '../utils';

const sortChoices = [
  {
    name: 'featured_asc',
    label: 'Featured Asc',
  },
  {
    name: 'featured_desc',
    label: 'Featured Desc',
  },
  {
    name: 'last_modified_asc',
    label: 'Last Modified Asc',
  },
  {
    name: 'last_modified_desc',
    label: 'Last Modified Desc',
  },
  {
    name: 'title_asc',
    label: 'Title ASC',
  },
  {
    name: 'title_desc',
    label: 'Title DESC',
  },
];

export interface commonParameter {
  defaultSortType?: string;
  defaultPage?: number;
  defaultKeyphrase?: string;
  defaultItemsPerPage?: number;
}

interface ISearchFilterProps extends commonParameter {}

const SearchFilter = ({
  defaultSortType = 'featured_desc',
  defaultPage = 1,
  defaultKeyphrase = '',
  defaultItemsPerPage = 24,
}: ISearchFilterProps): JSX.Element => {
  const {
    widgetRef,
    actions: { onResultsPerPageChange, onPageNumberChange, onItemClick, onRemoveFilter, onSortChange, onFacetClick },
    state: { sortType, page, itemsPerPage },
    queryResult: {
      isLoading,
      isFetching,
      data: {
        total_item: totalItems = 0,
        sort: { choices: sortChoices = [] } = {},
        facet: facets = [],
        content: articles = [],
      } = {},
    },
  } = useSearchResults({
    query: (query) => {
      query
        .getRequest()
        .setSearchQueryHighlightFragmentSize(500)
        .setSearchQueryHighlightFields(['subtitle', 'description'])
        .setSearchQueryHighlightPreTag(HIGHLIGHT_DATA.pre)
        .setSearchQueryHighlightPostTag(HIGHLIGHT_DATA.post);
    },
    state: {
      sortType: defaultSortType,
      page: defaultPage,
      itemsPerPage: defaultItemsPerPage,
      keyphrase: defaultKeyphrase,
    },
  });

  const totalPages = Math.ceil(totalItems / (itemsPerPage !== 0 ? itemsPerPage : 1));
  const selectedSortIndex = sortChoices.findIndex((s) => s.name === sortType);
  const selectedFacetsFromApi = useSearchResultsSelectedFilters();
  const defaultCardView = CardViewSwitcher.CARD_VIEW_LIST;
  const [dir, setDir] = useState(defaultCardView);
  const onToggle = (value = defaultCardView) => setDir(value);
  console.log(defaultCardView + '//defaultCardView' + dir);
  return (
    <>
      <CardViewSwitcher.Root onValueChange={onToggle} defaultValue={defaultCardView}>
        <CardViewSwitcher.Item value="grid" aria-label="Grid View">
          <GridIcon />
        </CardViewSwitcher.Item>
        <CardViewSwitcher.Item value="list" aria-label="List View">
          <ListBulletIcon />
        </CardViewSwitcher.Item>
      </CardViewSwitcher.Root>

      {/* Sort Select */}
      <SortSelect.Root defaultValue={sortChoices[selectedSortIndex]?.name} onValueChange={onSortChange}>
        <SortSelect.Trigger>
          <SortSelect.SelectValue>
            {selectedSortIndex > -1 ? sortChoices[selectedSortIndex].label : ''}
          </SortSelect.SelectValue>
          <SortSelect.Icon />
        </SortSelect.Trigger>
        <SortSelect.Content>
          <SortSelect.Viewport>
            {sortChoices.map((option) => (
              <SortSelect.Option value={option} key={`${option.label}}`}>
                <SortSelect.OptionText>{option.label}</SortSelect.OptionText>
              </SortSelect.Option>
            ))}
          </SortSelect.Viewport>
        </SortSelect.Content>
      </SortSelect.Root>
    </>
  );
};
export default SearchFilter;
