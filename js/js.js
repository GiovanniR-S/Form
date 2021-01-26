const tags = document.querySelectorAll('.tag');
let selecionado = false;

function tagSelecinada(elemento){

    elemento.classList.add('select');
    if(!selecionado){
        elemento.classList.remove('select');
        selecionado = true;
        return;
    }

    selecionado = false;
    
}