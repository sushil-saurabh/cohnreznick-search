import { useState } from 'react';
import Link from 'next/link';
import type { ISearchContentListProps } from './searchContentList.type';
import { HIGHLIGHT_DATA } from '@/utils/helper';
import { HighlightComponent, getDescription } from '@/components/widgets/Highlights/highlights';
import ModalPopUp from '@/components/widgets/ModalPopUp/modalPopup.component';
import BrightcovePlayer from '@/components/widgets/BrightcovePlayer/brightCovePlayer';

const SearchContentList = ({ fields }: ISearchContentListProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoID, setVideoId] = useState('');
  const setIdOnClick = (id: any) => {
    setVideoId(id);
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };
  const openModal = () => {
    setIsModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  return (
    <>
      <div className="searchArticlesListView">
        {fields.map((a) => (
          <div key={`${a.id}@${a.source_id}`}>
            <a onClick={() => setIdOnClick('6299277552001')}>Video Id</a>
            <a
              href="https://www.cohnreznick.com/-/media/resources/cohnreznick_2023_annual_report.pdf"
              target="_blank"
              rel="noreferrer"
              download
            >
              PDF
            </a>
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
        <ModalPopUp isOpen={isModalOpen} onClose={closeModal}>
          <BrightcovePlayer videoId={videoID} />
        </ModalPopUp>
      </div>
    </>
  );
};
export default SearchContentList;
