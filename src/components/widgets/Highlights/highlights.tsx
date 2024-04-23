import type { EntityModel } from '@sitecore-search/react';
import PropTypes from 'prop-types';
import type { IHighlights } from './highlights.type';

export const getDescription = (article: EntityModel, key: string) => {
  console.log(article, key);
  if (article.highlight?.[key] && (article.highlight[key] || []).length > 0) {
    return (article.highlight[key] || []).join(' ');
  }
  return article[key] || '';
};

export const HighlightComponent = ({ text, preSeparator, postSeparator, highlightElement }: IHighlights) => {
  const elements = text.split(preSeparator);
  const Highlight = highlightElement;
  if (elements.length > 1) {
    return (
      <div className="Subtitle">
        {elements.map((e, index) => {
          if (e.includes(postSeparator)) {
            const parts = e.split(postSeparator);
            return (
              <span key={index}>
                <Highlight key={`${index}-${index}`}>{parts[0]}</Highlight> {parts[1]}
              </span>
            );
          } else {
            return <span key={index}>{e}</span>;
          }
        })}
      </div>
    );
  }
  return <div className="Subtitle">{text}</div>; // means that separator is not in the text
};
