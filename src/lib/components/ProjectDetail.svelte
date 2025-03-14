<script>
    export let image;
    export let title;
    export let description;
    export let tags;
</script>

<div class="project-detail">
    <div class="project-header">
        <div class="project-image">
            <img src={image} alt={title} />
        </div>
        <div class="project-info">
            <h2>{title}</h2>
            <p class="project-description">{description}</p>
            <div class="project-meta">
                <div class="meta-item">
                    <span class="meta-label">Category</span>
                    <span class="meta-value">{tags[0]}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Client</span>
                    <span class="meta-value">Educational Institution</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Completion</span>
                    <span class="meta-value">February 2025</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Status</span>
                    <span class="meta-value">Active</span>
                </div>
            </div>
            <a href="https://github.com/tetracore/digthedata" class="btn">View Source Code</a>
        </div>
    </div>

    <div class="project-features">
        <h3>Key Features</h3>
        <ul class="features-list">
            <li>Team-based registration and participation system</li>
            <li>Dynamic quiz creation with various question types</li>
            <li>Secure authentication and role-based access control</li>
            <li>Real-time scoring and leaderboard updates</li>
            <li>Hint request system with configurable penalties</li>
            <li>Comprehensive analytics dashboard for administrators</li>
            <li>Mobile-responsive design for accessibility</li>
        </ul>
    </div>

    <div class="project-gallery">
        <h3>Project Gallery</h3>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="/api/placeholder/400/300" alt="Dashboard" />
            </div>
            <div class="gallery-item">
                <img src="/api/placeholder/400/300" alt="Quiz Interface" />
            </div>
            <div class="gallery-item">
                <img src="/api/placeholder/400/300" alt="Leaderboard" />
            </div>
            <div class="gallery-item">
                <img src="/api/placeholder/400/300" alt="Admin Panel" />
            </div>
        </div>
    </div>

    <div class="project-technologies">
        <h3>Technologies Used</h3>
        <div class="tech-container">
            <div class="tech-item">Django</div>
            <div class="tech-item">Python</div>
            <div class="tech-item">PostgreSQL</div>
            <div class="tech-item">HTML/CSS</div>
            <div class="tech-item">JavaScript</div>
            <div class="tech-item">Bootstrap</div>
            <div class="tech-item">Docker</div>
        </div>
    </div>
</div>

<style>
    .project-detail {
        margin-top: 3rem;
        background: var(--secondary-bg);
        border-radius: var(--border-radius);
        padding: 2rem;
        box-shadow: var(--shadow);
    }

    .project-header {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .project-image {
        flex: 1;
        min-width: 300px;
    }

    .project-image img {
        width: 100%;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
    }

    .project-info {
        flex: 2;
        min-width: 300px;
    }

    .project-info h2 {
        color: var(--accent-color);
        margin-bottom: 1rem;
    }

    .project-meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin: 1.5rem 0;
        background: rgba(0, 0, 0, 0.2);
        padding: 1rem;
        border-radius: var(--border-radius);
    }

    .meta-item {
        display: flex;
        flex-direction: column;
    }

    .meta-label {
        font-size: 0.9rem;
        opacity: 0.7;
    }

    .meta-value {
        font-weight: bold;
    }

    .project-description {
        margin-bottom: 2rem;
    }

    .features-list {
        list-style-type: none;
        margin-left: 1rem;
    }

    .features-list li {
        margin-bottom: 0.75rem;
        position: relative;
        padding-left: 1.5rem;
    }

    .features-list li:before {
        content: "→";
        position: absolute;
        left: 0;
        color: var(--accent-color);
    }

    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        margin-top: 1rem;
    }

    .gallery-item {
        cursor: pointer;
        overflow: hidden;
        border-radius: var(--border-radius);
        height: 150px;
    }

    .gallery-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }

    .gallery-item:hover img {
        transform: scale(1.1);
    }

    .tech-container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 1rem;
    }

    .tech-item {
        background: rgba(255, 255, 255, 0.1);
        padding: 0.75rem 1rem;
        border-radius: var(--border-radius);
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>