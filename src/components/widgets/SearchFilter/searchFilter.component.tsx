import { GridIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { CardViewSwitcher, SortSelect } from '@sitecore-search/ui';
import type { ISearchFilterProps } from './searchFilter.type';

const SearchFilter = ({ fields }: ISearchFilterProps): JSX.Element => {
  const { selectedSortIndex, onSortChange, sortChoices, page, itemsPerPage, totalItems, articles } = fields;
  return (
    <>
      {/* <CardViewSwitcher.Root onValueChange={onToggle} defaultValue={defaultCardView}>
        <CardViewSwitcher.Item value="grid" aria-label="Grid View">
          <GridIcon />
        </CardViewSwitcher.Item>
        <CardViewSwitcher.Item value="list" aria-label="List View">
          <ListBulletIcon />
        </CardViewSwitcher.Item>
      </CardViewSwitcher.Root> */}
      <div className="filterOuter">
        <div className="totalItems">
          {/* <span>
            Results <span className="highlight">{page}</span>-<span className="highlight">{defaultItemsPerPage}</span>{' '}
            of <span className="highlight">{totalPages}</span>
          </span> */}

          <b>
            Showing {itemsPerPage * (page - 1) + 1} - {itemsPerPage * (page - 1) + articles.length} of {totalItems}{' '}
            results
          </b>
        </div>
        <SortSelect.Root defaultValue={sortChoices[selectedSortIndex]?.name} onValueChange={onSortChange}>
          <SortSelect.Trigger>
            <SortSelect.SelectValue>
              {selectedSortIndex > -1 ? sortChoices[selectedSortIndex].label : ''}
            </SortSelect.SelectValue>
            <SortSelect.Icon />
          </SortSelect.Trigger>
          <SortSelect.Content>
            <SortSelect.Viewport>
              {sortChoices.map((option) => (
                <SortSelect.Option value={option} key={`${option.label}}`}>
                  <SortSelect.OptionText>{option.label}</SortSelect.OptionText>
                </SortSelect.Option>
              ))}
            </SortSelect.Viewport>
          </SortSelect.Content>
        </SortSelect.Root>
      </div>
    </>
  );
};
export default SearchFilter;
