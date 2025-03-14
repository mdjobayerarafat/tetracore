import type { PageServerLoad } from './$types';
import blogData from '$lib/data/blog.json';

export const load: PageServerLoad = async () => {
    return {
        blogData: {
            featuredPost: blogData.featuredPost,
            posts: blogData.posts.map(post => ({
                ...post,
                image: post.image.startsWith('/api') ? '/images/placeholder.jpg' : post.image
            }))
        }
    };
};