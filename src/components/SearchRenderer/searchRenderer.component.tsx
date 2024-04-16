import { CardViewSwitcher } from '@sitecore-search/ui';
import dynamic from 'next/dynamic';
import React from 'react';
import Pagination from '../../components/widgets/Pagination/pagination.component';
import type { GRID_TYPE } from '../widgets/SearchContent/searchContent.type';
import SearchInput from '../widgets/SearchInput/searchInput.component';
import styles from './searchRenderer.module.scss';
import type { ISearchRendererProps } from './searchRenderer.type';
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
    defaultItemsPerPage,
  } = fields;
  return (
    <div className="main-container">
      <h1 className="content-header__title">Search Results</h1>
      <div className={styles.coveoMainSection}>
        <div className={styles.facetSection}>
          {!isLoading ? <Facets fields={{ facets, onFacetClick }} /> : <Skeleton count={5} height={40} />}
        </div>
        <div className={styles.resultSection}>
          <div className="SearchFilter">
            <SearchFilter
              fields={{ defaultCardView: view, onSortChange, onToggle: setView, selectedSortIndex, sortChoices }}
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
        </div>
      </div>

      <SearchInput />
    </div>
  );
};
export default SearchRenderer;
