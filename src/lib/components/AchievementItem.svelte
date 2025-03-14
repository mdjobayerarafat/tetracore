<script>
    export let title;
    export let description;
</script>

<div class="achievement-item">
    <h3>{title}</h3>
    <p>{description}</p>
</div>

<style>
    .achievement-item {
        padding: 1rem;
        margin: 1rem 0;
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius);
        transition: transform 0.3s;
    }

    .achievement-item:hover {
        transform: translateX(10px);
    }
</style>