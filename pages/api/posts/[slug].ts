import { getPostAndMorePosts } from "../../../lib/api";

/**
 * Get post by slug
 */
export default async function post(req, res) {
	const { slug } = req.query;
	const { post, posts } = await getPostAndMorePosts(slug, false);
	res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate");
	res.json({ slug, post, posts });
}
