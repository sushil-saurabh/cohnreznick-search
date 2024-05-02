import type { EntityModel } from '@sitecore-search/react';

const getPageFilter = (field: EntityModel[], typeSelector: string, isFilterAllowed = true) => {
  if (field.length === 0) {
    return [];
  }
  if (isFilterAllowed) {
    return field.filter((t) => {
      return t[typeSelector]?.indexOf(t.page_type) > -1;
    });
  }
  return field;
};

export default getPageFilter;
