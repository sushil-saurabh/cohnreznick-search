/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ISearchResultProps } from '@/utils/common.type';
import { SEARCH_COMP_TYPE } from '@/utils/common.type';
import { HIGHLIGHT_DATA } from '@/utils/helper';
import { WidgetDataType, useSearchResults, useSearchResultsSelectedFilters, widget } from '@sitecore-search/react';
import dynamic from 'next/dynamic';
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
