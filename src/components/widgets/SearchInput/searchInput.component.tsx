import { useRouter } from 'next/router';
import type { FormEvent } from 'react';
import React from 'react';

const SearchInput = (): JSX.Element => {
  const router = useRouter();
  const { q } = router.query;
  const [searchTerm, setSearchTerm] = React.useState('');

  React.useEffect(() => {
    setSearchTerm(q as string);
  }, [q]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    const target = e.target.query;
    router.replace(`/search?q=${target.value}`);
    target.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <div className="form-outline" data-mdb-input-init>
          <input
            type="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
            placeholder="Search..."
            name="query"
            className="searchControl"
            value={searchTerm}
            onClick={(ev) => ev.stopPropagation()}
            onInput={(ev) => ev.stopPropagation()}
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
  );
};
export default SearchInput;
