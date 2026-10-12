const aboutBtn = document.getElementById('about-btn');
const projectsBtn = document.getElementById('projects-btn');
const contactBtn = document.getElementById('contact-btn');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const projectLinks = document.querySelectorAll('.project-link');   
const projectDescription = document.getElementById('project-description');

aboutBtn.addEventListener('click', () => {
    about.style.display = 'flex';
    projects.style.display = 'none';
    contact.style.display = 'none';
});

projectsBtn.addEventListener('click', () => {
    projects.style.display = 'flex';
    about.style.display = 'none';
    contact.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
    contact.style.display = 'flex';
    about.style.display = 'none';
    projects.style.display = 'none';
});

projectLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {  
        projectDescription.style.display = 'block';
        if (link.id === 'bookmark-manager-link') {
            projectDescription.innerText = `The Bookmark Manager project showcases my ability to create a stylized, functional bookmark manager using local storage.`;
        } else if (link.id === 'complaint-form-link') {
            projectDescription.innerText =  `The Complaint Form project showcases my ability to create a thorough, interactive customer complaint form using regular expresssions.`
        } else if (link.id === 'drum-machine-link') {
            projectDescription.innerText = `The Drum Machine project showcases my ability to create a responsive and entertaining music app using keyboard event listeners and CSS styling.`;
        }
    }) 
})