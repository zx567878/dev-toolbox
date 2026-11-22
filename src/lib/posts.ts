import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

/**
 * 取已发布的文章，按日期从新到旧。
 *
 * 全站只在这里做一次筛选与排序：首页、文章列表、RSS、文章页路由都调用它，
 * 避免各处重复写 filter/sort，也保证排序规则只有一处可改。
 */
export async function publishedPosts(): Promise<Post[]> {
	const published = await getCollection('posts', ({ data }) => !data.draft);
	return published.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
