const hero__button = document.querySelector('.hero__button')
const modalWindow = document.querySelector('.modal-window')
const modalWindow__buttonClose = document.querySelector('.modal-window__button-close')
const formEntry = document.querySelector('.form-entry')

hero__button.addEventListener('click', () => {
    modalWindow.style.display = 'block';
})

modalWindow__buttonClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
})

document.addEventListener('click', (event) => {
    if (
        !modalWindow.contains(event.target) &&
        event.target !== hero__button
    ) {
        modalWindow.style.display = 'none';
    }
})

formEntry.addEventListener('submit', (event) => {
    event.preventDefault();

    modalWindow.style.display = 'none';
});
