<script>
    export let number;
    export let label;
</script>

<div class="stat-item">
    <div class="stat-number">{number}</div>
    <p>{label}</p>
</div>

<style>
    .stat-item {
        text-align: center;
        padding: 1.5rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius);
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--accent-color);
    }
</style>