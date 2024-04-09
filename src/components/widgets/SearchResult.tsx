import { ISearchRendererProps } from "@/utils/common.type";
import { HIGHLIGHT_DATA } from "@/utils/helper";
import { WidgetDataType, useSearchResults, useSearchResultsSelectedFilters, widget } from "@sitecore-search/react";
import React from "react";
const SearchRenderer = React.memo(
  ({
    title,
    defaultSortType,
    defaultPage,
    defaultKeyphrase,
    pageFields,
    defaultItemsPerPage
  }: ISearchRendererProps): JSX.Element => {
    const {
        widgetRef,
        actions: {
          onResultsPerPageChange,
          onPageNumberChange,
          onItemClick,
          onRemoveFilter,
          onSortChange,
          onFacetClick,
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
   return <></>
  }
);

const SearchResultsWidget = widget(
  SearchRenderer as React.FC<ISearchRendererProps>,
  WidgetDataType.SEARCH_RESULTS,
  "content"
);

export default SearchResultsWidget;
