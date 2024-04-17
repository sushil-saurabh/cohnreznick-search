export interface ISearchFilterProps {
  fields: {
    selectedSortIndex: number;
    onToggle?(value: string): void;
    defaultCardView: any;
    onSortChange: (value?: any | undefined) => void;
    sortChoices: Array<{
      name: string;
      label: string;
    }>;
  };
}
