import { useRouter } from 'next/router';

const NoResult = (): JSX.Element => {
  const router = useRouter();
  const { q } = router.query;

  const handleRemoveParam = () => {
    router.push({ pathname: router.pathname });
  };
  return (
    <>
      <div className="noResultOuter">
        <div className="resultFor">
          No results for <strong>{q && `${q}`}</strong>
        </div>
        <button className="lastActionbutton" onClick={handleRemoveParam}>
          Cancel last action
        </button>
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
