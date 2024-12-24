

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('show')
        } else {
            entrada.target.classList.remove('show')
        }
    })
    
})

const elementos = document.querySelectorAll('.hidden')

elementos.forEach((elemento) => myObserver.observe(elemento))



let caixaPrincipal = document.querySelector('caixa-principal')



document.querySelector('.bolinha').addEventListener('click', (e) => {
    e.target.classList.toggle('bolinha-move')
    document.body.classList.toggle('dark')
    
})



