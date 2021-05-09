const burger = document.querySelector('.nav__burger')
const slideMenu = document.querySelector('.slide-menu')
const slideWrap = document.querySelector('.slide-menu__wrap')
const fileName = document.querySelector('.form__file-text')
const nav = document.querySelector('.nav')
const navOverlay = document.querySelector('.nav-overlay')

let currentScroll = null

window.onload = () => {

    function setLogo() {
        const mediaQuery = window.matchMedia('(max-width: 478px)')
        if (mediaQuery.matches && !burger.classList.contains('active')) {
            logo.src = 'img/logo.svg'
            return
        } 
        if (mediaQuery.matches && burger.classList.contains('active')) {
            logo.src = 'img/slide-logo.svg'
            return
        }
    }

    burger.addEventListener('click', function(e) {
        e.preventDefault()
        if (burger.classList.contains('active')) {
            burger.classList.remove('active')
            slideMenu.classList.remove('active')
            setLogo()
            
        } else {
            burger.classList.add('active')
            slideMenu.classList.add('active')
            setLogo()
        }
    })

    file.addEventListener('change', function() {
        fileName.innerText = document.getElementById("file").files[0].name
    })

    window.addEventListener('scroll', function(){
        const offset = window.pageYOffset
        if (offset <= 60 && !slideMenu.classList.contains('active')) {
            navOverlay.classList.remove('to-up')
            nav.classList.remove('scrolled')
            nav.classList.remove('hide')
        }
        if (currentScroll > offset && offset > 60 && !slideMenu.classList.contains('active')) {
            navOverlay.classList.add('to-up')
            nav.classList.add('scrolled')
            nav.classList.remove('hide')
        }
        if (currentScroll < offset && offset > 60 && !slideMenu.classList.contains('active')) {
            navOverlay.classList.remove('to-up')
            nav.classList.remove('scrolled')
            nav.classList.add('hide')
        }
        if (slideMenu.classList.contains('active')) {
            navOverlay.classList.add('to-up')
        }
        currentScroll = offset
    })

    slideWrap.addEventListener('click', function(e) {
        if(e.target.className == 'slide-menu__link') {
            burger.classList.remove('active')
            slideMenu.classList.remove('active')
            setLogo()
        }
    })
}