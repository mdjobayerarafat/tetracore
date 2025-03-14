<script lang="ts">
                       import Header from '$lib/components/Header.svelte';
                       import Nav from '$lib/components/Nav.svelte';
                       import Footer from '$lib/components/Footer.svelte';
                       import BlogCard from '$lib/components/BlogCard.svelte';
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

                   <main>
                       {#if featuredPost}
                           <div class="hero">
                               <div class="hero-overlay"></div>
                               <img
                                   src={featuredPost.image}
                                   alt={featuredPost.title}
                                   class="hero-image"
                                   on:error={handleImageError}
                               />
                               <div class="hero-content container">
                                   <div class="hero-text">
                                       <span class="featured-tag">{featuredPost.category}</span>
                                       <h1>{featuredPost.title}</h1>
                                       <p class="meta">{featuredPost.date} | By {featuredPost.author} | {featuredPost.readTime}</p>
                                       <a href={featuredPost.link} class="cta-button">Read Article</a>
                                   </div>
                               </div>
                           </div>
                       {/if}

                       <div class="container">
                           <section class="blog-section">
                               <div class="section-header">
                                   <h2>Latest Articles</h2>
                                   <div class="search-container">
                                       <input
                                           type="text"
                                           class="search-input"
                                           placeholder="Search articles..."
                                           bind:value={searchQuery}
                                           aria-label="Search articles"
                                       />
                                   </div>
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

                               <div class="blog-grid">
                                   {#each filteredPosts as post (post.title)}
                                       <BlogCard {...post} />
                                   {/each}
                               </div>
                           </section>
                       </div>
                   </main>

                   <Footer />

                   <style>
                       .container {
                           max-width: 1200px;
                           margin: 0 auto;
                           padding: 0 1rem;
                       }

                       .hero {
                           position: relative;
                           width: 100%;
                           height: 80vh;
                           min-height: 600px;
                           margin-bottom: 4rem;
                           overflow: hidden;
                           background-color: var(--secondary-bg);
                       }

                       .hero-image {
                           position: absolute;
                           width: 100%;
                           height: 100%;
                           object-fit: cover;
                           transform: scale(1.1);
                           filter: blur(8px);
                           opacity: 0.8;
                       }

                       .hero-overlay {
                           position: absolute;
                           top: 0;
                           left: 0;
                           width: 100%;
                           height: 100%;
                           background: linear-gradient(
                                   135deg,
                                   rgba(0, 0, 0, 0.8) 0%,
                                   rgba(0, 0, 0, 0.6) 50%,
                                   rgba(0, 0, 0, 0.4) 100%
                           );
                           backdrop-filter: blur(4px);
                       }

                       .hero-content {
                           position: relative;
                           height: 100%;
                           display: flex;
                           align-items: center;
                           z-index: 1;
                       }

                       .hero-text {
                           max-width: 800px;
                           color: white;
                           padding: 2rem;
                           border-radius: 20px;
                           background: rgba(255, 255, 255, 0.1);
                           backdrop-filter: blur(10px);
                           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                           border: 1px solid rgba(255, 255, 255, 0.1);
                       }

                       .featured-tag {
                           background: var(--accent-color);
                           color: white;
                           padding: 0.5rem 1.5rem;
                           border-radius: 25px;
                           font-size: 1rem;
                           display: inline-block;
                           margin-bottom: 1.5rem;
                           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                       }

                       h1 {
                           font-size: 3.5rem;
                           line-height: 1.2;
                           margin-bottom: 1.5rem;
                           font-weight: 700;
                           text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
                       }

                       .meta {
                           font-size: 1.1rem;
                           margin-bottom: 2rem;
                           opacity: 0.9;
                           text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
                       }

                       .cta-button {
                           display: inline-block;
                           background: var(--accent-color);
                           color: white;
                           padding: 1rem 2rem;
                           border-radius: 30px;
                           text-decoration: none;
                           font-weight: 500;
                           transition: all 0.3s ease;
                           box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                           border: 1px solid rgba(255, 255, 255, 0.1);
                       }

                       .cta-button:hover {
                           transform: translateY(-2px);
                           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
                           background: var(--accent-color);
                       }

                       @media (max-width: 768px) {
                           .hero {
                               height: 60vh;
                               min-height: 400px;
                           }

                           .hero-text {
                               padding: 1.5rem;
                           }

                           h1 {
                               font-size: 2rem;
                           }

                           .meta {
                               font-size: 1rem;
                           }
                       }

                       .section-header {
                           display: flex;
                           justify-content: space-between;
                           align-items: center;
                           margin-bottom: 2rem;
                           flex-wrap: wrap;
                           gap: 1rem;
                       }

                       h2 {
                           font-size: 2rem;
                           color: var(--text-color);
                       }

                       .search-container {
                           flex: 1;
                           max-width: 400px;
                       }

                       .search-input {
                           width: 100%;
                           padding: 0.8rem 1.2rem;
                           border: 2px solid var(--border-color);
                           border-radius: 30px;
                           background: var(--secondary-bg);
                           color: var(--text-color);
                           font-size: 1rem;
                           transition: border-color 0.3s;
                       }

                       .search-input:focus {
                           border-color: var(--accent-color);
                           outline: none;
                       }

                       .blog-filter {
                           display: flex;
                           flex-wrap: wrap;
                           gap: 0.8rem;
                           margin-bottom: 2rem;
                       }

                       .filter-btn {
                           padding: 0.6rem 1.5rem;
                           border: none;
                           background: var(--secondary-bg);
                           color: var(--text-color);
                           border-radius: 25px;
                           cursor: pointer;
                           transition: all 0.3s;
                           font-size: 0.9rem;
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
                           .hero {
                               height: 60vh;
                               min-height: 400px;
                           }

                           h1 {
                               font-size: 2rem;
                           }

                           .section-header {
                               flex-direction: column;
                               align-items: flex-start;
                           }

                           .search-container {
                               max-width: 100%;
                           }

                           .blog-grid {
                               grid-template-columns: 1fr;
                           }
                       }
                   </style>