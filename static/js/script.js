const toggleSwitch = document.getElementById('theme-toggle');
        const body = document.body;

        toggleSwitch.addEventListener('change', () => {
            if (toggleSwitch.checked) {
                body.classList.remove('dark-theme');
                body.classList.add('light-theme');
            } else {
                body.classList.remove('light-theme');
                body.classList.add('dark-theme');
            }
        });
        // Initialize the default mode
        if (!localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'light-theme');
        }

const navBtn = document.querySelector('#menu-icon');
            const mainMenu = document.querySelector('.main-menu');
            const navBar = document.querySelector('.navbar');

            navBtn.addEventListener('click',()=>{
            navBtn.classList.toggle('active');
            navBar.classList.toggle('active');
            mainMenu.classList.toggle('active');
        })