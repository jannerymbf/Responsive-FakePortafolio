// const projects = document.querySelectorAll('.project');

// projects.forEach(project => {

//   const signs = Array.from(project.children).filter(e => e.localName == 'p').map(e => e.children).forEach(sign => console.log(sign.style.visibily == 'hidden'))

//   project.addEventListener('mouseover', () => {
    
//   })
// })

const btnProject =document.getElementById('button-show-projects');
const btnIcon = document.getElementById('btn--icon');

btnProject.addEventListener('mouseover', () => {
  btnIcon.style.transform = 'translate(4px)';
  btnIcon.style.transition = 'transform 0.3s ease-out';
})

btnProject.addEventListener('mouseout', () => {
  btnIcon.style.transform = 'translate(-4px)'
})