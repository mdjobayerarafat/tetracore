<script>
    export let image;
    export let title;
    export let description;
    export let link = "#";
</script>

<div class="project-card">
    <img src={image} alt={title} />
    <div class="content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} class="btn">Learn More</a>
    </div>
</div>

<style>
    .project-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius);
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
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
    }

    .btn:hover {
        background: #5a9aff;
        transform: translateY(-2px);
    }
</style>