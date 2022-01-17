const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

//Navigation
const section = document.querySelectorAll('h2')
const navLi = document.querySelectorAll('.sidenavD a')

//Display mobile menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')    
}
menu.addEventListener('click', mobileMenu)

//Navigation code
window.addEventListener('scroll', ()=> {
    let current = ''

    section.forEach( section => {
        const sectionTop = section.offsetTop
        const sectionHeight = screen.height
        if(pageYOffset >= (sectionTop + sectionHeight/2)){
            current = section.getAttribute('id')
        }
    })
    
    navLi.forEach( a =>{
        a.classList.remove('active')
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})

//Scrolling on the center
let anchorlinks = document.querySelectorAll('a[href^="#"]')
 
for (let item of anchorlinks) { // relitere 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center"
          })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}