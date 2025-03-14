<script>
    export let image;
    export let title;
    export let description;
    export let tags;
    export let category;
</script>

<div class="project-card" data-category={category}>
    <img src={image} alt={title} />
    <div class="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="tag-container">
            {#each tags as tag}
                <span class="tag {category}">{tag}</span>
            {/each}
        </div>
        <a href="project-detail.html" class="btn">View Project</a>
    </div>
</div>

<style>
    .project-card {
        background: var(--secondary-bg);
        border-radius: var(--border-radius);
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
        border: 1px solid rgba(255, 255, 255, 0.05);
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .project-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    .project-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .project-card .content {
        padding: 1.5rem;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }

    .project-card h3 {
        margin-bottom: 0.5rem;
        color: var(--accent-color);
    }

    .tag-container {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }

    .tag {
        padding: 0.25rem 0.75rem;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
        background: rgba(255, 255, 255, 0.1);
    }

    .tag.ai {
        background: rgba(66, 135, 245, 0.2);
        color: var(--accent-color);
    }

    .tag.web {
        background: rgba(66, 181, 245, 0.2);
        color: var(--secondary-accent);
    }

    .tag.iot {
        background: rgba(245, 66, 167, 0.2);
        color: var(--tertiary-accent);
    }

    .btn {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.75rem 1.5rem;
        background: var(--accent-color);
        color: white;
        text-decoration: none;
        border-radius: 5px;
        transition: background 0.3s, transform 0.2s;
        border: none;
        cursor: pointer;
        align-self: flex-start;
        margin-top: auto;
    }

    .btn:hover {
        background: #5a9aff;
        transform: translateY(-2px);
    }
</style>