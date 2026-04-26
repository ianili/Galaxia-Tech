/* 

ASSIM COMO O CSS, O JAVASCRIPT TEM UM ARQUIVO (ESSE), SERVINDO COMO BASE, CADA PÁGINA POSSUI UM ARQUIVO JS PARA ELA MESMA.

ESSE SE APLICA PARA A PÁGINA INICIAL, FAZENDO A ANIMAÇÃO DO MENU E DO TITULO.

*/

const botao = document.querySelector('.botao-menu'); /* variavel que busca uma classe dentro do html */
const menuLateral = document.querySelector('.menu-lateral');
const conteudo = document.querySelector('.conteudo');
const background = document.querySelector('.background');

botao.addEventListener('click', () => { /* addEventListener é para poder adicionar a classe quando o botão for clicado*/
    menuLateral.classList.toggle('ativo'); /* se for clicado, vai adicionar a classe 'ativo' na lista de classes, agora se já possuir a classe ele vai removela, por isso uso o toggle e não o add, e vai mudar o estilo conforme foi estilizado no css */
    botao.classList.toggle('ativo');
    background.classList.toggle('ativo');
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? 'rgba(0,0,0,0.5)' : 'transparent'; /* aqui é uma estrutura de verificação, assim como if e else, que serve para ver se dentro da lista de classe do menuLateral, já possui a classe 'ativo', se tiver ele muda o backgroundColor para rgba... (agente especifica a ação que atende requisito colocando entre '' após o ponto de interrogação) , se não tiver ele deixa transparente (denovo entre '' porem após colocarmos dois pontos, pois não atende o requisito) */
})

background.addEventListener('click', () => { /* quando */
    menuLateral.classList.remove('ativo');
    botao.classList.remove('ativo');
    background.classList.remove('ativo');
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? 'rgba(0,0,0,0.5)' : 'transparent';
})

/* TITULO */

document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('floating-text');
  const originalText = title.textContent.trim();
  
  title.textContent = ''; // limpa o texto

  originalText.split('').forEach((char, index) => {
    const span = document.createElement('span');
    
    // Trata espaços
    span.textContent = char === ' ' ? '\u00A0' : char;
    
    // Calcula delay e variação de duração automaticamente (fica bem embaralhado)
    const randomDelay = (index * 0.25) + (Math.random() * 3);
    const randomDuration = 14 + Math.random() * 8; // entre 14s e 22s
    
    span.style.setProperty('--delay', randomDelay.toFixed(2));
    span.style.setProperty('--duration', randomDuration.toFixed(1));
    
    // ISSO DEIXA ALGUMAS LETRAS DIFERENTESS UMA DAS OUTRAS
    if (Math.random() > 0.7) {
      span.style.animationName = 'space-float-intense';
    }
    
    title.appendChild(span);
  });
});


const style = document.createElement('style');
style.textContent = `
  @keyframes space-float-intense {
    0%   { transform: translate(0, 0) scale(1) rotate(0deg); }
    30%  { transform: translate(20px, -45px) scale(1.25) rotate(6deg); }
    60%  { transform: translate(-15px, -10px) scale(0.85) rotate(-5deg); }
    100% { transform: translate(0, 0) scale(1) rotate(0deg); }
  }
`;
document.head.appendChild(style);