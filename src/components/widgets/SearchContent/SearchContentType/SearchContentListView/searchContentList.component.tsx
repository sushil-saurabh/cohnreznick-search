import Link from 'next/link';
import type { ISearchContentListProps } from './searchContentList.type';
const SearchContentList = ({ fields }: ISearchContentListProps): JSX.Element => {
  return (
    <>
      <div className="searchArticlesListView">
        {fields.map((a) => (
          <div key={`${a.id}@${a.source_id}`}>
            <Link title={a.name} href={`${a.event_redirect_url !== null ? a.event_redirect_url : a.url} `}>
              <div className="Title">{a.title}</div>
              <div className={`publishDate ${a.publish_date !== null && a.author_name !== null ? '' : 'hide'} `}>
                PublishedDate : {a.publish_date} <span>| {a.author_name}</span>
              </div>
              <div className="Subtitle" dangerouslySetInnerHTML={{ __html: a.description }} />
              <div className="Type">
                <span>{a.content_type ? a.content_type : ''}</span>
                {a.selected_industries.map((itm: string, index: number) => (
                  <span key={index}>{itm}</span>
                ))}
                {a.selected_services.map((itm: string, index: number) => (
                  <span key={index}>{itm}</span>
                ))}
                {a.selected_topics.map((itm: string, index: number) => (
                  <span key={index}>{itm}</span>
                ))}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchContentList;
