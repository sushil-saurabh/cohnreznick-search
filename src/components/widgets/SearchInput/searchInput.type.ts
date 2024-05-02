import type { ChangeEvent } from 'react';

export interface ISearchInputProps {
  fields: {
    keyphraseHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}
