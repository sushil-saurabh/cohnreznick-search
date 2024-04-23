import type { EntityModel, SearchResponseFacet, SearchResultsStoreState } from '@sitecore-search/react';
import type { ChangeEvent } from 'react';
export interface ISearchPageFields {
  ErrorLogo: string;
  ErrorMessage: string;
  FilterBy: string;
  Heading: string;
  ResultCount: string;
  SortBy: string;
  PageSize: number;
}
export interface ISearchResultProps {
  title?: string;
  defaultSortType: SearchResultsStoreState['sortType'];
  defaultPage: SearchResultsStoreState['page'];
  defaultItemsPerPage: SearchResultsStoreState['itemsPerPage'];
  defaultKeyphrase: SearchResultsStoreState['keyphrase'];
  pageFields?: ISearchPageFields;
  componentType: 'search' | 'events' | 'insights' | 'news';
}

export type HighlightModel = {
  description?: string[];
  subtitle?: string[];
  title?: string[];
};

export interface IApplicationSearchProps {
  id: string;
  type?: string;
  title: string;
  name: string;
  subtitle?: string;
  url?: string;
  description?: string;
  image_url?: string;
  image?: string;
  source_id?: string;
  highlight?: HighlightModel;
  location?: string;
}
export type HighlightTag = 'b' | 'pre' | 'i';
export enum SEARCH_SORT_BY_FILTER {
  RELEVENCE = 'relevance',
  ASC = 'asc',
  DESC = 'desc',
  PUBLISH_DATE = 'publishdate',
}
export enum SEARCH_COMP_TYPE {
  SEARCH = 'search',
  EVENTS = 'events',
  INSIGHTS = 'insights',
  NEWS = 'news',
}
export interface ISearchResultFields {
  fields: {
    totalPages: number;
    selectedSortIndex: number;
    selectedFacetsFromApi?: any;
    articles: EntityModel[];
    facets: SearchResponseFacet[];
    isLoading: boolean;
    isFetching: boolean;
    onFacetClick: any;
    onSortChange: (value?: any | undefined) => void;
    sortChoices: Array<{
      name: string;
      label: string;
    }>;
    page: number;
    onPageNumberChange: (e: any) => void;
    onResultsPerPageChange: (e: any) => void;
    onRemoveFilter: (e: any) => void;
    defaultItemsPerPage: number;
    keyphraseHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    itemsPerPage: number;
    totalItems: number;
  };
}
