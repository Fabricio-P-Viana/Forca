document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('ajuda')) {
        e.preventDefault();
        const abaAjuda = document.querySelector('.abaAjuda');
        if(abaAjuda.classList.contains('on')){
            abaAjuda.classList.add('off');
            abaAjuda.classList.remove('on');
        } else {
            abaAjuda.classList.add('on');
            abaAjuda.classList.remove('off');
        }
    }
})

// seuElemento.classList.add() = adiciona uma classe
// seuElemento.classList.remove() = remove uma classe
// seulemento.classList.contains() = verifica se a classe existe