import { GridIcon, ListBulletIcon } from '@radix-ui/react-icons';
import { CardViewSwitcher, SortSelect } from '@sitecore-search/ui';
import type { ISearchFilterProps } from './searchFilter.type';

const SearchFilter = ({ fields }: ISearchFilterProps): JSX.Element => {
  const { onToggle, defaultCardView, selectedSortIndex, onSortChange, sortChoices } = fields;
  return (
    <>
      <CardViewSwitcher.Root onValueChange={onToggle} defaultValue={defaultCardView}>
        <CardViewSwitcher.Item value="grid" aria-label="Grid View">
          <GridIcon />
        </CardViewSwitcher.Item>
        <CardViewSwitcher.Item value="list" aria-label="List View">
          <ListBulletIcon />
        </CardViewSwitcher.Item>
      </CardViewSwitcher.Root>
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
    </>
  );
};
export default SearchFilter;
