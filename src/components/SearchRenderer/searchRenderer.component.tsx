import dynamic from 'next/dynamic';
import styles from './searchRenderer.module.scss';
interface ISearchRendererProps {}
const SearchInput = dynamic(import('../widgets/SearchInput/searchInput.component'));
const Facets = dynamic(import('../widgets/Facets/facets.component'));
const SearchContent = dynamic(import('../widgets/SearchContent/searchContent.component'));
const FacetsOnj = [
  {
    name: 'location',
    label: 'Property',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoibG9jYXRpb24iLCJ2YWx1ZSI6IkhpbmNrbGV5In0=',
        text: 'Hinckley',
        count: 13,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoibG9jYXRpb24iLCJ2YWx1ZSI6Ik1pbGxlIExhY3MifQ==',
        text: 'Mille Lacs',
        count: 12,
      },
    ],
  },
  {
    name: 'type',
    label: 'Category',
    value: [
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoiU2l0ZSBQYWdlIn0=',
        text: 'Site Page',
        count: 21,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoiTG9kZ2luZyJ9',
        text: 'Lodging',
        count: 9,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoiQW1lbml0eSJ9',
        text: 'Amenity',
        count: 6,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoiRGluaW5nIn0=',
        text: 'Dining',
        count: 5,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoiUHJvbW90aW9uIn0=',
        text: 'Promotion',
        count: 4,
      },
      {
        id: 'facetid_eyJ0eXBlIjoiZXEiLCJuYW1lIjoidHlwZSIsInZhbHVlIjoiRXZlbnQifQ==',
        text: 'Event',
        count: 1,
      },
    ],
  },
];
const SearchRenderer = ({}: ISearchRendererProps): JSX.Element => {
  const xxx = [];
  return (
    <div className="main-container">
      <h1 className="content-header__title">Search Results</h1>
      <div className={styles.coveoMainSection}>
        <div className={styles.facetSection}>
          <Facets fields={FacetsOnj}/>
        </div>
        <div className={styles.resultSection}>
          <SearchContent />
        </div>
      </div>
      {/* <div className={styles['search-btn']}>fdfdfdfdf</div>
      <SearchInput /> */}
    </div>
  );
};
export default SearchRenderer;
