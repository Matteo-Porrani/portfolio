



const worksToggler = document.querySelector('#worksToggler');
const worksSection = document.querySelector('#works');

const projects = document.querySelectorAll('.project');


const aboutToggler = document.querySelector('#aboutToggler');
const aboutSection = document.querySelector('#about');


worksToggler.addEventListener('click', e => {

  worksToggler.classList.add('active');
  aboutToggler.classList.remove('active');

  aboutSection.classList.remove('visible');



  aboutSection.classList.add('op-0');
  projects.forEach(item => item.classList.remove('op-0'));



});


aboutToggler.addEventListener('click', e => {

  aboutToggler.classList.add('active');
  worksToggler.classList.remove('active');

  aboutSection.classList.add('visible');
  aboutSection.classList.remove('op-0');

  projects.forEach(item => item.classList.add('op-0'));

});



