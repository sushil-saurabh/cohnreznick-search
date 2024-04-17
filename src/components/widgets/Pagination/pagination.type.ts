export interface IPaginationProps {
  fields: {
    page: number;
    onPageNumberChange: (e: any) => void;
    onResultsPerPageChange: (e: any) => void;
    defaultItemsPerPage: number;
    totalPages: number;
  };
}
