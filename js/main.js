const nav = document.querySelector('.nav')
const burger = document.querySelector('.nav__burger')
const navOverlay = document.querySelector('.nav-overlay')
const slideMenu = document.querySelector('.slide-menu')
const slideWrap = document.querySelector('.slide-menu__wrap')
const html = document.querySelector('html')
const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('button[data-modal]')
const forms = document.querySelectorAll('form')
let currentScroll = null


window.onload = () => {
    function setLogo() {
        const mediaQuery = window.matchMedia('(max-width: 478px)')
        if (mediaQuery.matches && !burger.classList.contains('active')) {
            logo.src = 'img/logo.svg'
            html.classList.remove('lock-position')
        } 
        if (mediaQuery.matches && burger.classList.contains('active')) {
            logo.src = 'img/slide-logo.svg'
            html.classList.add('lock-position')
        }
    }
    
    forms.forEach(form => {
        form.addEventListener('change', (e) => {
            if (e.target.name == 'file') {
               document.querySelector(`div[data-file = ${e.target.id}]`).innerText = e.target.files[0].name
            }
        })
    })

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.add('show')
        })
    })

    modal.addEventListener('click', (e) => {
        if (e.target.className == 'modal__times' || e.target.classList.contains('modal')) {
            modal.classList.remove('show')
        }
    })

    burger.addEventListener('click', () => {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active')
            slideMenu.classList.remove('active')
        } else {
            burger.classList.add('active')
            slideMenu.classList.add('active')
        }
        setLogo()
    })

    window.addEventListener('scroll', () => {
        const offset = window.pageYOffset
        const slideIsActive = slideMenu.classList.contains('active')
        
        if (offset <= 60 && !slideIsActive) {
            navOverlay.classList.remove('to-up')
            nav.classList.remove('scrolled')
            nav.classList.remove('hide')
        }
        if (currentScroll > offset && offset > 60 && !slideIsActive) {
            navOverlay.classList.add('to-up')
            nav.classList.add('scrolled')
            nav.classList.remove('hide')
        }
        if (currentScroll < offset && offset > 60 && !slideIsActive) {
            navOverlay.classList.remove('to-up')
            nav.classList.remove('scrolled')
            nav.classList.add('hide')
        }
        if (slideIsActive) {
            navOverlay.classList.add('to-up')
        }
        currentScroll = offset
    })
    

    slideWrap.addEventListener('click', (e) => {
        if(e.target.className == 'slide-menu__link') {
            html.classList.remove('lock-position')
            burger.classList.remove('active')
            slideMenu.classList.remove('active')
            setLogo()
        }
    })
}