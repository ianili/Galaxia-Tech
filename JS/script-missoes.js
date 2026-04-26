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


const title = document.querySelector('.titulo h1');
const text = title.textContent;

title.textContent = '';

text.split('').forEach(char => {
  const span = document.createElement('span');
  span.innerHTML = char === ' ' ? '&nbsp;' : char;
  title.appendChild(span);
});