

const body1 = document.querySelector('#body1');



const projectLabels = document.querySelectorAll('.project__header__wrapper');


projectLabels.forEach(item => {
  item.addEventListener('click', e => {
    console.log();
    e.currentTarget.classList.toggle('open');


    location.hash = e.currentTarget.dataset.scroll;


    const targetBody = document.querySelector(e.currentTarget.dataset.target);
    targetBody.classList.toggle('op-0');
    targetBody.classList.toggle('tr-y');
  });
});


