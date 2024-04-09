import type { SearchResultsStoreState } from '@sitecore-search/react';
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
  description?: Array<string>;
  subtitle?: Array<string>;
  title?: Array<string>;
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
  RELEVENCE = 'relevence',
  ASC = 'asc',
  DESC = 'desc',
}
export enum SEARCH_COMP_TYPE {
  SEARCH = 'search',
  EVENTS = 'events',
  INSIGHTS = 'insights',
  NEWS = 'news',
}
