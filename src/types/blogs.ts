// @/types/blogs.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  
  coverImage: string;
  author: string;
  publishedAt: string;
  slug: string;
  link: string;
}