
function cria_card(jogador){
    const card = document.createElement('div')
    card.classList.add("card");
    const img = document.createElement('img')
    img.src = jogador.imagem;
    img.classList.add("card-img");
    card.appendChild(img)

    const infos = document.createElement("div")
    infos.classList.add("infos");
    const nome = document.createElement('h2')
    nome.textContent = jogador.nome;
    nome.classList.add("card-nome");
    infos.appendChild(nome)

    const pos = document.createElement('h2')
    pos.textContent = jogador.posicao;
    pos.classList.add("card-posicao");
    infos.appendChild(pos)

    card.appendChild(infos)
    

    card.onclick = () => {
        window.location.href = `detalhe.html?id=${jogador.id}`;

        // var id = jogador.id
        // url = `detalhes.html?id=${id}`
        // window.location.href = url;
      
        // url = `detalhes.html?id=${jogador.id}`
        // window.location.href = url;
      
        // var id = target.dataset.id
        // window.location.href = `detalhes.html?id=${id}`;
      
      
        //window.location.href = 'detalhes.html?meuId=' + encodeURIComponent(target.dataset.id)
        
      
        // var id = target.dataset.id
        //window.location.href = 'detalhes.html?meuId=' + encodeURIComponent(target.dataset.id)
    }
    return card
}


