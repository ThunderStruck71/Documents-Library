export const NAME = "NAME";
export const CREATION_DATE = "CREATION_DATE";
export const ASCENDING = "ASCENDING";
export const DESCENDING = "DESCENDING";

export type SearchTermType = {
  id: string,
  name: string,
  creationDate: string
};

export type DocumentType = {
  id: number,
  name: string,
  creationDate: Date,
  description: string
};

export type SortType = {
  field: string,
  direction: string
};