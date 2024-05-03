import { HIGHLIGHT_DATA } from '@/utils/helper';
import { WidgetDataType, usePreviewSearch, widget } from '@sitecore-search/react';
import { ArticleCard, Presence, PreviewSearch } from '@sitecore-search/ui';
import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import React, { useCallback } from 'react';
import { HighlightComponent, getDescription } from '../Highlights/highlights';
export const SearchAutoSuggestInput = React.memo(({ defaultItemsPerPage = 8 }: any) => {
  const router = useRouter();
  const { q } = router.query;
  const [searchTerm, setSearchTerm] = React.useState('');
  const [clearTerm, setClearTerm] = React.useState(false);
  React.useEffect(() => {
    setSearchTerm(q as string);
    if (q !== undefined) {
      setClearTerm(true);
    }
  }, [q]);
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
      setSearchTerm(target.value);
      if (target.value.length > 0) {
        setClearTerm(true);
      }
      if (target.value.length >= 3) {
        onKeyphraseChange({ keyphrase: target.value });
      }
    },
    [onKeyphraseChange],
  );
  const handleRemoveParam = () => {
    router.push({ pathname: router.pathname });
    setSearchTerm('');
    setClearTerm(false);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target.query;
    router.replace(`/search?q=${target.value}`);
    target.value = '';
  };

  return (
    <PreviewSearch.Root>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="form-outline" data-mdb-input-init>
              <PreviewSearch.Input
                className="searchControl"
                onChange={keyphraseHandler}
                autoComplete="off"
                placeholder="Type to search..."
                name="query"
                value={searchTerm}
                onClick={(ev) => {
                  ev.stopPropagation();
                }}
              />
            </div>
            <button type="submit" className="searchBtn" data-mdb-ripple-init>
              <svg
                focusable="false"
                enableBackground="new 0 0 20 20"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Search"
                className="coveo-search-button-svg"
              >
                <title>Search</title>
                <g fill="currentColor">
                  <path
                    className="coveo-magnifier-circle-svg"
                    d="m8.368 16.736c-4.614 0-8.368-3.754-8.368-8.368s3.754-8.368 8.368-8.368 8.368 3.754 8.368 8.368-3.754 8.368-8.368 8.368m0-14.161c-3.195 0-5.793 2.599-5.793 5.793s2.599 5.793 5.793 5.793 5.793-2.599 5.793-5.793-2.599-5.793-5.793-5.793"
                  />
                  <path d="m18.713 20c-.329 0-.659-.126-.91-.377l-4.552-4.551c-.503-.503-.503-1.318 0-1.82.503-.503 1.318-.503 1.82 0l4.552 4.551c.503.503.503 1.318 0 1.82-.252.251-.581.377-.91.377" />
                </g>
              </svg>
            </button>
          </div>
        </form>
        <button className={`clearbtn ${clearTerm ? '' : 'hide'} `} onClick={handleRemoveParam}>
          <svg
            focusable="false"
            enableBackground="new 0 0 13 13"
            viewBox="0 0 13 13"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Clear"
            className="magic-box-clear-svg"
          >
            <title>Clear</title>
            <g fill="currentColor">
              <path d="m7.881 6.501 4.834-4.834c.38-.38.38-1.001 0-1.381s-1.001-.38-1.381 0l-4.834 4.834-4.834-4.835c-.38-.38-1.001-.38-1.381 0s-.38 1.001 0 1.381l4.834 4.834-4.834 4.834c-.38.38-.38 1.001 0 1.381s1.001.38 1.381 0l4.834-4.834 4.834 4.834c.38.38 1.001.38 1.381 0s .38-1.001 0-1.381z" />
            </g>
          </svg>
        </button>
      </div>
      <PreviewSearch.Content ref={widgetRef}>
        <Presence present={loading}>
          <span className="searchLoader">Loading...</span>
        </Presence>
        <Presence present={!loading}>
          <>
            <PreviewSearch.Results defaultQueryResult={queryResult}>
              {({ isFetching: loading, data: { content: articles = [] } = {} }) => (
                <PreviewSearch.Items
                  data-loading={loading}
                  className={`${articles.length > 0 ? 'suggesion' : 'suggesion hide'} `}
                >
                  <ul>
                    {!loading &&
                      articles.map((article, index) => (
                        <li key={article.id} className={`${article.title !== null ? '' : 'hide'} `}>
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
                        </li>
                      ))}
                  </ul>
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
