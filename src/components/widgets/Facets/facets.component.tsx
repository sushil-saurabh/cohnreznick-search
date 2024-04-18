import { CheckIcon } from '@radix-ui/react-icons';
import { AccordionFacets, SearchResultsAccordionFacets } from '@sitecore-search/ui';
import styles from './facets.module.scss';
import type { IFacetsProps } from './facets.type';
const Facets = ({ fields }: IFacetsProps): JSX.Element => {
  const { facets, onFacetClick } = fields;
  return (
    <div className={styles.facetsOuter}>
      <SearchResultsAccordionFacets
        defaultFacetTypesExpandedList={[]}
        onFacetTypesExpandedListChange={() => {}}
        onFacetValueClick={(e) => {
          console.log(e);
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
                  <AccordionFacets.Item {...{ index, facetValueId: v.id }} key={v.id}>
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
