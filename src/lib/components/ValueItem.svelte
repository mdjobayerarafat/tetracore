<script>
    export let title;
    export let description;
</script>

<div class="value-item">
    <h3>{title}</h3>
    <p>{description}</p>
</div>

<style>
    .value-item {
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius);
        transition: transform 0.3s;
    }

    .value-item:hover {
        transform: translateY(-5px);
    }

    .value-item h3 {
        color: var(--accent-color);
        margin-bottom: 0.8rem;
    }
</style>