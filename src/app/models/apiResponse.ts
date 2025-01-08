export interface ApiResponse {
  items: Character[];
  meta: Meta;
  link: Link;
}

export interface Character {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  deletedAt: string | null;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Link {
  first: string;
  previous: string | null;
  next: string | null;
  last: string;
}
