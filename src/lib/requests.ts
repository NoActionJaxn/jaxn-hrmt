import type { BlogPost, SocialNetwork, StrapiCollectionResponse } from "../types/strapi";
import fetchApi from "./strapi";

export async function fetchAllBlogPosts() {
  return await fetchApi<StrapiCollectionResponse<BlogPost>>({
    endpoint: "blog-posts",
    query: {
      "populate": "*",
    },
  });
}

export async function fetchAllSocialNetworks() {
  return await fetchApi<StrapiCollectionResponse<SocialNetwork>>({
    endpoint: "social-networks",
  });
}
