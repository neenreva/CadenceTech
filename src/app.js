const hamburgerBtn = document.querySelector('.hamburger')
const hamburgerBtnImg = document.querySelector('[data-hambtnimg]')



hamburgerBtn.addEventListener('click', () => {
    if(hamburgerBtnImg.src.includes('Hamburger.svg')) {
        hamburgerBtnImg.src = '../assets/Close.svg' 
        hamburgerBtn.parentElement.classList.add('nav__mobile-links-active')
    } else {
        hamburgerBtnImg.src ='../assets/Hamburger.svg';
        hamburgerBtn.parentElement.classList.remove('nav__mobile-links-active')
    }
})