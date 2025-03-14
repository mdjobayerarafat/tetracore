<script>
    export let number;
    export let title;
    export let description;
</script>

<div class="process-step">
    <div class="step-number">{number}</div>
    <h4>{title}</h4>
    <p>{description}</p>
</div>

<style>
    .process-step {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        z-index: 2;
        width: 150px;
        text-align: center;
    }

    .step-number {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--accent-color);
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: 1rem;
    }
</style>