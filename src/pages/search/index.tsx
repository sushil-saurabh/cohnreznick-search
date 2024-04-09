import SearchResultsWidget from "@/components/widgets/SearchResult";
import Layout from "@/layouts/Layout";
import { SEARCH_SORT_BY_FILTER } from "@/utils/common.type";

export default function Search() {
  return (
    <Layout>
      <SearchResultsWidget 
        key={"grand"}
        rfkId="rfkid_7"
        defaultKeyphrase={"grand"}
        defaultSortType={SEARCH_SORT_BY_FILTER.ASC}
        defaultPage={1}
        defaultItemsPerPage={10}
        componentType="search"
      />
    </Layout>
  );
}
