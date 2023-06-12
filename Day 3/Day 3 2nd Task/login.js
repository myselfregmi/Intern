let btn1 = document.querySelector('.Login');
let btn2 = document.querySelector('.newform');
let btn3 = document.querySelector('#close');
btn1.addEventListener('click', () => {
    btn2.classList.add('active');
});
btn3.addEventListener('click', () => {
    btn2.classList.remove('active');
});