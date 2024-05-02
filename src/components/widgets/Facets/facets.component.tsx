import type { ICheckedFacets } from '@/utils/common.type';
import { CheckIcon } from '@radix-ui/react-icons';
import { useSearchResultsSelectedFilters } from '@sitecore-search/react';
import { AccordionFacets, SearchResultsAccordionFacets } from '@sitecore-search/ui';
import React from 'react';
import styles from './facets.module.scss';
import type { IFacetsProps, IValue } from './facets.type';
const Facets = ({ fields }: IFacetsProps): JSX.Element => {
  const selectedFacetsFromApi = useSearchResultsSelectedFilters();
  const { facets, onFacetClick } = fields;
  const isChecked = React.useCallback(
    (item: IValue) => {
      return (selectedFacetsFromApi as ICheckedFacets[]).some((t) => {
        return t.facetValueId === item.id;
      });
    },
    [selectedFacetsFromApi],
  );
  return (
    <div className={styles.facetsOuter}>
      <SearchResultsAccordionFacets
        defaultFacetTypesExpandedList={facets.map((t) => t.name)}
        onFacetTypesExpandedListChange={() => {}}
        onFacetValueClick={(e) => {
          onFacetClick(e);
        }}
      >
        {facets.map((f) => (
          <AccordionFacets.Facet facetId={f.name} key={f.name} className="facetHeader">
            <AccordionFacets.Header className="facetHeaderTitle">
              <AccordionFacets.Trigger className="facetsbtns">{f.label}</AccordionFacets.Trigger>
            </AccordionFacets.Header>
            <AccordionFacets.Content className="facetsContentOuter">
              <AccordionFacets.ValueList className="facetsList facetValues">
                {f.value.map((v, index) => (
                  <AccordionFacets.Item
                    {...{ index, facetValueId: v.id, selected: isChecked(v) }}
                    key={v.id}
                    className={v.text ? '' : 'hide'}
                  >
                    <AccordionFacets.ItemCheckbox>
                      <AccordionFacets.ItemCheckboxIndicator>
                        <CheckIcon />
                      </AccordionFacets.ItemCheckboxIndicator>
                    </AccordionFacets.ItemCheckbox>
                    <AccordionFacets.ItemLabel>
                      <span> {v.text}</span> <span>{v.count && `(${v.count})`}</span>
                    </AccordionFacets.ItemLabel>
                  </AccordionFacets.Item>
                ))}
              </AccordionFacets.ValueList>
            </AccordionFacets.Content>
          </AccordionFacets.Facet>
        ))}
      </SearchResultsAccordionFacets>
    </div>
  );
};
export default Facets;
