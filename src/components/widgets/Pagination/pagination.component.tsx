import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import { Pagination as SPagination, Select, SortSelect } from '@sitecore-search/ui';
import type { IPaginationProps } from './pagination.type';

const Pagination = ({ fields }: IPaginationProps): JSX.Element => {
  const { defaultItemsPerPage, onPageNumberChange, onResultsPerPageChange, page, totalPages } = fields;
  return (
    <>
      <div>
        <div className="hide">
          <label>Results Per Page</label>
          <Select.Root
            defaultValue={String(defaultItemsPerPage)}
            onValueChange={(v) => onResultsPerPageChange({ numItems: Number(v) })}
          >
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
        <SPagination.Root
          currentPage={page}
          defaultCurrentPage={1}
          totalPages={totalPages}
          onPageChange={(v) => onPageNumberChange({ page: v })}
        >
          <SPagination.PrevPage onClick={(e) => e.preventDefault()}>
            <ArrowLeftIcon />
          </SPagination.PrevPage>
          <SPagination.Pages>
            {(pagination) =>
              SPagination.paginationLayout(pagination, {}).map(({ page, type }) =>
                type === 'page' ? (
                  <SPagination.Page
                    key={page}
                    aria-label={`Page ${page}`}
                    page={page as number}
                    onClick={(e) => e.preventDefault()}
                  >
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
