const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img')

let idx = 0;

function carrossel() {
    idx++
    
    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

setInterval(carrossel, 6000);
































// const btnAvancar = document.querySelector('.avancar');
// const btnVoltar = document.querySelector('.voltar');

// const imgs = document.querySelectorAll('.item');

// btnAvancar.addEventListener('click', (e) => {
//     e.preventDefault();

//     imgs.forEach(items => {
//         const img = items.nextElementSibling
//         const displayValue = img.style.display
//         img.style.display = displayValue === 'none' ? 'block' : 'none'
        
//     })

//     console.log('Olá!')
// })

// btnVoltar.addEventListener('click', (e) => {
//     e.preventDefault();

//     imgs.forEach(items => {
//         const img = items.nextElementSibling
//         const displayValue = img.style.display
//         img.style.display = displayValue === 'none' ? 'block' : 'none'
        
//     })

//     console.log('Olá!');
// })