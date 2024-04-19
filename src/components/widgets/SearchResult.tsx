/* eslint-disable max-lines-per-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ISearchResultProps } from '@/utils/common.type';
import { SEARCH_COMP_TYPE } from '@/utils/common.type';
import { HIGHLIGHT_DATA } from '@/utils/helper';
import {
  FilterEqual,
  WidgetDataType,
  useSearchResults,
  useSearchResultsSelectedFilters,
  widget,
} from '@sitecore-search/react';
import dynamic from 'next/dynamic';
import type { ChangeEvent } from 'react';
import React from 'react';
const SearchRenderer = dynamic(import('../SearchRenderer/searchRenderer.component'));
const SearchResult = React.memo(
  ({
    defaultSortType,
    defaultPage,
    defaultKeyphrase,
    defaultItemsPerPage,
    componentType,
  }: ISearchResultProps): JSX.Element => {
    const filterEqual = new FilterEqual('index_name', process.env.NEXT_PUBLIC_SEARCH_INDEX_NAME) as FilterEqual;
    //const filterEqual = new FilterEqual('index_name', 'cohnreznick-dev');
    const {
      widgetRef,
      actions: {
        onResultsPerPageChange,
        onPageNumberChange,
        onItemClick,
        onRemoveFilter,
        onSortChange,
        onFacetClick,
        onKeyphraseChange,
      },
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
          .setSearchQueryHighlightPostTag(HIGHLIGHT_DATA.post)
          .setSearchFilter(filterEqual);
      },
      state: {
        sortType: defaultSortType,
        page: defaultPage,
        itemsPerPage: defaultItemsPerPage,
        keyphrase: defaultKeyphrase,
      },
    });
    const keyphraseHandler = React.useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        onKeyphraseChange({ keyphrase: target.value });
      },
      [onKeyphraseChange],
    );
    const totalPages = Math.ceil(totalItems / (itemsPerPage !== 0 ? itemsPerPage : 1));
    const selectedSortIndex = sortChoices.findIndex((s) => s.name === sortType);
    const selectedFacetsFromApi = useSearchResultsSelectedFilters();
    const fieldData = React.useMemo(() => {
      return {
        totalPages,
        selectedSortIndex,
        selectedFacetsFromApi,
        articles,
        facets,
        onSortChange,
        sortChoices,
        isLoading,
        onFacetClick,
        isFetching,
        page,
        onPageNumberChange,
        onResultsPerPageChange,
        defaultItemsPerPage,
        itemsPerPage,
        totalItems,
        keyphraseHandler,
        onRemoveFilter,
      };
    }, [
      articles,
      defaultItemsPerPage,
      facets,
      isFetching,
      isLoading,
      onFacetClick,
      onPageNumberChange,
      onResultsPerPageChange,
      onSortChange,
      page,
      selectedFacetsFromApi,
      selectedSortIndex,
      sortChoices,
      totalPages,
      itemsPerPage,
      totalItems,
      keyphraseHandler,
      onRemoveFilter,
    ]);
    const render = React.useMemo(() => {
      switch (componentType) {
        case SEARCH_COMP_TYPE.SEARCH:
          return <SearchRenderer fields={fieldData} />;
        case SEARCH_COMP_TYPE.INSIGHTS:
          return <></>;
        case SEARCH_COMP_TYPE.EVENTS:
          return <></>;
      }
      return <></>;
    }, [componentType, fieldData]);
    return <div ref={widgetRef}>{render}</div>;
  },
);
const SearchResultsWidget = widget(
  SearchResult as React.FC<ISearchResultProps>,
  WidgetDataType.SEARCH_RESULTS,
  'content',
);

export default SearchResultsWidget;
