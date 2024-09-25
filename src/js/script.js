// const menu = document.querySelector('.menu');
// const NavMenu = document.querySelector('.nav-menu');

// menu.addEventListener('click', function() {
//     menu.classList.toggle('ativo');
//     NavMenu.classList.toggle('ativo');
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Selecionando os elementos .menu e .nav-menu
//     const menuIcon = document.querySelector('.menu');
//     const navMenu = document.querySelector('.nav-menu');

//     // Verifique se os elementos estão sendo encontrados
//     console.log(menuIcon); // Certifique-se de que o elemento .menu seja encontrado
//     console.log(navMenu);  // Certifique-se de que o elemento .nav-menu seja encontrado

//     // Se ambos forem encontrados, adicione o evento de clique
//     if (menuIcon && navMenu) {
//         menuIcon.addEventListener('click', function() {
//             console.log('Menu clicado');
//             menuIcon.classList.toggle('ativo');
//             navMenu.classList.toggle('ativo');
//         });
//     } else {
//         console.error('Elemento menuIcon ou navMenu não encontrado no DOM.');
//     }
// });

const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});