import type { EntityModel } from '@sitecore-search/react';

const getPageFilter = (field: EntityModel[], typeSelector: string, isFilterAllowed = true) => {
  console.log(`${field}//////`);
  if (field.length === 0) {
    return [];
  }
  if (isFilterAllowed) {
    return field.filter((t) => {
      console.log(t[typeSelector], `${t.page_type}, xxxxxxxxxxxxx`);
      return t[typeSelector]?.indexOf(t.page_type) > -1;
    });
  }
  return field;
};

export default getPageFilter;
