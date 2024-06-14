function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    const projectItems = document.querySelectorAll('.project-item');

    const adjustProjectItemWidths = () => {
        const containerWidth = projectsContainer.offsetWidth;
        const numberOfProjects = projectItems.length;
        const itemWidth = containerWidth / numberOfProjects - 20; // Adjust the 20 for margin/padding if necessary
        projectItems.forEach(item => {
            item.style.flex = `0 0 ${itemWidth}px`;
            item.style.maxWidth = `${itemWidth}px`;
        });
    };

    adjustProjectItemWidths();
    window.addEventListener('resize', adjustProjectItemWidths);
});
