import { CheckIcon } from '@radix-ui/react-icons';
import { AccordionFacets } from '@sitecore-search/ui';
import styles from './facets.module.scss';
import { IFacets } from './facets.type';
interface IFacetsProps {
  fields: Array<IFacets>;
}
const Facets = ({ fields }: IFacetsProps): JSX.Element => {
  return (
    <div className={styles.facetsOuter}>
      <AccordionFacets.Root
        defaultFacetTypesExpandedList={[]}
        onFacetTypesExpandedListChange={() => {}}
        onFacetValueClick={() => {}}
      >
        {fields.map((facts, index) => (
          <AccordionFacets.Facet facetId={facts.name} key={facts.name} className="facetHeader">
            <AccordionFacets.Header className="facetHeaderTitle">
              <AccordionFacets.Trigger className="facetsbtns">{facts.label}</AccordionFacets.Trigger>
            </AccordionFacets.Header>
            <AccordionFacets.Content className="facetsContentOuter">
              <AccordionFacets.ValueList className="facetsList facetValues">
                {facts.value.map((v, index) => (
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
      </AccordionFacets.Root>
    </div>
  );
};
export default Facets;
