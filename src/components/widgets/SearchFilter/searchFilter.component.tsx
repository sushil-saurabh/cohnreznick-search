import { GridIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { CardViewSwitcher, SortSelect } from '@sitecore-search/ui';
import type { ISearchFilterProps } from './searchFilter.type';
import { useRouter } from 'next/router';

const SearchFilter = ({ fields }: ISearchFilterProps): JSX.Element => {
  const { selectedSortIndex, onSortChange, sortChoices, page, itemsPerPage, totalItems, articles } = fields;
  const router = useRouter();
  const { q } = router.query;
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

          <span className="showing">
            Showing
            <b>
              {itemsPerPage * (page - 1) + 1} - {itemsPerPage * (page - 1) + articles.length}
            </b>
            of <b>{totalItems}</b> <b>{q && `for ${q}`}</b>
          </span>
        </div>
        <SortSelect.Root defaultValue={sortChoices[selectedSortIndex]?.name} onValueChange={onSortChange}>
          <SortSelect.Trigger>
            <SortSelect.SelectValue>
              {selectedSortIndex > -1 ? sortChoices[selectedSortIndex].label : ''}
            </SortSelect.SelectValue>
            <SortSelect.Icon />
          </SortSelect.Trigger>
          <SortSelect.Content>
            <SortSelect.Viewport className="select">
              {sortChoices.map((option) => (
                <SortSelect.Option value={option} key={`${option.label}}`} className="selectItem">
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
