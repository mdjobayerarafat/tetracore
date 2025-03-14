<script>
    export let href = "#";
    export let text = "Button";
</script>

<a href={href} class="btn">{text}</a>

<style>
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