import dynamic from 'next/dynamic';
import styles from './searchRenderer.module.scss';
interface ISearchRendererProps {}
const SearchInput = dynamic(import('../widgets/SearchInput/searchInput.component'));
const Facets = dynamic(import('../widgets/Facets/facets.component'));
const SearchContent = dynamic(import('../widgets/SearchContent/searchContent.component'));
const SearchRenderer = ({}: ISearchRendererProps): JSX.Element => {
  const xxx = [];
  return (
    <div className="main-container">
      <h1 className="content-header__title">Search Results</h1>
      <div className={styles.coveoMainSection}>
        <div className={styles.facetSection}>
          <Facets />
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
