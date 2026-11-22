import rss from '@astrojs/rss';
import { SITE_DESCRIPTION_LONG, SITE_TITLE } from '../consts';
import { publishedPosts } from '../lib/posts';

export async function GET({ site }) {
	const posts = await publishedPosts();

	const items = posts.map(({ id, data }) => ({
		title: data.title,
		description: data.description ?? '',
		pubDate: data.date,
		link: `/posts/${id}.html`,
	}));

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION_LONG,
		site,
		customData: '<language>zh-CN</language>',
		items,
	});
}
