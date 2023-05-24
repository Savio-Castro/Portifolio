const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let imagem_atual = 0;
let ultima_imagem = img.length - 1
let tamanho_imagem = 625;
let primeira_imagem = 0

function direita(){
    imagem_atual++;

    if(imagem_atual > ultima_imagem) {
        imagem_atual = primeira_imagem;
    }
    
    imgs.style.transform = `translateX(${imagem_atual * -tamanho_imagem}px)`;
}

function esquerda(){
    imagem_atual--;

    if(imagem_atual <= primeira_imagem) {
        imagem_atual = ultima_imagem;
    }
    
    imgs.style.transform = `translateX(${imagem_atual * -tamanho_imagem}px)`;
}

