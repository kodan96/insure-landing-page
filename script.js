$(document).ready(() => {
    $('.open').on('click', (e) => {
        e.preventDefault();
        $('.hidden').slideToggle();
    })

    $('.close').on('click', (e) => {
        e.preventDefault();
        $('.hidden').slideToggle();
    });
})