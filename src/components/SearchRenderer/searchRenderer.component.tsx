import dynamic from 'next/dynamic';
import styles from './searchRenderer.module.scss';
interface ISearchRendererProps {}
const SearchInput = dynamic(import('../widgets/SearchInput/searchInput.component'));
const SearchRenderer = ({}: ISearchRendererProps): JSX.Element => {
  return <div className={styles.search}>
<h1>I am Searches</h1>
  <SearchInput />
  </div>
};
export default SearchRenderer;
