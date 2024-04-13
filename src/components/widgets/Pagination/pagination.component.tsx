import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './searchContent.module.scss';
import { AccordionFacets, CardViewSwitcher, Pagination as SPagination, Select, SortSelect } from '@sitecore-search/ui';
import { ArrowLeftIcon, ArrowRightIcon, GridIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { useContext, useState } from 'react';
import { useSearchResults, useSearchResultsSelectedFilters } from '@sitecore-search/react';
import { HIGHLIGHT_DATA } from '../utils';

interface IPaginationProps {}

const Pagination = ({}: IPaginationProps): JSX.Element => {
  return (
    <>
      <div>
        <div>
          <label>Results Per Page</label>
          <Select.Root defaultValue={String(24)} onValueChange={(v) => {}}>
            <Select.Trigger>
              <Select.SelectValue />
              <Select.Icon />
            </Select.Trigger>
            <Select.Content>
              <Select.Viewport>
                <Select.SelectItem value="24">
                  <SortSelect.OptionText>24</SortSelect.OptionText>
                </Select.SelectItem>

                <Select.SelectItem value="48">
                  <SortSelect.OptionText>48</SortSelect.OptionText>
                </Select.SelectItem>

                <Select.SelectItem value="64">
                  <SortSelect.OptionText>64</SortSelect.OptionText>
                </Select.SelectItem>
              </Select.Viewport>
            </Select.Content>
          </Select.Root>
        </div>
        <SPagination.Root currentPage={1} defaultCurrentPage={1} totalPages={45} onPageChange={(v) => {}}>
          <SPagination.PrevPage onClick={(e) => e.preventDefault()}>
            <ArrowLeftIcon />
          </SPagination.PrevPage>
          <SPagination.Pages>
            {(pagination) =>
              SPagination.paginationLayout(pagination, {}).map(({ page, type }) =>
                type === 'page' ? (
                  <SPagination.Page key={page} aria-label={`Page ${page}`} page={1} onClick={(e) => e.preventDefault()}>
                    {page}
                  </SPagination.Page>
                ) : (
                  <span key={type}>...</span>
                ),
              )
            }
          </SPagination.Pages>
          <SPagination.NextPage onClick={(e) => e.preventDefault()}>
            <ArrowRightIcon />
          </SPagination.NextPage>
        </SPagination.Root>
      </div>
    </>
  );
};
export default Pagination;
