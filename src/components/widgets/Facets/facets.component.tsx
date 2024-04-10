import { useState } from 'react';
import styles from './facets.module.scss';
import { IFacets } from './facets.type';

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

interface IFacetsProps extends IFacets {}
const Facets = ({ name, label, value }: IFacetsProps): JSX.Element => {
  console.log(FacetsOnj);

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const facetsVal = FacetsOnj;

  return (
    <div className={styles.facetsOuter}>
      {facetsVal.map((facet, i) => (
        <div className={styles.facetContentOuter}>
          <div className={styles.facetHeader}>
            <h2 className={styles.facetHeaderTitle}>
              <span aria-hidden="true" title="Content Type">
                {facet.name}
              </span>
            </h2>
            <div className={styles.facetsbtns}>
              <button className="clear">Clear</button>
              <button className="arrowbtn">
                <svg
                  focusable="false"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Arrow Up"
                  className="coveo-dynamic-facet-collapse-toggle-svg"
                >
                  <title>Arrow Up</title>
                  <g fill="currentColor">
                    <path d="m5 .068c.222 0 .443.084.612.253l4.134 4.134c.338.338.338.886 0 1.224s-.886.338-1.224 0l-3.522-3.521-3.523 3.521c-.336.338-.886.338-1.224 0s-.337-.886.001-1.224l4.134-4.134c.168-.169.39-.253.612-.253z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <ul className="facetValues">
            {facet.value.map((value, i) => (
              <li className={isActive ? 'active' : ''} onClick={toggleClass}>
                <button
                  type="button"
                  role="checkbox"
                  aria-checked="false"
                  data-state="unchecked"
                  value={'on'}
                  id={value.id}
                  className="checktype"
                ></button>
                <label className="testOuter">
                  <span className="text">{value.text}</span>
                  <span className="number">({value.count})</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default Facets;
