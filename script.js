/* --- Global Styles & Reset --- */
:root {
    --primary-color: #000000;
    --secondary-color: #1a1a1a;
    --accent-color: #c08050; /* A subtle, refined accent color */
    --light-bg: #f4f4f4;
    --text-color: #333;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    background-color: #fff;
}

a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s;
}

a:hover {
    color: var(--accent-color);
}

/* --- Header & Navigation --- */
.main-header {
    background-color: #fff;
    border-bottom: 1px solid var(--light-bg);
    padding: 1rem 0;
}

.top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 2px;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
}

.nav-links a {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 500;
}

.nav-icons a {
    margin-left: 20px;
    font-size: 0.9rem;
}

/* --- Buttons --- */
.btn-primary, .btn-secondary {
    display: inline-block;
    padding: 12px 30px;
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    font-size: 0.85rem;
}

.btn-primary {
    background-color: var(--primary-color);
    color: #fff;
    border: 1px solid var(--primary-color);
}

.btn-primary:hover {
    background-color: var(--secondary-color);
}

.btn-secondary {
    background-color: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
    background-color: var(--primary-color);
    color: #fff;
}

/* --- Hero Section --- */
.hero-section {
    height: 70vh;
    background: url('placeholder-hero.jpg') center center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align content to the left */
    color: #fff;
    text-shadow: 0 2px 5px rgba(0,0,0,0.5);
    padding-left: 10%;
    margin-bottom: 50px;
}

.hero-content h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    margin-bottom: 15px;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

/* --- Product Grid Section --- */
.product-grid-section {
    max-width: 1200px;
    margin: 0 auto 80px;
    padding: 0 20px;
    text-align: center;
}

.product-grid-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    margin-bottom: 40px;
}

.product-grid {
    display: flex;
    gap: 30px;
    justify-content: space-between;
}

.product-card {
    flex: 1;
    text-align: left;
    max-width: 380px; /* Max width for large screens */
}

.product-image {
    width: 100%;
    height: 450px;
    background-color: var(--light-bg);
    background-size: cover;
    background-position: center;
    margin-bottom: 15px;
}

.product-card h3 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 5px;
}

.product-card .price {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--accent-color);
    margin-bottom: 15px;
}

/* --- CTA Banner --- */
.cta-banner {
    background-color: var(--light-bg);
    padding: 60px 20px;
    text-align: center;
    margin-bottom: 50px;
}

.cta-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.2rem;
    margin-bottom: 10px;
    color: var(--primary-color);
}

.cta-content p {
    font-size: 1.1rem;
    margin-bottom: 30px;
}

/* --- Footer --- */
footer {
    background-color: var(--primary-color);
    color: var(--light-bg);
    padding: 40px 20px 20px;
}

.footer-links {
    max-width: 1200px;
    margin: 0 auto 30px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 30px;
}

.footer-col {
    list-style: none;
}

.footer-col li {
    margin-bottom: 10px;
    font-size: 1rem;
}

.footer-col a {
    color: var(--light-bg);
    font-weight: 300;
}

.footer-col a:hover {
    color: var(--accent-color);
}

.newsletter input {
    padding: 10px;
    margin-right: 10px;
    border: none;
    width: 200px;
}

.newsletter button {
    padding: 10px 20px;
    background-color: var(--accent-color);
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.newsletter button:hover {
    background-color: #a06030;
}

.copyright {
    text-align: center;
    margin-top: 20px;
    font-size: 0.8rem;
    border-top: 1px solid #333;
    padding-top: 15px;
}

/* --- Media Queries (Responsiveness) --- */
@media (max-width: 900px) {
    .nav-links {
        display: none; /* Hide main links on smaller screens */
    }

    .top-nav {
        justify-content: space-around;
    }

    .product-grid {
        flex-direction: column;
        align-items: center;
    }

    .product-card {
        max-width: 100%;
    }

    .product-image {
        height: 300px;
    }
}

@media (max-width: 600px) {
    .hero-content h1 {
        font-size: 2.5rem;
    }
      }
