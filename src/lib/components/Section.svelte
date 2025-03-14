<script>
    export let title;
    export let id;
</script>

<section class="section" {id}>
    <h2>{title}</h2>
    <slot></slot>
</section>

<style>
    .section {
        margin: 2rem 0;
        padding: 2rem;
        background: var(--secondary-bg);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
    }

    .section h2 {
        margin-bottom: 1rem;
        color: var(--accent-color);
    }
</style>