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
          data-item={totalPages}
          className={`paginationOuter ${totalPages === 1 ? 'hide' : ''} `}
          onPageChange={(v) => onPageNumberChange({ page: v })}
        >
          <SPagination.PrevPage onClick={(e) => e.preventDefault()}>
            <svg
              focusable="false"
              enable-background="new 0 0 11 20"
              viewBox="0 0 11 20"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Left Arrow"
              className="coveo-pager-previous-icon-svg"
            >
              <title>Left Arrow</title>
              <g fill="currentColor">
                <path d="m10.692 1.811c.412-.413.411-1.086 0-1.5-.2-.201-.465-.311-.746-.311-.283 0-.548.11-.747.31l-8.892 8.939c-.198.2-.307.466-.307.75 0 .286.109.551.305.748l8.893 8.941c.2.201.466.312.748.312h.001c.281 0 .546-.11.745-.309.199-.201.308-.468.308-.753 0-.284-.109-.548-.306-.745l-8.146-8.194z" />
              </g>
            </svg>
          </SPagination.PrevPage>
          <SPagination.Pages className="paging">
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
            <svg
              focusable="false"
              enable-background="new 0 0 11 20"
              viewBox="0 0 11 20"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Right Arrow"
              className="coveo-pager-next-icon-svg"
            >
              <title>Right Arrow</title>
              <g fill="currentColor">
                <path d="m .308 18.189c-.412.413-.411 1.086 0 1.5.2.201.465.311.746.311.282 0 .547-.11.747-.31l8.891-8.939c.199-.2.307-.466.307-.75 0-.286-.109-.551-.305-.748l-8.893-8.942c-.199-.2-.465-.311-.747-.311-.001 0-.001 0-.001 0-.281 0-.546.11-.745.309-.198.201-.308.468-.308.753 0 .284.11.548.306.745l8.145 8.193z" />
              </g>
            </svg>
          </SPagination.NextPage>
        </SPagination.Root>
      </div>
    </>
  );
};
export default Pagination;
