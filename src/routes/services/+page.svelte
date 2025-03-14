<script>
    import Header from '$lib/components/Header.svelte';
    import Nav from '$lib/components/Nav.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import ServiceCategory from '$lib/components/ServiceCategory.svelte';
    import ProcessStep from '$lib/components/ProcessStep.svelte';

    const services = [
        {
            image: "/asset/5794866.jpg",
            title: "App Development",
            description: "We create powerful, intuitive mobile applications that engage users and deliver exceptional experiences across platforms.",
            technologies: ["Flutter", "Kotlin"]
        },
        {
            image: "/asset/4380747.jpg",
            title: "Backend Development",
            description: "Our backend solutions provide the robust foundation needed for scalable, high-performance applications with secure data management.",
            technologies: ["Django", "FastAPI", "Actix Web", "ASP.NET"]
        },
        {
            image: "/asset/360_F_531710260_ByieqNe7Ut6QBHgIR7xgdsxH7gICrHr1.jpg",
            title: "Frontend Development",
            description: "We craft intuitive, responsive user interfaces that provide seamless experiences across devices while maintaining modern design principles.",
            technologies: ["Svelte", "React", "Next JS"]
        },
        {
            image: "/asset/7063891.jpg",
            title: "API Development",
            description: "We build secure, efficient, and well-documented APIs that enable seamless integration between different systems and services.",
            technologies: ["REST API", "Postman", "Cookie-based Auth", "Token-based Auth"]
        },
        {
            image: "/asset/4421964.jpg",
            title: "Desktop Applications",
            description: "We develop powerful desktop applications for various operating systems, providing native-like performance with modern interfaces.",
            technologies: ["Windows", "Linux", "Automation Apps"]
        },
        {
            image: "/asset/7002417.jpg",
            title: "DevOps Solutions",
            description: "Our DevOps practices streamline development workflows, ensure continuous integration and delivery, and optimize infrastructure management.",
            technologies: ["MongoDB", "Prisma", "JavaScript", "TypeScript", "Express", "Nest"]
        }
    ];

    const processSteps = [
        { number: 1, title: "Consultation", description: "We understand your needs and project requirements" },
        { number: 2, title: "Planning", description: "We create a detailed roadmap for project execution" },
        { number: 3, title: "Development", description: "Our team builds your solution with best practices" },
        { number: 4, title: "Testing", description: "Rigorous quality assurance to ensure perfection" },
        { number: 5, title: "Deployment", description: "Launching your solution and providing ongoing support" }
    ];
</script>

<Header />
<Nav />

<div class="container">
    <section class="section">
        <div class="services-intro">
            <h2>Our Services</h2>
            <p>At Tetra Core, we provide comprehensive technology solutions tailored to meet your specific needs. Our expert team leverages cutting-edge technologies to deliver high-quality, scalable, and innovative solutions.</p>
        </div>

        <div class="service-categories">
            {#each services as service}
                <ServiceCategory {...service} />
            {/each}
        </div>
    </section>

    <section class="section process-steps">
        <h2>Our Development Process</h2>
        <p style="text-align: center; margin-bottom: 2rem;">We follow a structured approach to ensure the delivery of high-quality solutions that meet your specific requirements.</p>

        <div class="process-container">
            {#each processSteps as step}
                <ProcessStep {...step} />
            {/each}
        </div>
    </section>

    <section class="section">
        <div class="cta-container">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how our technology solutions can help you achieve your business goals.</p>
            <a href="/more/contactus.html" class="btn">Contact Us Today</a>
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
        text-align: center;
    }

    .services-intro {
        text-align: center;
        margin-bottom: 3rem;
    }

    .service-categories {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2rem;
    }

    .process-steps {
        margin-top: 4rem;
    }

    .process-container {
        display: flex;
        justify-content: space-between;
        position: relative;
        max-width: 900px;
        margin: 3rem auto;
    }

    .process-container::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 4px;
        background: var(--accent-color);
        transform: translateY(-50%);
        z-index: 1;
    }

    .cta-container {
        text-align: center;
        margin-top: 4rem;
        padding: 3rem;
        background: rgba(66, 135, 245, 0.1);
        border-radius: var(--border-radius);
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
        .process-container {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        .process-container::before {
            height: 100%;
            width: 4px;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media (max-width: 480px) {
        .service-categories {
            grid-template-columns: 1fr;
        }
    }
</style>