import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { ui } from '../../../i18n/ui';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: ui.es.blog.title,
		description: ui.es.blog.description,
		site: new URL('/es/blog/', context.site),
		items: posts.map((post) => ({
			...post.data,
			link: `/es/blog/${post.id}/`,
		})),
	});
}
