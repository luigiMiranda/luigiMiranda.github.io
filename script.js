const about_btn = document.getElementById('about');
const experiences_btn = document.getElementById('experiences');
const projects_btn = document.getElementById('projects');
const about_content = document.getElementById('about-content')
const experiences_content = document.getElementById('experiences-content')
const project_content = document.getElementById('projects-content')

about_btn.addEventListener('click', () => {
    about_btn.classList.add('focus')
    experiences_btn.classList.remove('focus')
    projects_btn.classList.remove('focus')

    about_content.classList.remove('hide')
    experiences_content.classList.add('hide')
    project_content.classList.add('hide')
})
experiences_btn.addEventListener('click', () => {
    experiences_btn.classList.add('focus')
    about_btn.classList.remove('focus')
    projects_btn.classList.remove('focus')

    experiences_content.classList.remove('hide')
    about_content.classList.add('hide')
    project_content.classList.add('hide')
})
projects_btn.addEventListener('click', () => {
    projects_btn.classList.add('focus')
    about_btn.classList.remove('focus')
    experiences_btn.classList.remove('focus')

    project_content.classList.remove('hide')
    about_content.classList.add('hide')
    experiences_content.classList.add('hide')
})



/* DARK MODE FUNCTION */
const dark_mode = document.querySelectorAll('.dark-light-mode')
const body = document.body
const nav_icon = document.querySelectorAll('.nav-icon')
const dark_btn = document.getElementById('dark')
const light_btn = document.getElementById('light')
dark_mode.forEach(element => {
    element.addEventListener('click', () => {
        dark_btn.style.display = dark_btn.style.display === 'none' ? 'block' : 'none'
        light_btn.style.display = light_btn.style.display === 'none' ? 'block' : 'none'
        body.classList.toggle('dark-mode')
        nav_icon.forEach(el => {
            el.classList.toggle('dark')
        });
    })
});


