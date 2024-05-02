import SearchResultsWidget from '@/components/widgets/SearchResult';
import Layout from '@/layouts/Layout';
import { SEARCH_SORT_BY_FILTER } from '@/utils/common.type';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function News() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <Head>
        <title>Search Results - CohnReznick</title>
      </Head>
      <Layout>
        <SearchResultsWidget
          key={''}
          rfkId="rkfid_news"
          defaultKeyphrase={q as string}
          defaultSortType={SEARCH_SORT_BY_FILTER.PUBLISH_DATE}
          defaultPage={1}
          defaultItemsPerPage={10}
          componentType="news"
        />
      </Layout>
    </>
  );
}
