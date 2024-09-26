// const mobileBtn = document.getElementById('mobile-btn');
// const navMenu = document.getElementById('id_list');

// mobileBtn.addEventListener('click', () => {
//   navMenu.classList.toggle('ativo'); /* Ativa a classe 'ativo' no menu */
//   mobileBtn.classList.toggle('ativo'); /* Alterna o estilo do botão hambúrguer */
// });

const menuToggle = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});