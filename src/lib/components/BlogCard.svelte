<script lang="ts">
    import type { BlogPost } from '$lib/types/blog';

    export let image: string;
    export let title: string;
    export let date: string;
    export let author: string;
    export let category: string;
    export let excerpt: string;
    export let link: string;
</script>

<div class="blog-card">
    <div class="image-container">
        <img src={image} alt={title} />
        <div class="image-overlay"></div>
    </div>
    <div class="content">
        <span class="category">{category}</span>
        <h3>{title}</h3>
        <p class="meta">{date} | By {author}</p>
        <p class="excerpt">{excerpt}</p>
        <a href={link} class="read-more">Read Article →</a>
    </div>
</div>

<style>
    .blog-card {
        position: relative;
        background: transparent; /* Fully transparent */
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }

    .image-container {
        position: relative;
        width: 100%;
        height: 220px;
        overflow: hidden;
    }

    .image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.2),
                rgba(0, 0, 0, 0.4)
        );
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .blog-card:hover .image-container img {
        transform: scale(1.05);
    }

    .blog-card:hover .image-overlay {
        opacity: 1;
    }

    .content {
        padding: 1.5rem;
        background: transparent; /* Fully transparent */
        position: relative;
    }

    .category {
        background: var(--accent-color);
        color: white;
        padding: 0.4rem 1rem;
        border-radius: 20px;
        font-size: 0.85rem;
        display: inline-block;
        margin-bottom: 1rem;
        font-weight: 500;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }

    h3 {
        margin: 0.5rem 0;
        color: var(--text-color);
        font-size: 1.4rem;
        line-height: 1.4;
        font-weight: 600;
    }

    .meta {
        color: var(--text-muted);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }

    .excerpt {
        color: var(--text-color);
        line-height: 1.6;
        margin-bottom: 1.5rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        opacity: 0.8;
    }

    .read-more {
        color: var(--accent-color);
        text-decoration: none;
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        transition: all 0.3s ease;
        padding: 0.5rem 0;
        border-bottom: 2px solid transparent;
    }

    .read-more:hover {
        border-bottom-color: var(--accent-color);
        transform: translateX(5px);
    }

    @media (max-width: 768px) {
        .image-container {
            height: 200px;
        }

        h3 {
            font-size: 1.2rem;
        }

        .content {
            padding: 1.2rem;
        }
    }
</style>