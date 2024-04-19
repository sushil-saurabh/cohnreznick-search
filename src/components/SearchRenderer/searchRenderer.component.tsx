/* eslint-disable max-lines-per-function */
import { CardViewSwitcher } from '@sitecore-search/ui';
import dynamic from 'next/dynamic';
import React from 'react';
import Pagination from '../../components/widgets/Pagination/pagination.component';
import type { GRID_TYPE } from '../widgets/SearchContent/searchContent.type';
import SearchInput from '../widgets/SearchInput/searchInput.component';
import styles from './searchRenderer.module.scss';
import type { ISearchRendererProps } from './searchRenderer.type';
import NoResult from '../widgets/NoResult/noResult.component';
const SearchContentComponent = dynamic(import('../widgets/SearchContent/searchContent.component'));
const SearchFilter = dynamic(import('../widgets/SearchFilter/searchFilter.component'));
const Facets = dynamic(import('../widgets/Facets/facets.component'));
const Skeleton = dynamic(import('react-loading-skeleton'));
const SearchRenderer = ({ fields }: ISearchRendererProps): JSX.Element => {
  const [view, setView] = React.useState(CardViewSwitcher.CARD_VIEW_LIST);

  const {
    onSortChange,
    facets,
    selectedSortIndex,
    sortChoices,
    isLoading,
    isFetching,
    onFacetClick,
    page,
    totalPages,
    onResultsPerPageChange,
    onPageNumberChange,
    onRemoveFilter,
    defaultItemsPerPage,
    articles,
    totalItems,
    itemsPerPage,
    selectedFacetsFromApi,
  } = fields;
  return (
    <div className="main-container">
      <h1 className="content-header__title">Search Results</h1>
      <div className={`coveoMainSection ${isFetching || totalItems ? '' : 'full'}`}>
        <div className="facetSection">
          {!isLoading ? <Facets fields={{ facets, onFacetClick }} /> : <Skeleton count={5} height={40} />}
        </div>
        <div className="resultSection">
          <div className="PageSearch">
            <SearchInput />
          </div>
          {isFetching || totalItems ? (
            <>
              {/* will use latter <button className="filterButtonMobile">Filter</button> */}
              <ul className="fiterSelected">
                {selectedFacetsFromApi.map((selectedFacet: any) => (
                  <li key={`${selectedFacet.facetId}${selectedFacet.facetLabel}${selectedFacet.valueLabel}`}>
                    <div className="items">
                      <span className="type">{selectedFacet.facetLabel}:</span>
                      <span className="singleitem" onClick={() => onRemoveFilter(selectedFacet)}>
                        <span>{selectedFacet.valueLabel}</span>
                        <button>
                          <svg
                            focusable="false"
                            enable-background="new 0 0 13 13"
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
                    </div>
                  </li>
                ))}
              </ul>
              <div className="SearchFilter">
                <SearchFilter
                  fields={{
                    defaultCardView: view,
                    onSortChange,
                    onToggle: setView,
                    selectedSortIndex,
                    sortChoices,
                    page,
                    totalPages,
                    defaultItemsPerPage,
                    articles,
                    totalItems,
                    itemsPerPage,
                  }}
                />
              </div>
              {!isFetching ? (
                <SearchContentComponent fields={fields.articles} gridType={view as GRID_TYPE} />
              ) : (
                <Skeleton count={10} height={100} />
              )}
              <div className="Pagination">
                {!isLoading ? (
                  <Pagination
                    fields={{ page, totalPages, onResultsPerPageChange, onPageNumberChange, defaultItemsPerPage }}
                  />
                ) : (
                  <Skeleton count={1} height={40} />
                )}
              </div>
            </>
          ) : (
            <>
              <NoResult />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default SearchRenderer;
