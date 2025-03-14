<script>
    let menuVisible = false;

    function toggleMenu() {
        menuVisible = !menuVisible;
    }
</script>

<nav>
    <div class="menu-toggle" on:click={toggleMenu}>&#9776;</div>
    <div class="menu" class:active={menuVisible}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
    </div>
</nav>

<style>
    nav {
        background: var(--secondary-bg);
        padding: 0.75rem;
        box-shadow: var(--shadow);
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .menu {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    nav a {
        color: var(--text-color);
        text-decoration: none;
        margin: 0 1rem;
        font-weight: bold;
        padding: 0.5rem;
        transition: color 0.3s, transform 0.2s;
    }

    nav a:hover {
        color: var(--accent-color);
        transform: translateY(-2px);
    }

    .menu-toggle {
        display: none;
        font-size: 1.5rem;
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .menu-toggle {
            display: flex;
            margin: 0 auto;
        }

        .menu {
            display: none;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
        }

        .menu.active {
            display: flex;
        }

        nav a {
            margin: 0.5rem 0;
        }
    }
</style>