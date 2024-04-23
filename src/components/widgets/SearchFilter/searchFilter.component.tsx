import { SortSelect } from '@sitecore-search/ui';
import type { ISearchFilterProps } from './searchFilter.type';
import { useRouter } from 'next/router';

const SearchFilter = ({ fields }: ISearchFilterProps): JSX.Element => {
  const { selectedSortIndex, onSortChange, sortChoices, page, itemsPerPage, totalItems, articles } = fields;
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <div className="filterOuter">
        <div className="totalItems">
          <span className="showing">
            Showing &nbsp;
            <b>
              {itemsPerPage * (page - 1) + 1} - {itemsPerPage * (page - 1) + articles.length}
            </b>
            &nbsp; of <b>{totalItems}</b> <b>{q && `for ${q}`}</b>
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
