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