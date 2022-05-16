// navbar
const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const home = document.querySelector('#homeNav')
const contact = document.querySelector('#contactNav')
const project = document.querySelector('#projectNav')
const certificates = document.querySelector('#certNav')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

home.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

contact.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

project.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})

certificates.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})



// auto text effect

const textEl = document.getElementById('web-dev')

const text = 'A Web Developer'
let idx = 1
writeText()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText,400)
}