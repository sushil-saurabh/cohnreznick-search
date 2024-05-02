import SearchResultsWidget from '@/components/widgets/SearchResult';
import Layout from '@/layouts/Layout';
import { SEARCH_SORT_BY_FILTER } from '@/utils/common.type';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Events() {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <Head>
        <title>Search Results Govcon360Renderer - CohnReznick</title>
      </Head>
      <Layout>
        <SearchResultsWidget
          key={q as string}
          rfkId="rfkid_events"
          defaultKeyphrase={q as string}
          defaultSortType={SEARCH_SORT_BY_FILTER.EVENTS_DATES}
          defaultPage={1}
          defaultItemsPerPage={10}
          componentType="govcon360"
        />
      </Layout>
    </>
  );
}
