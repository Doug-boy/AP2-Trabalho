sessionStorage.setItem("senha",hex_md5("SENHA123"))


async function fetchURL(url){

    const carregando = document.getElementById("loading")

    carregando.style.display = 'block'

    const resposta = await fetch(url)

    dados = await resposta.json();

    carregando.style.display = 'none'

    return dados
}


function cria_jogadores(url){
        
    const divJogadores = document.getElementById("jogadores")
    divJogadores.innerHTML = " "

    fetchURL(url).then(
    (resposta) => {
        for (const atleta of resposta) {

            const card = cria_card(atleta);
    
            divJogadores.appendChild(card);
        }
    }
    )
    

}
const sair_sessao = () => {
    sessionStorage.setItem("logado",false)
    const divJogadores = document.getElementById("jogadores")
    divJogadores.innerHTML = " "
    login()
}

function opcoes(){



    const content = document.getElementById("content");
    content.innerHTML = " ";

    const sair = document.createElement('div')
    sair.className = "sair"
    const titulo = document.createElement('h2')
    titulo.id = "titulo"
    titulo.textContent= "Atletas Botafogo 2023-2"
    sair.appendChild(titulo)

    const btn_sair = document.createElement('button')
    btn_sair.textContent = "sair"
    btn_sair.onclick = sair_sessao;
    sair.appendChild(btn_sair);



    const botoes = document.createElement('div')
    botoes.className = "botoes"

    const botao1 = document.createElement('button')
    botao1.textContent = "mostrar todos"
    botao1.onclick = () => {
    cria_jogadores("https://botafogo-atletas.mange.li/all")
    }

    botoes.appendChild(botao1);

    const botao2 = document.createElement('button')
    botao2.textContent = "elenco feminino"
    botao2.onclick = () => {
        cria_jogadores("https://botafogo-atletas.mange.li/feminino")
    }

    botoes.appendChild(botao2);

    const botao3 = document.createElement('button')
    botao3.textContent = "elenco masculino"
    botao3.onclick = () => {
        cria_jogadores("https://botafogo-atletas.mange.li/masculino")
    }

    botoes.appendChild(botao3);

    content.appendChild(sair)
    content.appendChild(botoes)



}




function login(){

    const content = document.getElementById("content");
    content.innerHTML = " ";
    const inputSenha = document.createElement('input')
    inputSenha.type = "password"
    inputSenha.id = "input-senha"
    inputSenha.placeholder = "Senha:"
    
    const botaoEntrar = document.createElement('button')
    botaoEntrar.id = "btn-entrar"
    botaoEntrar.textContent = "Entrar"

    botaoEntrar.addEventListener('click', () => {check_senha(inputSenha.value)})
    inputSenha.value = ""

    content.appendChild(inputSenha)
    content.appendChild(botaoEntrar)


}
check_logado()
function check_logado(){
    if (sessionStorage.getItem('logado')){
        opcoes()
    } else {
        const divJogadores = document.getElementById("jogadores")
        divJogadores.innerHTML = " "
        login()
    }
}

function check_senha(senha){

    const senhaPadrao = sessionStorage.getItem("senha")
    const senhaPassada = hex_md5(senha)

    if (senhaPadrao === senhaPassada){
        sessionStorage.setItem("logado",true)
        opcoes();

    } else {
        sessionStorage.setItem("logado",false)
        alert("senha passada é incorreta");
    }

}
