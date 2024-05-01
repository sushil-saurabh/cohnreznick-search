import Link from 'next/link';
import { HIGHLIGHT_DATA } from '@/utils/helper';
import { HighlightComponent, getDescription } from '@/components/widgets/Highlights/highlights';
import type { ISearchContentListProps } from '../SearchContentListView/searchContentList.type';
import { dateFormat } from '@/utils/common.type';

const SearchContentList = ({ fields }: ISearchContentListProps): JSX.Element => {
  return (
    <>
      <div className="searchArticlesGridView">
        {fields.map((a) => (
          <Link
            key={`${a.id}@${a.source_id}`}
            title={a.name}
            href={`${a.event_redirect_url !== null ? a.event_redirect_url : a.url} `}
          >
            <div className="eventcontent">
              <div className="date">
                <div className="day">{dateFormat(a.event_date).day}</div>
                {dateFormat(a.event_date).month} {dateFormat(a.event_date).year}
              </div>
              <div className="event">
                <div className="Title">{a.title ? a.title : a.name}</div>
                <HighlightComponent
                  text={getDescription(a, 'description')}
                  preSeparator={HIGHLIGHT_DATA.pre}
                  postSeparator={HIGHLIGHT_DATA.post}
                  highlightElement={HIGHLIGHT_DATA.highlightTag}
                />
                <div className="Type">
                  <span>{a.content_type ? a.content_type : ''}</span>
                  {a.selected_industries.map((itm: string, index: number) => (
                    <span key={index}>{itm}</span>
                  ))}
                  {a.selected_services.map((itm: string, index: number) => (
                    <span key={index}>{itm}</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
export default SearchContentList;
