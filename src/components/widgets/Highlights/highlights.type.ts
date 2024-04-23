import type React from 'react';

export interface IHighlights {
  text: string;
  preSeparator: string;
  postSeparator: string;
  highlightElement: React.ElementType;
}
