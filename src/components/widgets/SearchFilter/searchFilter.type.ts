import type { EntityModel } from '@sitecore-search/react';

export interface ISearchFilterProps {
  fields: {
    selectedSortIndex: number;
    onToggle?(value: string): void;
    defaultCardView: any;
    onSortChange: (value?: any | undefined) => void;
    sortChoices: Array<{
      name: string;
      label: string;
    }>;
    page: number;
    defaultItemsPerPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
    articles: EntityModel[];
  };
}
