import SearchResultsWidget from '@/components/widgets/SearchResult';
import Layout from '@/layouts/Layout';
import { SEARCH_SORT_BY_FILTER } from '@/utils/common.type';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <Layout>
      <SearchResultsWidget
        key={q as string}
        rfkId="rfkid_7"
        defaultKeyphrase={q as string}
        defaultSortType={SEARCH_SORT_BY_FILTER.RELEVENCE}
        defaultPage={1}
        defaultItemsPerPage={10}
        componentType="search"
      />
    </Layout>
  );
}
