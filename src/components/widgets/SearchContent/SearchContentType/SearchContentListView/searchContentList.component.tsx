import Link from 'next/link';
import type { ISearchContentListProps } from './searchContentList.type';
import { HIGHLIGHT_DATA } from '@/utils/helper';
import { HighlightComponent, getDescription } from '@/components/widgets/Highlights/highlights';
const SearchContentList = ({ fields }: ISearchContentListProps): JSX.Element => {
  return (
    <>
      <div className="searchArticlesListView">
        {fields.map((a) => (
          <div key={`${a.id}@${a.source_id}`}>
            <Link title={a.name} href={`${a.event_redirect_url !== null ? a.event_redirect_url : a.url} `}>
              <div className="Title">{a.title ? a.title : a.name}</div>
              <div
                className={`publishDate ${a.publish_date || a.author_name ? '' : 'hide'} ${a.template_name === 'Events' ? 'hide' : ''} `}
              >
                PublishedDate : {a.publish_date}
                <span>
                  {a.author_name ? ' |' : ''} {a.author_name}
                </span>
              </div>
              <HighlightComponent
                text={getDescription(a, 'description')}
                preSeparator={HIGHLIGHT_DATA.pre}
                postSeparator={HIGHLIGHT_DATA.post}
                highlightElement={HIGHLIGHT_DATA.highlightTag}
              />
              <div className="Type">
                <span>{a.page_type ? a.page_type : ''}</span>
                {a.selected_industries.map((itm: string, index: number) => (
                  <span key={index}>{itm}</span>
                ))}
                {a.selected_services.map((itm: string, index: number) => (
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
