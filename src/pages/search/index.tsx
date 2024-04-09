import SearchResultsWidget from "@/components/widgets/SearchResult";
import { SEARCH_SORT_BY_FILTER } from "@/utils/common.type";

export default function Search() {
  return (
    <SearchResultsWidget 
      key={"grand"}
      rfkId="rfkid_7"
      defaultKeyphrase={"grand"}
      defaultSortType={SEARCH_SORT_BY_FILTER.ASC}
      defaultPage={1}
      defaultItemsPerPage={10}
    />
  );
}
