


const projectLabels = document.querySelectorAll('.project__header__wrapper');
console.log(projectLabels);

projectLabels.forEach(item => {
  item.addEventListener('click', e => {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle('open');
  });
});


