// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
export interface BlogPost {
    image: string;
    title: string;
    date: string;
    author: string;
    category: string;
    excerpt: string;
    link: string;
}

export interface FeaturedPost extends BlogPost {
    readTime: string;
}

export interface BlogData {
    featuredPost: FeaturedPost;
    posts: BlogPost[];
}