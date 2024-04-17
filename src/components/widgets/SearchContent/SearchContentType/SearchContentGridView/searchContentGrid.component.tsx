import Link from 'next/link';
import type { ISearchContentGridListProps } from './searchContentGrid.type';

const SearchContentGrid = ({ fields }: ISearchContentGridListProps): JSX.Element => {
  return (
    <>
      GRID
      <div className="searchArticlesGridView">
        {fields.map((a) => (
          <div key={`${a.id}@${a.source_id}`}>
            {/* <div className="ImageWrapper">
              <Image src={a.image_url} alt="" fill />
            </div> */}
            <Link title={a.name} href={`/detail/${a.id}`}>
              <div className="Title">{a.name}</div>
              <div className="Subtitle" dangerouslySetInnerHTML={{ __html: a.highlight?.description }} />
              <div className="Type">{a.type ? a.type : 'Unknown'}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchContentGrid;
