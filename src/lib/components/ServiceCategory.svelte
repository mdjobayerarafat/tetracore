<script>
    export let image;
    export let title;
    export let description;
    export let technologies;
</script>

<div class="service-category">
    <img src={image} alt={title} />
    <div class="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div class="tech-list">
            <h4>Technologies:</h4>
            <div class="tech-tags">
                {#each technologies as tech}
                    <span class="tech-tag">{tech}</span>
                {/each}
            </div>
        </div>
    </div>
</div>

<style>
    .service-category {
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius);
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
        height: 100%;
    }

    .service-category:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    .service-category img {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .service-category .content {
        padding: 1.5rem;
    }

    .service-category h3 {
        margin-bottom: 1rem;
        color: var(--accent-color);
        font-size: 1.5rem;
    }

    .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }

    .tech-tag {
        background: rgba(66, 135, 245, 0.2);
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
        font-size: 0.9rem;
        display: inline-block;
        transition: background 0.3s, transform 0.2s;
    }

    .tech-tag:hover {
        background: rgba(66, 135, 245, 0.4);
        transform: translateY(-2px);
    }
</style>