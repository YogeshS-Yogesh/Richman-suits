// Simple JavaScript for any future interactivity, like a mobile menu toggle,
// or a simple image carousel.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website has loaded successfully.');

    // Example: A simple alert for the buttons
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // e.preventDefault(); // Uncomment to stop the page from navigating
            // alert('This feature is coming soon!');
        });
    });

    // In a real application, you'd add:
    // 1. Mobile navigation toggle logic.
    // 2. Dynamic loading of products from an API.
    // 3. Image carousel logic.
});
