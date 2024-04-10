export interface IFacets {
  name: string;
  label: string;
  value: IValue[];
}
export interface IValue {
  id: string;
  text: string;
  count: number;
}
