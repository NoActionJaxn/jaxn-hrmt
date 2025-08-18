export interface StrapiMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export interface StrapiResponse<T> {
  data: Array<
    T & {
      id: number;
      createdAt: string;  // usually comes as ISO string, not Date
      updatedAt: string;
      publishedAt: string;
    }
  >;
  meta?: StrapiMeta;
};

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
  slug: string;
  tags?: Tag[];
  thumbnail?: {
    url: string;
    alternativeText?: string;
  };
  content?: string;
}
