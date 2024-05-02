import { HIGHLIGHT_DATA } from '@/utils/helper';
import { WidgetDataType, usePreviewSearch, widget } from '@sitecore-search/react';
import { ArticleCard, Presence, PreviewSearch } from '@sitecore-search/ui';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import React, { useCallback } from 'react';
import { HighlightComponent, getDescription } from '../Highlights/highlights';
export const SearchAutoSuggestInput = React.memo(({ defaultItemsPerPage = 8 }: any) => {
  const router = useRouter();
  const {
    widgetRef,
    actions: { onItemClick, onKeyphraseChange },
    queryResult,
    queryResult: {
      isFetching,
      isLoading,
      data: { suggestion: { auto_named_suggester: articleSuggestions = [] } = {} } = {},
    },
  } = usePreviewSearch({
    query: (query) => {
      query.getRequest();
    },
    state: {
      suggestionsList: [{ suggestion: 'auto_named_suggester', max: 10 }],
      itemsPerPage: defaultItemsPerPage,
    },
  });

  const loading = isLoading || isFetching;
  const keyphraseHandler = useCallback(
    (event: any) => {
      const target = event.target;
      onKeyphraseChange({ keyphrase: target.value });
    },
    [onKeyphraseChange],
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const target = e.target.query;
    router.replace(`/search?q=${target.value}`);
    target.value = '';
  };
  return (
    <PreviewSearch.Root>
      <form onSubmit={handleSubmit}>
        <PreviewSearch.Input
          onChange={keyphraseHandler}
          autoComplete="off"
          placeholder="Type to search..."
          name="query"
          onClick={(ev) => {
            ev.stopPropagation();
          }}
        />
      </form>
      <PreviewSearch.Content ref={widgetRef}>
        <Presence present={loading}>
          <span>Loading...</span>
        </Presence>
        <Presence present={!loading}>
          <>
            <PreviewSearch.Results defaultQueryResult={queryResult}>
              {({ isFetching: loading, data: { content: articles = [] } = {} }) => (
                <PreviewSearch.Items data-loading={loading}>
                  {!loading &&
                    articles.map((article, index) => (
                      <PreviewSearch.Item key={article.id} asChild>
                        <a
                          href={article.url}
                          onClick={(e) => {
                            e.preventDefault();
                            onItemClick({ id: article.id, index, sourceId: article.source_id });
                            router.replace(`/search?q=${article.title}`);
                          }}
                        >
                          <ArticleCard.Root>
                            <ArticleCard.Title>
                              <HighlightComponent
                                text={getDescription(article, 'title')}
                                preSeparator={HIGHLIGHT_DATA.pre}
                                postSeparator={HIGHLIGHT_DATA.post}
                                highlightElement={HIGHLIGHT_DATA.highlightTag}
                              />
                            </ArticleCard.Title>
                          </ArticleCard.Root>
                        </a>
                      </PreviewSearch.Item>
                    ))}
                </PreviewSearch.Items>
              )}
            </PreviewSearch.Results>
          </>
        </Presence>
      </PreviewSearch.Content>
    </PreviewSearch.Root>
  );
});
const SearchInput = widget(SearchAutoSuggestInput, WidgetDataType.PREVIEW_SEARCH, 'content');
export default SearchInput;
