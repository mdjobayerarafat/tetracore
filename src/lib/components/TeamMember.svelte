<script>
    export let image;
    export let name;
    export let position;
    export let description;
    export let socialLinks;
</script>

<div class="team-member">
    <img src={image} alt={name} />
    <div class="content">
        <h3>{name}</h3>
        <p class="position">{position}</p>
        <p>{description}</p>
        <div class="social-links">
            {#each socialLinks as link}
                <a href={link.href} aria-label={link.label}><i>{link.icon}</i></a>
            {/each}
        </div>
    </div>
</div>

<style>
    .team-member {
        background: rgba(255, 255, 255, 0.05);
        border-radius: var(--border-radius);
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
    }

    .team-member:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }

    .team-member img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }

    .team-member .content {
        padding: 1.5rem;
    }

    .team-member h3 {
        margin-bottom: 0.5rem;
        color: var(--accent-color);
    }

    .team-member .position {
        font-weight: bold;
        opacity: 0.8;
        margin-bottom: 1rem;
    }

    .social-links {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .social-links a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        color: var(--text-color);
        text-decoration: none;
        transition: background 0.3s, transform 0.2s;
    }

    .social-links a:hover {
        background: var(--accent-color);
        transform: translateY(-2px);
    }
</style>