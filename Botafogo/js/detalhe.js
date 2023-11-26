
const currentUrl = window.location.search

const urlParams = new URLSearchParams(currentUrl)

const id = urlParams.get('id');
const url = `https://botafogo-atletas.mange.li/${id}`


fetchURL(url).then(
    (resposta) => {
        const detalhe = document.getElementById('detalhe')
        
        const img = document.createElement("img")
        const nome = document.createElement("h2")
        const nome_completo = document.createElement("h2")
        const posicao = document.createElement("h2")
        const descricao = document.createElement("h2")
        const altura = document.createElement("h2")
        const nascimento = document.createElement("h2")


        img.src = resposta.imagem
        nome.textContent = resposta.nome
        nome_completo.textContent = resposta.nome_completo
        posicao.textContent = resposta.posicao
        descricao.textContent = resposta.descricao
        altura.textContent = resposta.altura
        nascimento.textContent = resposta.nascimento

        detalhe.appendChild(img)
        detalhe.appendChild(nome)
        detalhe.appendChild(nome_completo)
        detalhe.appendChild(posicao)
        detalhe.appendChild(descricao)
        detalhe.appendChild(altura)
        detalhe.appendChild(nascimento)

        const voltar = document.createElement('button')
        voltar.onclick = () => {window.location.href = 'index.html'}
        voltar.textContent = 'Voltar'
        detalhe.appendChild(voltar)
    }
)


