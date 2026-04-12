// @/types/blogs.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  color?: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  slug: string;
  link: string;
}