export interface StrapiMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export type StrapiEntity<T> = T & {
  id: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export interface StrapiImageEntity {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: StrapiImageEntity;
    small: StrapiImageEntity;
    medium: StrapiImageEntity;
    large: StrapiImageEntity;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiCollectionResponse<T> {
  data: StrapiEntity<T>[];
  meta?: StrapiMeta;
}

export interface StrapiSingleResponse<T> {
  data: StrapiEntity<T>;
  meta?: StrapiMeta;
}

export interface SocialNetwork {
  title: string;
  url: string;
  icon: string;
}

export interface Tag {
  name: string;
  slug: string;
}

export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  tags?: Tag[];
  coverImage?: StrapiImage[];
  content?: JSON;
}
