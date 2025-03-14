<script>
    import Header from '$lib/components/Header.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import TeamMember from '$lib/components/TeamMember.svelte';
    import StatItem from '../../lib/components/StatItem.svelte';
    import ValueItem from '$lib/components/ValueItem.svelte';

    const teamMembers = [
        {
            image: "/asset/me.jpg",
            name: "MD HABIBULLAH MAHMUD",
            position: "Project Management / Frontend Developer",
            description: "I am currently pursuing a Bachelor of Science degree in Computer Science and Engineering at the National Institute of Textile Engineering and Research. While I previously gained experience in digital marketing as a six-month intern at Arrura Innovative, my current focus is on web development, robotics, and cybersecurity. With a strong technical background, I am passionate about building innovative solutions, optimizing digital experiences, and enhancing security in the ever-evolving tech landscape.",
            socialLinks: [
                { label: "LinkedIn", icon: "in", href: "#" },
                { label: "Twitter", icon: "𝕏", href: "#" },
                { label: "GitHub", icon: "G", href: "#" }
            ]
        },
        {
            image: "/asset/444782278_1514256446110134_3717647860780575384_n.jpg",
            name: "MD JOBAYER ARAFAT",
            position: "DevOps Engineer / Backend Developer",
            description: "Hello! I'm Jobayer Arafat, an ambitious and results-driven App Developer with a passion for Cybersecurity and expertise in Flutter, Python programming, and Django. As an App Developer, I thrive on turning visionary ideas into jaw-dropping, user-friendly applications that leave a lasting impact. With Django as my ace up the sleeve, I'm able to architect robust and scalable web applications that handle complexity.",
            socialLinks: [
                { label: "LinkedIn", icon: "in", href: "https://www.linkedin.com/in/md-jobayer-arafat-a14b61284/" },
                { label: "Twitter", icon: "𝕏", href: "#" },
                { label: "GitHub", icon: "G", href: "#" }
            ]
        },
        {
            image: "/asset/WhatsApp Image 2025-03-12 at 23.45.12_07f7f1df.jpg",
            name: "Niaz",
            position: "Backend Developer",
            description: "I'm Mushfiqur Rahman, a passionate software developer with 9+ Backend projects built and uploaded to GitHub with comments explaining every line of code. My journey is driven by my curiosity about tech, and it has led me to explore the exciting realms of software development, AI, and cloud functionalities, where I find immense satisfaction in working.",
            socialLinks: [
                { label: "LinkedIn", icon: "in", href: "#" },
                { label: "Twitter", icon: "𝕏", href: "#" },
                { label: "GitHub", icon: "G", href: "#" }
            ]
        }
    ];

    const stats = [
        { number: "5+", label: "Projects Completed" },
        { number: "3", label: "Team Members" },
        { number: "1", label: "On-going Project" },
        { number: "100%", label: "Client Satisfaction" }
    ];

    const values = [
        { title: "Innovation", description: "We constantly push boundaries and explore new ideas to create solutions that are ahead of their time." },
        { title: "Excellence", description: "We are committed to delivering high-quality work that exceeds expectations and sets new standards in the industry." },
        { title: "Collaboration", description: "We believe in the power of teamwork and foster an environment where diverse perspectives come together to create something greater." },
        { title: "Integrity", description: "We uphold the highest ethical standards in all our interactions and maintain transparency in our operations." }
    ];
</script>

<Header />
<Nav />

<div class="container">
    <section class="section">
        <h2>About Tetra Core</h2>
        <p>Founded in 2022, Tetra Core is a forward-thinking technology company dedicated to developing innovative solutions that address real-world challenges. Our team of passionate professionals combines expertise in various domains to create cutting-edge applications, systems, and platforms that make a difference.</p>
        
        <div class="stats-grid">
            {#each stats as stat}
                <StatItem {...stat} />
            {/each}
        </div>
        
        <div class="team-intro">
            <h2>Our Core Values</h2>
            <p>At Tetra Core, we are guided by a set of principles that define our approach to innovation and collaboration.</p>
        </div>
        
        <div class="values-grid">
            {#each values as value}
                <ValueItem {...value} />
            {/each}
        </div>
    </section>
    
    <section class="section">
        <div class="team-intro">
            <h2>Meet Our Team</h2>
            <p>Our success is driven by our talented team members who bring expertise, creativity, and dedication to every project.</p>
        </div>
        
        <div class="team-grid">
            {#each teamMembers as member}
                <TeamMember {...member} />
            {/each}
        </div>
        
        <div style="text-align: center; margin-top: 3rem;">
            <p>Interested in joining our team?</p>
            <a href="/more/contactus.html" class="btn">View Career Opportunities</a>
        </div>
    </section>
</div>

<Footer />

<style>
    :root {
        --primary-bg: #121212;
        --secondary-bg: #1e1e1e;
        --text-color: #e0e0e0;
        --accent-color: #4287f5;
        --shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
        --border-radius: 10px;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(body) {
        font-family: 'Segoe UI', Arial, sans-serif;
        background: var(--primary-bg);
        color: var(--text-color);
        line-height: 1.6;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }

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

    .team-intro {
        text-align: center;
        margin-bottom: 3rem;
    }

    .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        margin: 3rem 0;
    }

    .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
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

    @media (max-width: 768px) {
        .team-grid, .stats-grid, .values-grid {
            grid-template-columns: 1fr;
        }
    }
</style>