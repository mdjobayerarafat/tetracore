<script>
    import Header from '$lib/components/Header.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import ProjectCard from '$lib/components/ProjectCardcd.svelte';
    import ProjectDetail from '$lib/components/ProjectDetail.svelte';

    let activeFilter = 'all';

    const projects = [
        {
            id: 1,
            image: "/asset/DIG THE DATA 3.0.png",
            title: "Dig The Data 3.0",
            description: "An education exam system that enables teams to join quizzes, request hints, track scores, and manage user authentication securely.",
            category: "web",
            tags: ["Web App", "Django", "Education"]
        },
        {
            id: 2,
            image: "/api/placeholder/400/200",
            title: "AI Analytics Platform",
            description: "A comprehensive platform leveraging machine learning to analyze large datasets and provide actionable business insights.",
            category: "ai",
            tags: ["AI", "Analytics", "Business"]
        },
        {
            id: 3,
            image: "/api/placeholder/400/200",
            title: "Smart IoT Solutions",
            description: "Connected devices and sensors creating intelligent environments for homes, offices, and industrial settings.",
            category: "iot",
            tags: ["IoT", "Hardware", "Automation"]
        },
        {
            id: 4,
            image: "/api/placeholder/400/200",
            title: "E-Commerce Platform",
            description: "A scalable and customizable e-commerce solution with advanced features for inventory management and customer analytics.",
            category: "web",
            tags: ["Web App", "E-Commerce", "NodeJS"]
        },
        {
            id: 5,
            image: "/api/placeholder/400/200",
            title: "Natural Language Processor",
            description: "An advanced NLP system capable of understanding context, sentiment, and intent in multiple languages.",
            category: "ai",
            tags: ["AI", "NLP", "Python"]
        },
        {
            id: 6,
            image: "/api/placeholder/400/200",
            title: "Smart Agriculture System",
            description: "IoT-based solution for monitoring soil conditions, automating irrigation, and optimizing crop yields.",
            category: "iot",
            tags: ["IoT", "Agriculture", "Sustainability"]
        }
    ];

    const featuredProject = projects[0];

    /**
     * @param {string} category
     */
    function filterProjects(category) {
        activeFilter = category;
    }

    /**
     * @param {string} filter
     */
    function isActive(filter) {
        return activeFilter === filter ? 'active' : '';
    }

    const filteredProjects = projects.filter(project => 
        activeFilter === 'all' || project.category === activeFilter
    );
</script>

<Header />
<Nav />

<div class="container">
    <div class="page-intro">
        <div class="breadcrumbs">
            <a href="/">Home</a> &gt;
            <span class="current-page">Projects</span>
        </div>

        <h1>Our Projects</h1>
        <p>Explore our innovative solutions across various domains of technology</p>
    </div>

    <div class="filter-bar">
        <button class="filter-btn {isActive('all')}" on:click={() => filterProjects('all')}>All Projects</button>
        <button class="filter-btn {isActive('ai')}" on:click={() => filterProjects('ai')}>AI & Machine Learning</button>
        <button class="filter-btn {isActive('web')}" on:click={() => filterProjects('web')}>Web & Applications</button>
        <button class="filter-btn {isActive('iot')}" on:click={() => filterProjects('iot')}>IoT & Hardware</button>
    </div>

    <div class="projects-grid">
        {#each filteredProjects as project}
            <ProjectCard {...project} />
        {/each}
    </div>

    <div class="pagination">
        <div class="page-item active">1</div>
        <div class="page-item">2</div>
        <div class="page-item">3</div>
        <div class="page-item">→</div>
    </div>

    <ProjectDetail {...featuredProject} />
</div>

<Footer />

<style>
    :root {
        --primary-bg: #121212;
        --secondary-bg: #1e1e1e;
        --text-color: #e0e0e0;
        --accent-color: #4287f5;
        --secondary-accent: #42b5f5;
        --tertiary-accent: #f542a7;
        --shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
        --border-radius: 10px;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

    .page-intro {
        text-align: center;
        margin-bottom: 3rem;
    }

    .page-intro h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--accent-color);
    }

    .breadcrumbs {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
    }

    .breadcrumbs a {
        color: var(--text-color);
        text-decoration: none;
        margin: 0 0.5rem;
        opacity: 0.8;
    }

    .breadcrumbs a:hover {
        color: var(--accent-color);
        opacity: 1;
    }

    .current-page {
        color: var(--accent-color);
        margin: 0 0.5rem;
    }

    .filter-bar {
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .filter-btn {
        padding: 0.5rem 1rem;
        background: var(--secondary-bg);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        color: var(--text-color);
        cursor: pointer;
        transition: all 0.3s;
    }

    .filter-btn:hover, .filter-btn.active {
        background: var(--accent-color);
        color: white;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
    }

    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 3rem;
        gap: 0.5rem;
    }

    .page-item {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--secondary-bg);
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s;
    }

    .page-item:hover, .page-item.active {
        background: var(--accent-color);
    }

    @media (max-width: 768px) {
        .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 1rem;
        }
    }
</style>