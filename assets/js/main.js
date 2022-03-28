



const worksToggler = document.querySelector('#worksToggler');
const worksSection = document.querySelector('#works');

const aboutToggler = document.querySelector('#aboutToggler');
const aboutSection = document.querySelector('#about');


worksToggler.addEventListener('click', e => {

  worksToggler.classList.add('active');
  aboutToggler.classList.remove('active');

  aboutSection.classList.remove('visible');
});


aboutToggler.addEventListener('click', e => {

  aboutToggler.classList.add('active');
  worksToggler.classList.remove('active');

  aboutSection.classList.add('visible');
});



