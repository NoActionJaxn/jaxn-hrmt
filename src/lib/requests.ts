import type { PaginatedRequest } from "../types/requests";
import type { BlogPost, SocialNetwork, StrapiCollectionResponse, Tag } from "../types/strapi";
import fetchApi from "./strapi";

export async function fetchBlogPostsPaginated({ page = 1, pageSize = 10 }: PaginatedRequest) {
  return await fetchApi<StrapiCollectionResponse<BlogPost>>({
    endpoint: "blog-posts",
    query: {
      populate: "*",
      sort: "publishedAt:desc",
      "pagination[page]": String(page),
      "pagination[pageSize]": String(pageSize),
    },
  });
}

export async function fetchSocialNetworksPaginated({ page = 1, pageSize = 10 }: PaginatedRequest) {
  return await fetchApi<StrapiCollectionResponse<SocialNetwork>>({
    endpoint: "social-networks",
    query: {
      "pagination[page]": String(page),
      "pagination[pageSize]": String(pageSize),
    },
  });
}

export async function fetchTagsPaginated({ page = 1, pageSize = 10 }: PaginatedRequest) {
  return await fetchApi<StrapiCollectionResponse<Tag>>({
    endpoint: "tags",
    query: {
      "pagination[page]": String(page),
      "pagination[pageSize]": String(pageSize),
    },
  });
}

export async function fetchAllTagsPaginated() {
  const pageSize = 100;
  let page = 1;
  let allTags: Tag[] = [];
  let total = 0;

  do {
    const response = await fetchApi<StrapiCollectionResponse<Tag>>({
      endpoint: "tags",
      query: {
        "pagination[page]": String(page),
        "pagination[pageSize]": String(pageSize),
      },
    });

    allTags = allTags.concat(response.data.map(tag => tag));
    total = response.meta?.pagination?.total ?? 0;
    page++;
  } while (allTags.length < total);

  return allTags;
}
