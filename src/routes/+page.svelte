<script lang="ts">
                import Header from '$lib/components/Header.svelte';
                import Nav from '$lib/components/Nav.svelte';
                import Footer from '$lib/components/Footer.svelte';
                import BlogCard from '$lib/components/BlogCard.svelte';
                import Section from '$lib/components/Section.svelte';
                import Button from '$lib/components/Button.svelte';
                import type { PageData } from './$types';

                export let data: PageData;

                let activeFilter: string = 'all';
                let searchQuery: string = '';

                const { featuredPost, posts } = data.blogData;
                const categories = ['Technology', 'Innovation', 'AI & ML', 'IoT', 'Company News'];

                function filterPosts(category: string): void {
                    activeFilter = category;
                }

                function isActive(filter: string): string {
                    return activeFilter === filter ? 'active' : '';
                }

                function handleImageError(event: Event) {
                    const img = event.target as HTMLImageElement;
                    img.src = '/images/placeholder.jpg';
                }

                $: filteredPosts = posts.filter(post =>
                    (activeFilter === 'all' || post.category === activeFilter) &&
                    (searchQuery === '' || post.title.toLowerCase().includes(searchQuery.toLowerCase()))
                );
            </script>

            <Header />
            <Nav />

            <div class="container">
                {#if featuredPost}
                    <Section id="featured" title="Featured Article">
                        <div class="featured-blog">
                            <img
                                src={featuredPost.image}
                                alt={featuredPost.title}
                                on:error={handleImageError}
                            />
                            <div class="featured-content">
                                <span class="featured-tag">{featuredPost.category}</span>
                                <h1>{featuredPost.title}</h1>
                                <p class="meta">{featuredPost.date} | By {featuredPost.author} | {featuredPost.readTime}</p>
                                <Button href={featuredPost.link} text="Read Article" />
                            </div>
                        </div>
                    </Section>
                {/if}

                <Section id="blog" title="Latest Articles">
                    <div class="blog-controls">
                        <div class="search-container">
                            <input
                                type="text"
                                class="search-input"
                                placeholder="Search articles..."
                                bind:value={searchQuery}
                                aria-label="Search articles"
                            />
                        </div>

                        <div class="blog-filter" role="group" aria-label="Filter articles by category">
                            <button
                                class="filter-btn {isActive('all')}"
                                on:click={() => filterPosts('all')}
                            >
                                All
                            </button>
                            {#each categories as category}
                                <button
                                    class="filter-btn {isActive(category)}"
                                    on:click={() => filterPosts(category)}
                                >
                                    {category}
                                </button>
                            {/each}
                        </div>
                    </div>

                    <div class="blog-grid">
                        {#each filteredPosts as post (post.title)}
                            <BlogCard {...post} />
                        {/each}
                    </div>
                </Section>
            </div>

            <Footer />

            <style>
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem 1rem;
                }

                .featured-blog {
                    position: relative;
                    margin-bottom: 2rem;
                    border-radius: var(--border-radius);
                    overflow: hidden;
                    box-shadow: var(--shadow);
                }

                .featured-blog img {
                    width: 100%;
                    height: 500px;
                    object-fit: cover;
                }

                .featured-content {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 2rem;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
                    color: white;
                }

                .featured-tag {
                    background: var(--accent-color);
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    font-size: 0.9rem;
                    display: inline-block;
                }

                h1 {
                    margin: 1rem 0;
                    font-size: 2rem;
                    line-height: 1.3;
                }

                .meta {
                    margin-bottom: 1.5rem;
                    opacity: 0.8;
                }

                .blog-controls {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }

                .search-input {
                    width: 100%;
                    padding: 1rem;
                    border: 1px solid var(--border-color);
                    border-radius: var(--border-radius);
                    background: var(--secondary-bg);
                    color: var(--text-color);
                    font-size: 1rem;
                }

                .blog-filter {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .filter-btn {
                    padding: 0.5rem 1.5rem;
                    border: none;
                    background: var(--secondary-bg);
                    color: var(--text-color);
                    border-radius: 20px;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .filter-btn.active,
                .filter-btn:hover {
                    background: var(--accent-color);
                    color: white;
                }

                .blog-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                }

                @media (max-width: 768px) {
                    .featured-blog img {
                        height: 300px;
                    }

                    h1 {
                        font-size: 1.5rem;
                    }

                    .blog-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>