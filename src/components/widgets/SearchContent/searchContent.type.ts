import type { EntityModel } from '@sitecore-search/react';

export interface ISearchContentComponent {
  gridType: GRID_TYPE;
  fields: EntityModel[];
}
export enum GRID_TYPE {
  GRID = 'grid',
  LIST = 'list',
}
