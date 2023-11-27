
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

   
    card.appendChild(infos)
    

    card.onclick = () => {
        window.location.href = `detalhe.html?id=${jogador.id}`;

    }
    return card
}


