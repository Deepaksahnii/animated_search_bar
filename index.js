let magnifier = document.querySelector('.magnifier');
let searchBarContainer = document.querySelector('.searchBarContainer');

magnifier.addEventListener('click', () => {
    searchBarContainer.classList.toggle('active');
})