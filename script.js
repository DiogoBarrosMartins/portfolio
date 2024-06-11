function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
    const projectsContainer = document.querySelector('.projects-container');
    const projectItems = document.querySelectorAll('.project-item');

    const adjustProjectItemWidths = () => {
        const numberOfProjects = projectItems.length;
        projectItems.forEach(item => {
            item.style.flex = `1 1 calc(100% / ${numberOfProjects} - 1rem)`;
            item.style.maxWidth = `calc(100% / ${numberOfProjects} - 1rem)`;
        });
    };

    adjustProjectItemWidths();
    window.addEventListener('resize', adjustProjectItemWidths);
});
