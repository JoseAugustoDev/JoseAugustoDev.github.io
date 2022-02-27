const btnAvancar = document.querySelector('.avancar');
const btnVoltar = document.querySelector('.voltar');

const imgs = document.querySelectorAll('.item');

btnAvancar.addEventListener('click', (e) => {
    e.preventDefault();

    imgs.forEach(items => {
        const img = items.nextElementSibling
        const displayValue = img.style.display
        img.style.display = displayValue === 'none' ? 'block' : 'none'
        
    })

    console.log('Olá!')
})

btnVoltar.addEventListener('click', (e) => {
    e.preventDefault();

    imgs.forEach(items => {
        const img = items.nextElementSibling
        const displayValue = img.style.display
        img.style.display = displayValue === 'none' ? 'block' : 'none'
        
    })

    console.log('Olá!');
})