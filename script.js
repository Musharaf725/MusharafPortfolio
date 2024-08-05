document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Initial check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark');
            themeToggle.classList.remove('light-mode');
        } else {
            htmlElement.classList.remove('dark');
            themeToggle.classList.add('light-mode');
        }
    } else {
        // If no preference is set, use the default light mode
        htmlElement.classList.remove('dark');
        themeToggle.classList.add('light-mode');
    }

    // Theme toggle click event
    themeToggle.addEventListener('click', function() {
        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            themeToggle.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            htmlElement.classList.add('dark');
            themeToggle.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
