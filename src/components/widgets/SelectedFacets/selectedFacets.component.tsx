import type { ICheckedFacets } from '@/utils/common.type';
import { useSearchResultsSelectedFilters } from '@sitecore-search/react';
import React from 'react';
import type { ISelectedFacetsProps } from './selectedFacets.type';

const SelectedFacets = ({ fields }: ISelectedFacetsProps): JSX.Element => {
  const selectedFacetsFromApi = useSearchResultsSelectedFilters();
  const { onRemoveFilter } = fields;
  const groupDataByLabel = React.useCallback((data: ICheckedFacets[]) => {
    return Object.entries(
      data.reduce((acc, { facetLabel, ...rest }) => {
        acc[facetLabel] = [...(acc[facetLabel] || []), rest];
        return acc;
      }, {} as any),
    ).map(([label, items]) => ({ label, items }));
  }, []);
  const handleClearAll = () => {
    selectedFacetsFromApi.forEach((facet) => {
      onRemoveFilter(facet);
    });
  };
  const list = groupDataByLabel(selectedFacetsFromApi as ICheckedFacets[]);
  return (
    <>
      <div className={`withClearButton ${list.length > 0 ? '' : 'hide'}`}>
        <ul className="fiterSelected">
          {list.map((selectedFacet, index) => (
            <li key={index}>
              {selectedFacet.label !== 'undefined' && (
                <div className="items">
                  <span className="type">{selectedFacet.label}:</span>
                  {(selectedFacet.items as ICheckedFacets[]).map((t, i) => (
                    <span className="singleitem" onClick={() => onRemoveFilter(t)} key={i}>
                      <span>{t.valueLabel}</span>
                      <button>
                        <svg
                          focusable="false"
                          enableBackground="new 0 0 13 13"
                          viewBox="0 0 13 13"
                          xmlns="http://www.w3.org/2000/svg"
                          role="img"
                          aria-label="Clear"
                        >
                          <title>Clear</title>
                          <g fill="currentColor">
                            <path d="m7.881 6.501 4.834-4.834c.38-.38.38-1.001 0-1.381s-1.001-.38-1.381 0l-4.834 4.834-4.834-4.835c-.38-.38-1.001-.38-1.381 0s-.38 1.001 0 1.381l4.834 4.834-4.834 4.834c-.38.38-.38 1.001 0 1.381s1.001.38 1.381 0l4.834-4.834 4.834 4.834c.38.38 1.001.38 1.381 0s .38-1.001 0-1.381z" />
                          </g>
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <button className="clearAll" onClick={handleClearAll}>
          Clear All Filters
        </button>
      </div>
    </>
  );
};
export default SelectedFacets;
