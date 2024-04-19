import { useRouter } from 'next/router';

const NoResult = (): JSX.Element => {
  const router = useRouter();
  const { q } = router.query;
  return (
    <>
      <div className="noResultOuter">
        <div className="resultFor">{q && `No results for ${q}`}</div>
        <button className="lastActionbutton">Cancel last action</button>
        <div className="searchTipsInfo">Search tips</div>
        <ul>
          <li>Check the spelling of your keywords.</li>
          <li>Try using fewer, different or more general keywords.</li>
        </ul>
      </div>
    </>
  );
};
export default NoResult;
