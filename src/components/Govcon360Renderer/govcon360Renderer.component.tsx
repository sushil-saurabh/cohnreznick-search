import { useContent } from '@/provider/content/content';
import { CardViewSwitcher } from '@sitecore-search/ui';
import dynamic from 'next/dynamic';
import React from 'react';
import NoResult from '../widgets/NoResult/noResult.component';
import Pagination from '../widgets/Pagination/pagination.component';
import type { GRID_TYPE } from '../widgets/SearchContent/searchContent.type';
import SelectedFacets from '../widgets/SelectedFacets/selectedFacets.component';
import type { ISearchRendererProps } from './govcon360Renderer.type';
const SearchContentComponent = dynamic(import('../widgets/SearchContent/searchContent.component'));
const SearchFilter = dynamic(import('../widgets/SearchFilter/searchFilter.component'));
const Facets = dynamic(import('../widgets/Facets/facets.component'));
const Skeleton = dynamic(import('react-loading-skeleton'));
const Govcon360Renderer = ({ fields }: ISearchRendererProps): JSX.Element => {
  const [view, setView] = React.useState(CardViewSwitcher.CARD_VIEW_LIST);
  const globaleValue = useContent();
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
  } = fields;
  return (
    <div className="main-container">
      <h3 className="section-title">
        <span className="field-title">All Insights</span>
      </h3>
      <div
        className={`coveoMainSection ${isFetching || totalItems ? '' : 'full'} ${globaleValue.windowWidth > 991 ? '' : 'smallScreen'}`}
      >
        <div className="mobilebg" id="filterButtonMobile" onClick={globaleValue.toggleBodyClass} />
        <div className="facetSection gov360">
          {!isLoading ? <Facets fields={{ facets, onFacetClick }} /> : <Skeleton count={5} height={40} />}
        </div>
        <div className="resultSection">
          {isFetching || totalItems ? (
            <>
              <button className="filterButtonMobile" onClick={globaleValue.toggleBodyClass}>
                Filters
              </button>
              <SelectedFacets fields={{ onRemoveFilter }} />
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
export default Govcon360Renderer;
