import { getCollection } from 'astro:content';

export async function GET() {
  // Get all posts, and filter out any that are marked as "draft: true"
  const posts = (await getCollection('blog')).filter(post => !post.data.draft);
  
  // Safety: Add fallback for base to prevent undefined errors during build
  const base = import.meta.env.BASE_URL || '';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;

  const searchData = posts.map(post => ({
    title: post.data.title,
    url: `${cleanBase}/blog/${post.slug}/`,
    date: post.data.date,
    excerpt: post.data.excerpt || post.data.description || '',
    categories: post.data.categories || [],
    tags: post.data.tags || [] // Add tags to the search index
  }));

  // Sort by date (newest first)
  searchData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return new Response(JSON.stringify(searchData), {
    headers: { 'Content-Type': 'application/json' },
  });
}